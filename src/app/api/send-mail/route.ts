import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

    const { name, email, message } = await request.json();

    try {
        await resend.emails.send({
            from: "Portofolio Arleyxa <onboarding@resend.dev>",
            to: ["workarleyxa@gmail.com"],
            subject: `New message from contact form`,
            html: `
                <h1>Ada yang ngirim email</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }

}