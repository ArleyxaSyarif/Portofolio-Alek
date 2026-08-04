"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Globe,
  FileCode2,
  Palette,
  Terminal,

  Layout,
  Zap,
  Database,
  Cpu,
} from "lucide-react";

// Data Keterampilan Baris 1
const row1Skills = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Laravel", icon: Globe },
  { name: "React Native", icon: Globe },
  { name: "CSS", icon: FileCode2 },
  { name: "HTML", icon: FileCode2 },
  { name: "JavaScript", icon: FileCode2 },
  { name: "TypeScript", icon: FileCode2 },
  { name: "PHP", icon: FileCode2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js", icon: Terminal },
];

// Data Keterampilan Baris 2
const row2Skills = [
  { name: "Figma", icon: Layout },
  { name: "Framer Motion", icon: Zap },
  { name: "Vscode", icon: Terminal },
  { name: "MySQL", icon: Database },
  { name: "SQL", icon: Database },
  { name: "Git", icon: Terminal },
  { name: "GitHub", icon: Terminal },
  { name: "Postman", icon: Terminal },
  { name: "Bootstrap", icon: Terminal },
  { name: "Android Studio", icon: Terminal },


];

const Keterampilan = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      id="keterampilan"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(10px)" }
      }
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative w-full min-h-[50rem] py-24 bg-[#0e0e10] text-[#e5e1e4] flex items-center justify-center overflow-hidden font-sans"
    >
      {/* Background Pattern & Radial Mask */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#404040 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0e10]/50 to-[#0e0e10] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16 flex flex-col items-center text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          {/* Expertise Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            <Cpu className="w-3.5 h-3.5 text-neutral-300" />
            <span>Keterampilan</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6">
            Keterampilan
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Berikut adalah beberapa teknologi dan keterampilan yang saya kuasai
            dalam pengembangan web, dirancang untuk membangun pengalaman digital
            yang responsif, terukur, dan memukau.
          </p>
        </motion.div>

        {/* Infinite Moving Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full overflow-hidden flex flex-col gap-6 relative group"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Row 1 (Infinite Scroll Left) */}
          <div className="flex gap-6 w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={`row1-${index}`}
                  className="flex items-center gap-4 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all shadow-lg hover:bg-white/10 cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-white" />
                  <span className="text-[20px] font-semibold text-white tracking-wide">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Row 2 (Infinite Scroll Right / Reverse) */}
          <div className="flex gap-6 w-max animate-infinite-scroll-reverse group-hover:[animation-play-state:paused]">
            {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={`row2-${index}`}
                  className="flex items-center gap-4 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all shadow-lg hover:bg-white/10 cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-white" />
                  <span className="text-[20px] font-semibold text-white tracking-wide">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Keterampilan;