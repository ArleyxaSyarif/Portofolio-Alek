import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message, token } = await request.json();
        const secret = process.env.RECAPTCHA_SECRET;

        // 1️⃣ Verifikasi ReCAPTCHA
        const verifyRes = await fetch(
            `https://www.google.com/recaptcha/api/siteverify`,
            {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `secret=${secret}&response=${token}`,
            }
        );
        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
            return NextResponse.json(
                { message: "Captcha gagal, coba lagi!" },
                { status: 400 }
            );
        }

        // 2️⃣ Kirim email pakai Resend.com
        await resend.emails.send({
            from: "Portofolio Arleyxa <onboarding@resend.dev>",  // ganti dengan domain yang sudah diverifikasi
            to: ["workarleyxa@gmail.com"],      // ganti dengan email penerima
            subject: `Pesan dari ${name}`,
            text: message,
            html: `<p><strong>Nama:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Pesan:</strong><br/>${message}</p>`,
        });

        return NextResponse.json({ message: "Pesan berhasil dikirim!" });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Terjadi kesalahan saat mengirim email" },
            { status: 500 }
        );
    }
}
