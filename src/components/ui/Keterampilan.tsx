"use client";
import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import testimonials from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

const Keterampilan = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

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
    >
      <div className="relative flex h-[40rem] md:h-[50rem] w-full items-center justify-center bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="h-[35rem] md:h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-12 md:mt-24 px-4 md:px-0">
          <h1
            id="keterampilan"
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-400 inline-block text-transparent bg-clip-text text-center mb-4 md:mb-8"
          >
            Keterampilan
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-4 md:mb-8 max-w-2xl text-center">
            Berikut adalah beberapa teknologi dan keterampilan yang saya kuasai
            dalam pengembangan web
          </p>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Keterampilan;
