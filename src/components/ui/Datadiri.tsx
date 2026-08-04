"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronLeft,
  Code2,
  Target,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const Datadiri = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="tentangsaya"
      className="relative w-full py-20 px-4 md:px-8 bg-black text-white overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 backdrop-blur-md text-xs font-medium text-neutral-300">
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 leading-tight">
            Software Engineer
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Passion & Precision.
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Mengubah ide menjadi solusi digital yang impactful. Memadukan keahlian
            teknis dengan visi desain untuk pengalaman pengguna tingkat tinggi.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Left Column - Full Photo Card */}
          {/* Left Column - Full Photo Card */}
          <div className="lg:col-span-5 bg-[#121212] border border-neutral-800/80 rounded-3xl overflow-hidden relative min-h-[420px] lg:min-h-full group">
            {/* Foto Profil dengan Efek Hover Zoom Halus */}
            <img
              src="/img/profil1.jpeg"
              alt="Mohamad Arleyxa Syarif"
              className="w-full h-full object-cover filter contrast-125 transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay (Memastikan teks & badge di atasnya terbaca jelas) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

            {/* Badge Status (Atas Kiri) */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-medium text-neutral-300 tracking-wider uppercase">
                Available for work
              </span>
            </div>

            {/* Text Info Overlay (Bawah Kiri) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                Based in Indonesia
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Mohamad Arleyxa S.
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Software Engineer & Frontend Developer
              </p>
            </div>
          </div>

          {/* Right Column - Content Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* The Journey Card */}
            <div className="bg-[#121212] border border-neutral-800/80 rounded-3xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                The Journey
              </h3>
              <div className="space-y-4 text-neutral-400 text-xs md:text-sm leading-relaxed">
                <p>
                  Saya adalah seorang Software Engineer dengan spesialisasi Frontend
                  Development yang berfokus pada pengembangan aplikasi web modern. Saya
                  percaya bahwa antarmuka yang baik bukan hanya menarik secara visual,
                  tetapi juga cepat, aksesibel, dan mampu memberikan pengalaman pengguna
                  yang optimal.
                </p>

                <p>
                  Sebagai lulusan SMK Informatika Pesat Bogor, saya telah mengembangkan
                  berbagai proyek menggunakan React, Next.js, TypeScript, Tailwind CSS,
                  Laravel, dan MySQL. Saya senang mempelajari teknologi baru serta
                  membangun solusi digital yang berkualitas dengan pendekatan clean code
                  dan performa yang optimal.
                </p>
              </div>
            </div>

            {/* Bottom Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Developer Passionate Card */}
              <div className="bg-[#121212] border border-neutral-800/80 rounded-3xl p-6 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-neutral-300">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Developer Passionate
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Membangun sistem dengan kode yang bersih, efisien, dan
                  terstruktur. Mengutamakan performa dan skalabilitas dalam
                  setiap baris instruksi.
                </p>
              </div>

              {/* Visi Karir Card */}
              <div className="bg-[#121212] border border-neutral-800/80 rounded-3xl p-6 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-neutral-300">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Visi Karir
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Menjadi arsitek solusi digital terkemuka yang mampu
                  menjembatani kesenjangan antara kebutuhan bisnis kompleks dan
                  desain antarmuka intuitif.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Actions & Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-12"
        >
          <a
            href="#projek"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs md:text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2"
          >
            Lihat Proyek
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#kontak"
            className="px-6 py-3 rounded-full bg-[#121212] border border-neutral-800 text-white font-medium text-xs md:text-sm hover:bg-neutral-900 transition-colors flex items-center gap-2"
          >
            Hubungi Saya
            <Mail className="w-4 h-4" />
          </a>

          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://github.com/arleyxasyarif"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-[#121212] border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/mohamad-arleyxa-syarif-3b4b621b4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-[#121212] border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Datadiri;