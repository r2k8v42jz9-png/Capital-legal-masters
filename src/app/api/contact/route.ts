import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
    };

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Ism, email va xabar maydonlarini to'ldiring." },
        { status: 400 }
      );
    }

    // Validate env vars
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error("[contact] Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Build HTML email
    const html = `
<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8" /></head>
<body style="font-family:Arial,sans-serif;background:#F5F2EC;padding:32px;color:#0F1923;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #ddd;padding:32px;">
    <div style="border-bottom:2px solid #C41E3A;padding-bottom:16px;margin-bottom:24px;">
      <h2 style="margin:0;color:#C41E3A;font-size:1.1rem;letter-spacing:0.1em;text-transform:uppercase;">
        CAPITAL LEGAL MASTERS
      </h2>
      <p style="margin:4px 0 0;color:#666;font-size:0.8rem;">Yangi murojaat / Новое обращение</p>
    </div>

    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="padding:8px 0;color:#666;font-size:0.82rem;width:130px;vertical-align:top;">Ism / Имя</td>
        <td style="padding:8px 0;font-size:0.9rem;font-weight:600;">${name}</td>
      </tr>
      <tr style="border-top:1px solid #f0f0f0;">
        <td style="padding:8px 0;color:#666;font-size:0.82rem;vertical-align:top;">Email</td>
        <td style="padding:8px 0;font-size:0.9rem;">
          <a href="mailto:${email}" style="color:#C41E3A;">${email}</a>
        </td>
      </tr>
      ${
        phone
          ? `
      <tr style="border-top:1px solid #f0f0f0;">
        <td style="padding:8px 0;color:#666;font-size:0.82rem;vertical-align:top;">Telefon</td>
        <td style="padding:8px 0;font-size:0.9rem;">
          <a href="tel:${phone.replace(/[\s-]/g, "")}" style="color:#C41E3A;">${phone}</a>
        </td>
      </tr>`
          : ""
      }
      ${
        subject
          ? `
      <tr style="border-top:1px solid #f0f0f0;">
        <td style="padding:8px 0;color:#666;font-size:0.82rem;vertical-align:top;">Mavzu / Тема</td>
        <td style="padding:8px 0;font-size:0.9rem;">${subject}</td>
      </tr>`
          : ""
      }
      <tr style="border-top:1px solid #f0f0f0;">
        <td style="padding:12px 0 8px;color:#666;font-size:0.82rem;vertical-align:top;">Xabar / Сообщение</td>
        <td style="padding:12px 0 8px;font-size:0.9rem;"></td>
      </tr>
    </table>

    <div style="background:#f9f9f9;border-left:3px solid #C41E3A;padding:14px 16px;margin-top:4px;font-size:0.9rem;line-height:1.7;white-space:pre-wrap;">${message}</div>

    <p style="margin-top:24px;font-size:0.72rem;color:#999;border-top:1px solid #eee;padding-top:12px;">
      MCHJ «CAPITAL LEGAL MASTERS» — sayt orqali yuborilgan murojaat<br>
      Toshkent shahri, Yunusobod tumani | +998 90 015 07 81
    </p>
  </div>
</body>
</html>`.trim();

    await transporter.sendMail({
      from: `"CLM Website" <${gmailUser}>`,
      to: "capitallegalmasters@gmail.com",
      replyTo: email,
      subject: subject
        ? `CLM murojaat: ${subject} — ${name}`
        : `CLM murojaat: ${name}`,
      html,
      text: `Ism: ${name}\nEmail: ${email}\nTelefon: ${phone || "—"}\nMavzu: ${subject || "—"}\n\nXabar:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send error:", err);
    return NextResponse.json(
      { error: "Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring." },
      { status: 500 }
    );
  }
}
