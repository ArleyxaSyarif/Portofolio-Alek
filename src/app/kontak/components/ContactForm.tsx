"use client";

import React, { useState } from "react";
import { Send, User, Mail, MessageSquare, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

interface ContactFormProps {
    onSubmit: (e: React.FormEvent, data: { name: string; email: string; message: string }) => void;
    isSubmitting: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isSubmitting }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            toast.error("Tolong centang captcha dulu!");
            return;
        }

        const response = await fetch("/api/send-mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message, token: captchaToken }),
        });

        if (response.ok) {
            toast.success("Pesan berhasil dikirim");
            setName("");
            setEmail("");
            setMessage("");
            setCaptchaToken(null);
        } else {
            toast.error("Pesan gagal dikirim ");
        }

    };

    return (
        <div className="bg-[#161633]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <Send className="text-purple-400" size={24} />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Kirim Pesan
                </span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-400">
                        Nama Lengkap Anda
                    </label>
                    <div className="relative">
                        <User className="absolute left-4 top-3.5 text-gray-500" size={18} />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-[#0f0f25] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-600"
                            placeholder="Masukkan nama Anda"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-400">
                        Alamat Email
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-3.5 text-gray-500" size={18} />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-[#0f0f25] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-600"
                            placeholder="contoh@email.com"
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-400">
                        Pesan
                    </label>
                    <div className="relative">
                        <MessageSquare className="absolute left-4 top-3.5 text-gray-500" size={18} />
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            className="w-full pl-12 pr-4 py-3 bg-[#0f0f25] border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-600 resize-none"
                            placeholder="Tulis pesan Anda di sini..."
                            required
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <ReCAPTCHA
                    sitekey="6LcTU2QsAAAAAC-X1tpG_dCRG5-dN-27wCp7abw7"
                    onChange={(token) => setCaptchaToken(token)}
                    className="mb-4"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] ${isSubmitting
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg shadow-purple-900/40"
                        }`}
                >
                    {isSubmitting ? "Mengirim..." : "Kirim Sekarang"}
                    {!isSubmitting && <ArrowRight size={20} />}

                </button>
            </form>
        </div>
    );
};

export default ContactForm;
