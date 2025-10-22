"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, Zap } from "lucide-react";
import { sertifikat as sertifikatData } from "@/data/sertifikat";
const Sertifikat = () => {
  const [currentSerti, setCurrentSerti] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const enhancedSertifikat = sertifikatData;

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goNext = () => {
    if (currentSerti + itemsPerView < enhancedSertifikat.length) {
      setCurrentSerti(currentSerti + itemsPerView);
    }
  };

  const goPrev = () => {
    if (currentSerti - itemsPerView >= 0) {
      setCurrentSerti(currentSerti - itemsPerView);
    }
  };

  const canGoPrev = currentSerti > 0;
  const canGoNext = currentSerti + itemsPerView < enhancedSertifikat.length;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(10px)" }
      }
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden"
      id="sertifikasi"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
              Achievements
            </span>
            <Award className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent">
            Sertifikasi & Penghargaan
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Perjalanan pembelajaran dan pengembangan profesional dalam industri
            teknologi
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="mb-12">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex gap-8"
              animate={{
                x: `-${currentSerti * (100 / itemsPerView)}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {enhancedSertifikat.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 ${
                    itemsPerView === 2 ? "w-1/2" : "w-full"
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className={`group relative h-full bg-gradient-to-br ${item.color} p-0.5 rounded-2xl overflow-hidden`}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 h-full flex flex-col">
                      {/* Icon and Badge */}
                      <div className="flex items-end justify-between mb-6">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} p-0.5`}
                        >
                          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Certificate Images */}
                      <div className="grid grid-cols-2 gap-3 mb-6 rounded-lg overflow-hidden border border-white/10">
                        <div className="aspect-video bg-slate-800 rounded-lg">
                          <img
                            src={item.img1}
                            alt={item.alt1}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-video bg-slate-800 rounded-lg">
                          <img
                            src={item.img2}
                            alt={item.alt2}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h3
                          className={`text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-base mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.color} bg-clip-text text-transparent border border-white/10 hover:border-white/30 transition-colors`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      {/* Organization */}
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                          Organized By
                        </p>
                        <p className="font-semibold text-white">
                          {item.button}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goPrev}
            disabled={!canGoPrev}
            className={`relative p-3 rounded-full transition-all duration-300 group ${
              canGoPrev
                ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/50"
                : "bg-gray-700 cursor-not-allowed opacity-50"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-lg group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100"></div>
            <ChevronLeft className="relative w-6 h-6 text-white" />
          </motion.button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {Array.from({
              length: Math.ceil(enhancedSertifikat.length / itemsPerView),
            }).map((_, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentSerti(idx * itemsPerView)}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  idx * itemsPerView === currentSerti
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                    : "bg-gray-600 w-2 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goNext}
            disabled={!canGoNext}
            className={`relative p-3 rounded-full transition-all duration-300 group ${
              canGoNext
                ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50"
                : "bg-gray-700 cursor-not-allowed opacity-50"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-lg group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100"></div>
            <ChevronRight className="relative w-6 h-6 text-white" />
          </motion.button>
        </motion.div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            <span className="font-bold text-white">{currentSerti + 1}</span>{" "}
            dari{" "}
            <span className="font-bold text-white">
              {enhancedSertifikat.length}
            </span>{" "}
            sertifikat
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sertifikat;
