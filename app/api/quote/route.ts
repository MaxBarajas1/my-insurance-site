import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const fields = [
      ["Profile", data.profile],
      ["Interest", data.interest],
      ["IUL Contribution", data.iul_contribution],
      ["Mortgage Remaining", data.mortgage_remaining],
      ["Coverage", data.coverage],
      ["Name", data.name],
      ["Phone", data.phone],
      ["Email", data.email],
      ["Date of Birth", data.dob],
      ["Gender", data.gender],
      ["Tobacco", data.tobacco],
      ["Health", data.health],
      ["Zipcode", data.zipcode],
    ].filter(([, val]) => val);

    const emailBody = fields.map(([label, val]) => `<tr><td style="padding:8px 12px;font-weight:600;color:#1a3a5c;border-bottom:1px solid #e8f0f8;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #e8f0f8;">${val}</td></tr>`).join("");

    await resend.emails.send({
      from: "Your Future Protection <onboarding@resend.dev>",
      to: "yfpsupport@gmail.com",
      subject: `New Lead: ${data.name} - ${data.interest || "General"}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1a3a5c;padding:20px;text-align:center;">
            <h1 style="color:#f0c040;margin:0;font-size:20px;">New Lead from Your Future Protection</h1>
          </div>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            ${emailBody}
          </table>
          <p style="margin-top:20px;font-size:13px;color:#888;">This lead was submitted through yourfutureprotection.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}