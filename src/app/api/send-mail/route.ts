import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

    const { name, email, message, token } = await request.json();
    const secret = process.env.RECAPTCHA_SECRET;

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
        return NextResponse.json({ message: "Captcha gagal, coba lagi!" }, { status: 400 });
    }

      // lanjut kirim email / proses data
    console.log({ name, email, message });

    return NextResponse.json({ message: "Pesan berhasil dikirim!" });



}