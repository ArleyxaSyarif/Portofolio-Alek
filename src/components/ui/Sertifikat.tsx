"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, ShieldCheck, Building2 } from "lucide-react";
import { sertifikat as sertifikatData } from "@/data/sertifikat";

const Sertifikat = () => {
  const [currentSerti, setCurrentSerti] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(sertifikatData.length / itemsPerView) - 1;

  const goNext = () => {
    if (currentSerti < maxIndex) {
      setDirection(1);
      setCurrentSerti(currentSerti + 1);
    }
  };

  const goPrev = () => {
    if (currentSerti > 0) {
      setDirection(-1);
      setCurrentSerti(currentSerti - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setDirection(pageIndex > currentSerti ? 1 : -1);
    setCurrentSerti(pageIndex);
  };

  const canGoPrev = currentSerti > 0;
  const canGoNext = currentSerti < maxIndex;

  const startIdx = currentSerti * itemsPerView;
  const visibleItems = sertifikatData.slice(startIdx, startIdx + itemsPerView);
  const totalPages = Math.ceil(sertifikatData.length / itemsPerView);

  return (
    <section
      ref={ref}
      id="sertifikasi"
      className="relative w-full min-h-screen bg-[#121214] text-[#e5e1e4] py-24 md:py-32 overflow-hidden flex flex-col justify-center font-body"
    >
      {/* Global & Layout Styles */}
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
            rgba(255, 255, 255, 0.1) 1px,
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

        .glass-card {
          background: rgba(30, 30, 32, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .text-gradient {
          background: linear-gradient(to right, #ffffff, #8e9192);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-grid-pattern radial-mask pointer-events-none opacity-50" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-16 relative z-10 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 text-center md:text-left max-w-3xl"
        >
          {/* Badge Top */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#201f21]/80 backdrop-blur-md mb-6 text-xs font-semibold font-body tracking-wider text-[#e5e1e4] uppercase shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#8e9192]" />
            <span>Pencapaian & Sertifikasi</span>
          </div>

          <h1 className="font-display text-4xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
            Sertifikasi & Penghargaan
          </h1>
          <p className="font-body text-base md:text-lg text-[#c4c7c8] leading-relaxed">
            Perjalanan pembelajaran terstruktur, kredensial resmi, dan lisensi
            profesional yang memvalidasi keahlian saya dalam industri teknologi.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="min-h-[460px] mb-12">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentSerti}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={`grid gap-8 ${itemsPerView === 2 ? "grid-cols-2" : "grid-cols-1"
                }`}
            >
              {visibleItems.map((item, index) => (
                <div
                  key={startIdx + index}
                  className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full group hover:scale-[1.01] transition-all duration-300 relative overflow-hidden cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/15"
                >
                  {/* Hover Bottom Accent Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Top Bar / Category Icon */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#201f21] border border-white/10 flex items-center justify-center text-white">
                        <ShieldCheck className="w-5 h-5 text-[#c6c6c7]" />
                      </div>
                      <span className="text-xs font-semibold font-body text-[#8e9192] uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        Verified Certificate
                      </span>
                    </div>

                    {/* Certificate Preview Images */}
                    <div className="grid grid-cols-2 gap-3 mb-6 rounded-xl overflow-hidden border border-white/10 bg-black/40 p-1.5">
                      {item.img1 && (
                        <div className="aspect-video bg-[#1a1a1c] rounded-lg overflow-hidden relative group/img">
                          <img
                            src={item.img1}
                            alt={item.alt1 || item.title}
                            className="w-full h-full object-cover  opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-300"
                          />
                        </div>
                      )}
                      {item.img2 && (
                        <div className="aspect-video bg-[#1a1a1c] rounded-lg overflow-hidden relative group/img">
                          <img
                            src={item.img2}
                            alt={item.alt2 || item.title}
                            className="w-full h-full object-cover  opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-300"
                          />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-[#c4c7c8] mb-6 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.skills &&
                        item.skills.map((skill: string, idx: number) => (
                          <span
                            key={idx}
                            className="bg-[#201f21] text-[#e5e1e4] font-body text-xs font-semibold px-3 py-1 rounded-full border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Organization Footer */}
                  <div className="pt-4 border-t border-white/10 mt-auto flex items-center justify-between font-body text-xs">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#8e9192]" />
                      <span className="text-[#8e9192]">Penyelenggara:</span>
                      <span className="font-semibold text-white">
                        {item.button || "Lembaga Resmi"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-white/5 font-body">
          {/* Indicator Info */}
          <p className="text-xs text-[#8e9192]">
            Menampilkan Halaman{" "}
            <span className="font-bold text-white">{currentSerti + 1}</span> dari{" "}
            <span className="font-bold text-white">{totalPages}</span>
          </p>

          {/* Buttons & Dots */}
          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              disabled={!canGoPrev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#e5e1e4] hover:bg-white/5 hover:border-white/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPage(idx)}
                  className={`rounded-full transition-all duration-300 ${currentSerti === idx
                    ? "w-2.5 h-2.5 bg-white scale-125"
                    : "w-2 h-2 bg-[#444748] hover:bg-[#8e9192]"
                    }`}
                  aria-label={`Halaman ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={!canGoNext}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#e5e1e4] hover:bg-white/5 hover:border-white/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
              aria-label="Berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sertifikat;