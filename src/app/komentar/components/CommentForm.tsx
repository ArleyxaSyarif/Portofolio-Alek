"use client";

import React from "react";
import { MessageSquare, RefreshCw, Send, User, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface CommentFormProps {
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  nama: string;
  setNama: (value: string) => void;
  isiKomentar: string;
  setIsiKomentar: (value: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({
  onSubmit,
  isSubmitting,
  nama,
  setNama,
  isiKomentar,
  setIsiKomentar,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#201f21]/80 backdrop-blur-xl shadow-2xl transition duration-500 h-fit order-1 lg:order-1 overflow-hidden"
    >
      {/* Accent Line Atas */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Header */}
      <div className="flex items-center gap-3.5 mb-6">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
          <MessageSquare size={20} />
        </div>
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
            Tulis Komentar
          </h3>
          <p className="font-body text-xs text-[#8e9192]">
            Bagikan pendapat atau masukan Anda
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        {/* Input Nama */}
        <div>
          <label
            htmlFor="nama"
            className="block text-[11px] uppercase tracking-widest font-semibold mb-2 text-[#8e9192]"
          >
            Nama Anda
          </label>
          <div className="relative">
            <User
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8e9192]"
            />
            <input
              type="text"
              id="nama"
              className="w-full pl-10 pr-4 py-3 border border-white/10 rounded-xl bg-white/5 text-[#e5e1e4] placeholder-[#8e9192] text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-body"
              placeholder="Masukkan nama Anda"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Input Komentar */}
        <div>
          <label
            htmlFor="komentar"
            className="block text-[11px] uppercase tracking-widest font-semibold mb-2 text-[#8e9192]"
          >
            Komentar Anda
          </label>
          <div className="relative">
            <MessageCircle
              size={16}
              className="absolute left-3.5 top-3.5 text-[#8e9192]"
            />
            <textarea
              id="komentar"
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-white/10 rounded-xl bg-white/5 text-[#e5e1e4] placeholder-[#8e9192] text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed resize-none font-body"
              placeholder="Tuliskan tanggapan atau saran Anda..."
              value={isiKomentar}
              onChange={(e) => setIsiKomentar(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Tombol Kirim */}
        <motion.button
          whileHover={isSubmitting ? {} : { scale: 1.01 }}
          whileTap={isSubmitting ? {} : { scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition duration-300 flex items-center justify-center gap-2 ${
            isSubmitting
              ? "bg-white/10 text-[#8e9192] cursor-not-allowed border border-white/5"
              : "bg-white text-[#121214] hover:bg-[#e5e1e4] shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          }`}
        >
          {isSubmitting ? (
            <>
              <RefreshCw size={16} className="animate-spin text-[#8e9192]" />
              <span>Mengirim...</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>Kirim Komentar</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CommentForm;