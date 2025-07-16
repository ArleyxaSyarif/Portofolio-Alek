"use client";
import React, { useState, useEffect } from "react";
import { sertifikat } from "@/data/sertifikat";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Sertifikat = () => {
  const [curentSerti, setCurentSerti] = useState(0);
  const [itemSwipe, setItemSwipe] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemSwipe(window.innerWidth >= 768 ? 2 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goNextSerti = () => {
    if (curentSerti + itemSwipe < sertifikat.length) {
      setCurentSerti(curentSerti + itemSwipe);
    }
  };
  const goPrevSerti = () => {
    if (curentSerti - itemSwipe >= 0) {
      setCurentSerti(curentSerti - itemSwipe);
    }
  };

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
      <div className="relative flex h-auto md:h-[40rem] w-full items-center justify-center bg-black opacity-90 mt-16 md:mt-28 py-10 md:py-0">
        <div
          id="sertifikasi"
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative z-20 flex flex-col items-center px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-400 inline-block text-transparent bg-clip-text text-center mb-4 md:mb-8">
            Sertifikat
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 max-w-2xl text-center">
            Berikut adalah sertifikat yang telah saya dapatkan
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center w-full max-w-7xl transition-transform duration-500 ease-in-out">
            {sertifikat
              .slice(curentSerti, curentSerti + itemSwipe)
              .map((sertifikat, index) => (
                <div key={index} className="w-full md:w-1/2">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 ease-in-out group shadow-lg shadow-blue-500/20">
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2 md:gap-4 p-3 md:p-4">
                        <Image
                          src={sertifikat.img1}
                          alt={sertifikat.alt1}
                          width={1200}
                          height={600}
                          className="w-1/2 h-auto object-cover rounded-lg group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                          priority
                        />
                        <Image
                          src={sertifikat.img2}
                          alt={sertifikat.alt2}
                          width={1200}
                          height={600}
                          className="w-1/2 h-auto object-cover rounded-lg group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                          priority
                        />
                      </div>
                      <div className="p-4 md:p-6 text-center">
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent mb-2 md:mb-3">
                          {sertifikat.title}
                        </h3>
                        <p className="text-gray-400 mt-2 leading-relaxed text-base md:text-lg group-hover:text-gray-300 transition-colors duration-500">
                          {sertifikat.description}
                        </p>
                        <div className="mt-3 md:mt-4">
                          <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-semibold">
                            {sertifikat.button}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center gap-4 mt-6 md:mt-8">
            <button
              onClick={goPrevSerti}
              className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 md:p-3 rounded-full hover:opacity-80 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={goNextSerti}
              className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 md:p-3 rounded-full hover:opacity-80 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sertifikat;
