"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG Icons inline
const MenuIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
  </svg>
);

const ZapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const AwardIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8 16 12 19 16 16" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("beranda");
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section saat scroll menggunakan IntersectionObserver
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const options = {
      threshold: 0.1,
      rootMargin: "-100px 0px -66% 0px",
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
    }
    setIsOpen(false);
  };

  // Navigation items
  const navItems = [
    {
      id: "beranda",
      label: "Beranda",
      icon: SparklesIcon,
      color: "from-cyan-400",
    },
    {
      id: "tentangsaya",
      label: "Tentang",
      icon: UserIcon,
      color: "from-blue-400",
    },
    {
      id: "keterampilan",
      label: "Skills",
      icon: ZapIcon,
      color: "from-purple-400",
    },
    { id: "projek", label: "Projek", icon: CodeIcon, color: "from-pink-400" },
    {
      id: "sertifikasi",
      label: "Sertifikat",
      icon: AwardIcon,
      color: "from-orange-400",
    },
  ];

  const isScrolled = scrollY > 50;

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.06,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/60"
          : "bg-black/30 backdrop-blur-lg border-b border-white/5"
      }`}
    >
      {/* Scroll progress indicator */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
        style={{
          width: `${scrollProgress}%`,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => scrollTo("beranda")}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-25 blur-xl transition-all duration-300" />

            <div className="relative px-6 py-3 rounded-xl bg-gradient-to-br from-white/8 to-white/5 border border-white/20 group-hover:border-cyan-500/60 backdrop-blur-sm transition-all duration-300">
              <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Arleyxa
              </h1>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-2">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeLink === item.id;

              return (
                <motion.button
                  key={item.id}
                  custom={idx}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => scrollTo(item.id)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-4 py-2 rounded-lg transition-all"
                >
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/35 to-purple-500/35 opacity-100"
                        : "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 rounded-lg border transition-all duration-300 ${
                      isActive
                        ? "border-cyan-500/70 shadow-lg shadow-cyan-500/20"
                        : "border-white/10 group-hover:border-white/40"
                    }`}
                  />

                  <span
                    className={`relative flex items-center gap-2.5 text-sm font-semibold transition-all pointer-events-none ${
                      isActive
                        ? "text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    <span
                      className={
                        isActive
                          ? "text-cyan-300"
                          : "text-gray-400 group-hover:text-white"
                      }
                    >
                      <Icon />
                    </span>
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => scrollTo("kontak")}
            className="hidden md:flex group relative px-6 py-2.5 rounded-lg font-bold text-sm overflow-hidden items-center gap-2.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:via-purple-500 transition-all duration-500" />
            <div className="absolute inset-0.5 bg-black rounded-lg group-hover:bg-black/70 transition-colors duration-300" />

            <span className="relative text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 group-hover:from-purple-300 group-hover:to-pink-300 bg-clip-text font-bold flex items-center gap-2">
              <MailIcon />
              Kontak
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRightIcon />
              </motion.div>
            </span>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.88 }}
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-white focus:outline-none relative p-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-cyan-400"
                >
                  <CloseIcon />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-cyan-400"
                >
                  <MenuIcon />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="xl:hidden overflow-hidden border-t border-white/5 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-3 bg-gradient-to-b from-black/90 via-black/85 to-black/95">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeLink === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className={`w-full group flex items-center gap-4 px-5 py-4 rounded-xl font-semibold text-base transition-all border ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border-cyan-500/70 text-cyan-300 shadow-lg shadow-cyan-500/20"
                        : "border-white/10 text-gray-300 hover:bg-white/8 hover:border-cyan-500/50 hover:text-cyan-400"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 flex-shrink-0 flex items-center justify-center pointer-events-none ${
                        isActive
                          ? "text-cyan-400 scale-110"
                          : "text-gray-500 group-hover:text-cyan-400 group-hover:scale-105"
                      }`}
                    >
                      <Icon />
                    </div>
                    <span className="flex-1 text-left pointer-events-none">
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="mobileBadge"
                        className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-400/50 pointer-events-none"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}

              {/* Mobile CTA Button with Icon */}
              <motion.button
                onClick={() => scrollTo("kontak")}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 group relative px-6 py-4 rounded-xl font-bold text-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:via-purple-500 transition-all duration-500" />
                <div className="absolute inset-0.5 bg-black rounded-lg" />
                <span className="relative text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 group-hover:from-purple-300 group-hover:to-pink-300 bg-clip-text font-bold flex items-center gap-2 justify-center transition-all">
                  <MailIcon />
                  Hubungi Sekarang
                  <ArrowRightIcon />
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
