"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// SVG Icons Inline (Monokrom)
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const CommentIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("beranda");

  const navItems = [
    { id: "beranda", label: "Beranda" },
    { id: "tentangsaya", label: "Tentang" },
    { id: "keterampilan", label: "Skills" },
    { id: "projek", label: "Projek" },
    { id: "sertifikasi", label: "Sertifikat" },
  ];

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: "-80px 0px -50% 0px",
    });

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveLink(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => scrollTo("beranda")}
          className="text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
        >
          Arleyxa
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeLink === item.id;

            return (
              <div key={item.id} className="relative py-1">
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm tracking-wide transition-colors duration-200 ${isActive
                    ? "text-white font-bold"
                    : "text-neutral-400 font-medium hover:text-neutral-200"
                    }`}
                >
                  {item.label}
                </button>

                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* DESKTOP ACTIONS (KONTAK, KOMENTAR, HIRE ME) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Tombol Kontak */}
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700/80 text-neutral-300 text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 hover:text-white transition-all duration-200"
          >
            <MailIcon />
            Kontak
          </Link>

          {/* Tombol Komentar */}
          <Link
            href="/komentar"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700/80 text-neutral-300 text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 hover:text-white transition-all duration-200"
          >
            <CommentIcon />
            Komentar
          </Link>


        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:bg-neutral-800 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* DROPDOWN MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#121212] border-b border-neutral-800 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeLink === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left text-base transition-colors ${isActive ? "text-white font-bold" : "text-neutral-400"
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              {/* Tombol Aksi Mobile */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/kontak"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-neutral-700 text-neutral-300 text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800"
                  >
                    <MailIcon />
                    Kontak
                  </Link>

                  <Link
                    href="/komentar"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-neutral-700 text-neutral-300 text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800"
                  >
                    <CommentIcon />
                    Komentar
                  </Link>
                </div>


              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}