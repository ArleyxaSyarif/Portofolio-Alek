"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
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
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mohamad-arleyxa-syarif-5ab21131a/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/mohamad._arleyxa",
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
    },
    {
      icon: Mail,
      label: "Email",
      value: "workarleyxa@gmail.com",
    },
  ];

  return (
    <footer
      className="relative w-full bg-[#121214] text-[#e5e1e4] font-body overflow-hidden border-t border-white/10"
      id="kontak"
    >
      {/* Global Style Injections */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap");

        .font-display {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .font-body {
          font-family: "Inter", sans-serif;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.08) 1px,
            transparent 1px
          );
          background-size: 24px 24px;
        }

        .radial-mask {
          mask-image: radial-gradient(
            ellipse at center,
            black 40%,
            transparent 80%
          );
          -webkit-mask-image: radial-gradient(
            ellipse at center,
            black 40%,
            transparent 80%
          );
        }

        .text-gradient {
          background: linear-gradient(to right, #ffffff, #8e9192);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern radial-mask opacity-60" />
      </div>

      <div className="relative z-10">
        {/* Top CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-b border-white/10 py-20 md:py-28 px-5 sm:px-8"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#201f21]/80 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#8e9192] animate-pulse" />
                <span className="text-xs font-semibold text-[#e5e1e4] uppercase tracking-wider">
                  Hubungi Saya
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-gradient"
            >
              Siap Untuk <br />
              <span className="text-white">Kolaborasi Menarik?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#c4c7c8] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-body"
            >
              Saya terbuka untuk diskusi tentang proyek baru, ide kreatif, atau
              sekadar ngobrol tentang teknologi dan inovasi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://instagram.com/mohamad._arleyxa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#121214] font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#e5e1e4] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group"
              >
                <span>Hubungi Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document
                    .getElementById("beranda")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wide transition-all duration-300 backdrop-blur-md"
              >
                Portfolio Saya
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16"
          >
            {/* Branding */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="font-display text-3xl font-extrabold text-white tracking-tight mb-2">
                  Arleyxa
                </h3>
                <div className="w-10 h-0.5 bg-white/40 rounded-full" />
              </div>
              <p className="text-[#8e9192] text-sm leading-relaxed mb-6">
                Fullstack Developer yang passionate dalam menciptakan solusi
                digital yang elegan, scalable, dan user-friendly.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#8e9192]">
                <Heart className="w-3.5 h-3.5 text-white/60 fill-white/20 animate-pulse" />
                <span>Crafted with passion</span>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="font-display text-xs font-bold text-white mb-6 uppercase tracking-wider">
                Kontak
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex gap-3.5 items-start">
                      <div className="p-2 rounded-lg bg-[#201f21] border border-white/10 text-[#c6c6c7]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#8e9192] uppercase tracking-widest font-semibold mb-0.5">
                          {info.label}
                        </p>
                        <p className="text-xs text-[#e5e1e4] font-medium">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="font-display text-xs font-bold text-white mb-6 uppercase tracking-wider">
                Menu
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={link.href}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all duration-200"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#8e9192]" />
                      <span className="text-xs font-medium text-[#c4c7c8] hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="font-display text-xs font-bold text-white mb-6 uppercase tracking-wider">
                Social
              </h4>
              <div className="space-y-2.5">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="group flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-[#8e9192] group-hover:text-white transition-colors" />
                        <span className="text-xs font-medium text-[#c4c7c8] group-hover:text-white transition-colors">
                          {social.name}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8e9192] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-white/10 w-full mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e9192]">
            <p className="text-center sm:text-left">
              © {currentYear} Mohamad Arleyxa Syarif. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <span>by</span>
              <span className="text-white font-bold">Arleyxa</span>
              <Heart className="w-3.5 h-3.5 text-white fill-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;