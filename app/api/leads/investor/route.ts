import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, buyer_type, preferred_zip_codes, max_purchase_price, financing_type, preferred_property_type, notes } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const supabase = createServerClient();
    const { error } = await supabase.from("investor_buyers").insert([{
      name, phone, email, buyer_type, preferred_zip_codes,
      max_purchase_price, financing_type, preferred_property_type, notes,
      status: "New",
    }]);

    if (error) throw error;

    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: process.env.NOTIFICATION_EMAIL,
        subject: `New Investor Buyer: ${name}`,
        html: `
          <h2>New Investor Buyer Registration</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || "—"}</p>
          <p><strong>Email:</strong> ${email || "—"}</p>
          <p><strong>Buyer Type:</strong> ${buyer_type || "—"}</p>
          <p><strong>Max Price:</strong> ${max_purchase_price || "—"}</p>
          <p><strong>Financing:</strong> ${financing_type || "—"}</p>
          <p><strong>Zip Codes:</strong> ${preferred_zip_codes || "—"}</p>
          <p><strong>Property Type:</strong> ${preferred_property_type || "—"}</p>
          <p><strong>Notes:</strong> ${notes || "—"}</p>
        `,
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
