"use client";

import Image from "next/image";
import React from "react";
import { Meteors } from "@/components/magicui/meteors";
import { motion } from "framer-motion";

// SVG Icons (Monokrom)
const CodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const CameraIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const ChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full relative flex items-center justify-center antialiased bg-[#0c0c0e] overflow-hidden px-6 py-20"
      id="beranda"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* KOLOM KIRI: Informasi Utama */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Judul Nama */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Mohamad <br />
            Arleyxa Syarif
          </h1>

          {/* Garis Aksen */}
          <div className="w-16 h-[3px] bg-neutral-700/80 my-6 rounded-full" />

          {/* Deskripsi Singkat */}
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg mb-8 font-normal">
            Pengembang Web dan UI/UX dengan dedikasi untuk menciptakan website
            yang indah, fungsional, dan memberikan pengalaman pengguna yang tak terlupakan.
          </p>

          {/* Informasi Sekolah & Peran */}
          <div className="mb-8">
            <p className="text-neutral-200 text-sm font-semibold">
              Seorang Software Engineer | Frontend Developer yang ingin berkembang di dunia Teknologi.
            </p>
            <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase mt-1">
              SOFTWARE ENGINEER | FRONTEND DEVELOPER
            </p>
          </div>

          {/* Tombol Aksi Utama */}
          <div className="flex items-center gap-4 mb-10">
            <a
              href="#sertifikasi"
              className="px-7 py-2.5 rounded-full bg-white text-black font-semibold text-xs md:text-sm hover:bg-neutral-200 transition-all duration-300 shadow-md"
            >
              Sertifikasi
            </a>
            <a
              href="#tentangsaya"
              className="px-7 py-2.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-white font-semibold text-xs md:text-sm hover:bg-neutral-800 transition-all duration-300"
            >
              Tentang Saya
            </a>
          </div>

          {/* Icon Social Media */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ArleyxaSyarif"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all duration-300"
            >
              <CodeIcon />
            </a>
            <a
              href="https://instagram.com/mohamad._arleyxa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all duration-300"
            >
              <CameraIcon />
            </a>
            <a
              href="https://discord.com/users/kichan9190"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all duration-300"
            >
              <ChatIcon />
            </a>
          </div>
        </div>

        {/* KOLOM KANAN: Foto Profil (Enhanced) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full relative group">
          {/* 1. Ambient Background Glow (Membuat kartu foto lebih menonjol) */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-white/10 via-neutral-500/10 to-transparent rounded-[36px] blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

          {/* Kartu Utama Foto */}
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-[32px] overflow-hidden border border-neutral-800/80 shadow-2xl bg-neutral-950/80">

            {/* Foto Profil Utama */}
            <Image
              src="/img/alek.jpg"
              alt="Mohamad Arleyxa Syarif"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />

            {/* Overlay Gradien Halus */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/90 via-transparent to-black/20 opacity-80 pointer-events-none" />

            {/* 2. Floating Status Badge (Pojok Kiri Atas) */}
            <div className="absolute top-4 left-4 z-20">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700/50 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-medium text-neutral-200 tracking-wide">
                  Available for work
                </span>
              </div>
            </div>

            {/* 3. Floating Glassmorphism Info Card (Pojok Bawah) */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="p-3.5 rounded-2xl bg-neutral-900/70 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">
                    Mohamad Arleyxa
                  </p>
                  <p className="text-[11px] text-neutral-400 font-medium mt-0.5">
                    Software Engineer | Frontend Developer
                  </p>
                </div>

                {/* Tech Tag / Badge Kecil */}
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-[10px] font-mono font-semibold text-neutral-300">
                  SMK Pesat
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Efek Meteors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors />
      </div>
    </motion.div>
  );
};

export default Profile;