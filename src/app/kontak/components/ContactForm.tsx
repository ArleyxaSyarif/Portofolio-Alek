"use client";

import React, { useState } from "react";
import { Send, User, Mail, MessageSquare, ArrowRight, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

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
      toast.error("Pesan gagal dikirim");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#201f21]/70 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden"
    >
      {/* Accent Glow Effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/[0.03] rounded-full blur-2xl pointer-events-none" />

      {/* Header Form */}
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
          <Send size={20} className="text-[#e5e1e4]" />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-white tracking-tight">
            Kirim Pesan
          </h3>
          <p className="text-xs text-[#8e9192] font-body mt-0.5">
            Isi formulir di bawah ini untuk menghubungi saya.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Input Nama */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-[#8e9192] uppercase tracking-wider mb-2">
            Nama Lengkap Anda
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e9192]" size={18} />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-[#18181a] border border-white/10 rounded-xl text-xs md:text-sm text-[#e5e1e4] placeholder:text-[#5f6368] focus:border-white/30 focus:bg-[#1f1f22] focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200"
              placeholder="Masukkan nama Anda"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Input Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#8e9192] uppercase tracking-wider mb-2">
            Alamat Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e9192]" size={18} />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-[#18181a] border border-white/10 rounded-xl text-xs md:text-sm text-[#e5e1e4] placeholder:text-[#5f6368] focus:border-white/30 focus:bg-[#1f1f22] focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200"
              placeholder="contoh@email.com"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Input Pesan */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#8e9192] uppercase tracking-wider mb-2">
            Pesan
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-[#8e9192]" size={18} />
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full pl-11 pr-4 py-3.5 bg-[#18181a] border border-white/10 rounded-xl text-xs md:text-sm text-[#e5e1e4] placeholder:text-[#5f6368] focus:border-white/30 focus:bg-[#1f1f22] focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200 resize-none"
              placeholder="Tulis pesan Anda di sini..."
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* ReCAPTCHA (Dark Theme) */}
        <div className="pt-2 overflow-x-auto">
          <ReCAPTCHA
            sitekey="6LcTU2QsAAAAAC-X1tpG_dCRG5-dN-27wCp7abw7"
            onChange={(token) => setCaptchaToken(token)}
            theme="dark"
            className="rounded-lg overflow-hidden border border-white/10"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
            isSubmitting
              ? "bg-white/10 text-[#8e9192] cursor-not-allowed border border-white/10"
              : "bg-white text-[#121214] hover:bg-[#e5e1e4] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#8e9192]" />
              <span>Mengirim Pesan...</span>
            </>
          ) : (
            <>
              <span>Kirim Sekarang</span>
              <ArrowRight size={16} />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;