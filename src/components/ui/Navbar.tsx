"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("beranda");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    if (!element) return;

    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: y, behavior: "smooth" });
    });

    setActiveLink(id);
    setIsOpen(false);
  };

  // Restored original colors mapped to text classes
  const navItems = [
    {
      id: "beranda",
      label: "Beranda",
      icon: SparklesIcon,
      textColor: "text-cyan-400",
      hoverColor: "hover:text-cyan-300",
    },
    {
      id: "tentangsaya",
      label: "Tentang",
      icon: UserIcon,
      textColor: "text-blue-400",
      hoverColor: "hover:text-blue-300",
    },
    {
      id: "keterampilan",
      label: "Skills",
      icon: ZapIcon,
      textColor: "text-purple-400",
      hoverColor: "hover:text-purple-300",
    },
    { 
      id: "projek", 
      label: "Projek", 
      icon: CodeIcon,
      textColor: "text-pink-400", 
      hoverColor: "hover:text-pink-300",
    },
    {
      id: "sertifikasi",
      label: "Sertifikat",
      icon: AwardIcon,
      textColor: "text-orange-400",
      hoverColor: "hover:text-orange-300",
    },
  ];

  const isScrolled = scrollY > 20;

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-6 left-0 right-0 z-50 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <nav
          className={`rounded-full px-5 md:px-8 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled
            ? "bg-[#121214]/80 backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/20"
            : "bg-[#121214]/60 backdrop-blur-xl border border-white/[0.06]"
            }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollTo("beranda")}
              className="text-xl font-extrabold tracking-tight text-white hover:opacity-80 transition-opacity"
            >
              Arley<span className="text-cyan-400">xa</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeLink === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive
                    ? item.textColor
                    : `text-slate-400 ${item.hoverColor}`
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/komentar"
              className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-purple-400/30 text-slate-200 text-xs font-medium tracking-widest uppercase hover:bg-purple-400/5 hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 group"
            >
              <span className="group-hover:text-purple-400 transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              Komentar
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CloseIcon />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 p-4 rounded-2xl bg-[#121214]/90 backdrop-blur-2xl border border-white/[0.08] shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => {
                const isActive = activeLink === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive
                      ? `bg-white/5 ${item.textColor}`
                      : `text-slate-400 ${item.hoverColor} hover:bg-white/5`
                      }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 text-center"
              >
                <Link
                  href="/komentar"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-purple-400/30 text-slate-200 text-sm font-medium hover:bg-purple-400/5 transition-all"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-purple-400"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2-2z" />
                  </svg>
                  Komentar
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
