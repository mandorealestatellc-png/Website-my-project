import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase-server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, land_address, apn, lot_size, utilities_known, asking_price, notes } = body;

    if (!name || !land_address) {
      return NextResponse.json({ error: "Name and land address are required" }, { status: 400 });
    }

    const supabase = createServerClient();
    const { error } = await supabase.from("land_leads").insert([{
      name, phone, email, land_address, apn, lot_size,
      utilities_known, asking_price, notes, status: "New",
    }]);

    if (error) throw error;

    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      await resend.emails.send({
        from: "mandorealestatellc@gmail.com",
        to: process.env.NOTIFICATION_EMAIL,
        subject: `New Land Lead: ${name}`,
        html: `
          <h2>New Land Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || "—"}</p>
          <p><strong>Email:</strong> ${email || "—"}</p>
          <p><strong>Land Address:</strong> ${land_address}</p>
          <p><strong>APN:</strong> ${apn || "—"}</p>
          <p><strong>Lot Size:</strong> ${lot_size || "—"}</p>
          <p><strong>Utilities:</strong> ${utilities_known || "—"}</p>
          <p><strong>Asking Price:</strong> ${asking_price || "—"}</p>
          <p><strong>Notes:</strong> ${notes || "—"}</p>
        `,
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
