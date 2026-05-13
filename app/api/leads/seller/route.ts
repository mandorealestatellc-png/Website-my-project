import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, property_address, property_condition, timeline, asking_price, reason_for_selling, interested_in, notes } = body;

    if (!name || !property_address) {
      return NextResponse.json({ error: "Name and property address are required" }, { status: 400 });
    }

    const supabase = createServerClient();
    const { error } = await supabase.from("seller_leads").insert([{
      name, phone, email, property_address, property_condition,
      timeline, asking_price, reason_for_selling, interested_in, notes,
      status: "New",
    }]);

    if (error) throw error;

    // Email notification (non-blocking)
    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: process.env.NOTIFICATION_EMAIL,
        subject: `New Seller Lead: ${name}`,
        html: `
          <h2>New Seller Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || "—"}</p>
          <p><strong>Email:</strong> ${email || "—"}</p>
          <p><strong>Property:</strong> ${property_address}</p>
          <p><strong>Condition:</strong> ${property_condition || "—"}</p>
          <p><strong>Timeline:</strong> ${timeline || "—"}</p>
          <p><strong>Asking Price:</strong> ${asking_price || "—"}</p>
          <p><strong>Reason:</strong> ${reason_for_selling || "—"}</p>
          <p><strong>Interested In:</strong> ${interested_in || "—"}</p>
          <p><strong>Notes:</strong> ${notes || "—"}</p>
        `,
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
