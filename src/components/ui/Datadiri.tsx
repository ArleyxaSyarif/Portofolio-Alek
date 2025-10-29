"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Zap,
  Target,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react";

const Datadiri = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: "Tahun Belajar", value: "3+", icon: Sparkles },
    { label: "Proyek Selesai", value: "20+", icon: Code2 },
    { label: "Teknologi", value: "13+", icon: Zap },
    { label: "Sertifikat", value: "4+", icon: Target },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(10px)" }
      }
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative w-full py-20 md:py-40 bg-black overflow-hidden"
      id="tentangsaya"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360, y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml?utf8,<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" stroke-width="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)" /></svg>\')',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-12 origin-left"
        ></motion.div>

        {/* Main Content - Vertical Stack */}
        <div className="space-y-16">
          {/* Top Section - Title and Intro */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/5 backdrop-blur">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
                  Tentang Saya
                </span>
              </div>
            </motion.div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-2">
              Fullstack Developer Passionate
            </p>
            <p className="text-lg md:text-xl text-gray-400">
              Mengubah ide menjadi
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mx-2 font-semibold">
                solusi digital
              </span>
              yang impactful
            </p>
          </motion.div>

          {/* Middle Section - Image + Info Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          >
            {/* Profile Image - Left */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-1 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:scale-110"></div>

                <div className="relative bg-black p-2 rounded-3xl border border-white/10 group-hover:border-cyan-500/50 transition-all overflow-hidden">
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden">
                    <motion.img
                      src="/img/alek.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full text-sm shadow-lg shadow-cyan-500/50"
                >
                  Full Stack Dev
                </motion.div>
              </div>
            </motion.div>

            {/* Info Cards - Right */}
            <div className="md:col-span-2 space-y-5">
              {/* About Card */}
              <motion.div
                whileHover={{ x: 10 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent border border-purple-500/30 hover:border-purple-500/60 backdrop-blur-sm overflow-hidden transition-all"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent transition-all"></div>

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Developer Passionate
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Saya Mohamad Arleyxa Syarif, seorang developer yang
                        menghadirkan passion dalam setiap proyek. Percaya bahwa
                        setiap kode adalah karya seni untuk menyelesaikan
                        masalah nyata.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ delay: 0.05 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent border border-blue-500/30 hover:border-blue-500/60 backdrop-blur-sm overflow-hidden transition-all"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent transition-all"></div>

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Visi Karir
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Bercita-cita menjadi Fullstack Developer yang memimpin
                        tim dengan dampak positif. Fokus mengasah skill dan
                        terus belajar teknologi terbaru di industri.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/arleyxasyarif"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 hover:border-white/30 transition-all group hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20"
                >
                  <Github className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/mohamad-arleyxa-syarif-3b4b621b4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 hover:border-white/30 transition-all group hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-cyan-500/20"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-white">
              Pencapaian & Milestone
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.6 + idx * 0.08 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-white/10 hover:border-white/30 text-center overflow-hidden transition-all"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-b from-cyan-500 to-transparent transition-opacity"></div>
                    <div className="relative">
                      <Icon className="w-6 h-6 mx-auto mb-3 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <a href="#projek">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 md:px-10 py-4 rounded-xl font-bold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:via-purple-500 transition-all duration-500"></div>
                <div className="absolute inset-0.5 bg-black rounded-lg group-hover:bg-gray-900 transition-colors"></div>
                <span className="relative flex items-center gap-2 justify-center text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:from-purple-400 group-hover:to-pink-400 bg-clip-text font-bold">
                  Lihat Proyek
                  <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-pink-400 transition-colors" />
                </span>
              </motion.button>
            </a>

            <a href="#kontak">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 md:px-10 py-4 rounded-xl font-bold text-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all"
              >
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all"></div>
                <span className="relative text-white group-hover:text-cyan-400 transition-colors">
                  Hubungi Saya
                </span>
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-16 origin-right"
        ></motion.div>
      </div>
    </motion.section>
  );
};

export default Datadiri;
