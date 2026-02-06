"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  Sparkles,
  Heart,
  Code2,
  Zap,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    {
      name: "Github",
      icon: Github,
      url: "https://github.com/ArleyxaSyarif",
      gradient: "from-gray-600 to-gray-800",
      hoverGlow: "hover:shadow-gray-500/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mohamad-arleyxa-syarif-5ab21131a/",
      gradient: "from-blue-600 to-blue-800",
      hoverGlow: "hover:shadow-blue-500/50",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/mohamad._arleyxa",
      gradient: "from-pink-600 to-red-600",
      hoverGlow: "hover:shadow-pink-500/50",
    },
  ];

  const quickLinks = [
    { name: "Beranda", href: "#beranda", icon: Code2 },
    { name: "Tentang Saya", href: "#tentangsaya", icon: Sparkles },
    { name: "Keterampilan", href: "#keterampilan", icon: Zap },
    { name: "Projek", href: "#projek", icon: Code2 },
    { name: "Sertifikat", href: "#sertifikasi", icon: Heart },
    { name: "Kontak", href: "#kontak", icon: Mail },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Bogor, Indonesia",
      color: "text-cyan-400",
    },

    {
      icon: Mail,
      label: "Email",
      value: "workarleyxa@gmail.com",
      color: "text-purple-400",
    },
  ];

  return (
    <footer className="relative w-full bg-black overflow-hidden" id="kontak">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml?utf8,<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" stroke-width="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)" /></svg>\')',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Top CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-b border-white/10 py-24 px-4 sm:px-8"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/5 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-sm font-bold text-cyan-400 uppercase tracking-[0.15em]">
                  Hubungi Saya
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                Siap Untuk
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Kolaborasi Menarik?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Saya terbuka untuk diskusi tentang proyek baru, ide kreatif, atau
              sekadar ngobrol tentang teknologi dan inovasi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="https://instagram.com/mohamad._arleyxa"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl font-bold text-lg overflow-hidden inline-flex items-center gap-2 justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:via-purple-500 transition-all duration-500" />
                <div className="absolute inset-0.5 bg-black rounded-lg group-hover:bg-gray-900/50 transition-colors" />

                <span className="relative text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:from-purple-400 group-hover:to-pink-400 bg-clip-text font-bold flex items-center gap-2">
                  Hubungi Sekarang
                  <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-pink-400 transition-colors" />
                </span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:border-white/40 transition-all"
              >
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 rounded-xl transition-all" />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("beranda")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="relative text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2 justify-center">
                    Portfolio Saya
                  </span>
                </a>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          >
            {/* Branding */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <motion.div whileHover={{ y: -5 }} className="mb-8">
                <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  Arleyxa
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
              </motion.div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Fullstack Developer yang passionate dalam menciptakan solusi
                digital yang elegant, scalable, dan user-friendly.
              </p>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-gray-400 text-xs">
                  Crafted with passion
                </span>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />
                Kontak
              </h4>
              <div className="space-y-5">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 8, color: "#fff" }}
                      className="group cursor-pointer flex gap-4"
                    >
                      <div
                        className={`p-2.5 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-white/10 group-hover:border-white/30 transition-all ${info.color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">
                          {info.label}
                        </p>
                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
                Menu
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={link.href}
                      whileHover={{ x: 4, y: -2 }}
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 hover:to-white/5 border border-white/10 hover:border-white/20 transition-all"
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                      <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-red-400 rounded-full" />
                Social
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:border-white/30 bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 transition-all ${social.hoverGlow} hover:shadow-lg`}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Divider with animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left mb-8"
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © {currentYear} Mohamad Arleyxa Syarif. All rights reserved.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <span>Made with</span>

              <span>by</span>
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-bold">
                Arleyxa
              </span>
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
