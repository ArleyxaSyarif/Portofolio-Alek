import React, { useState } from "react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemPerSwipe = 3;

  const goNext = () => {
    if (currentIndex + itemPerSwipe < projects.length) {
      setCurrentIndex(currentIndex + itemPerSwipe);
    }
  };

  const goPrev = () => {
    if (currentIndex - itemPerSwipe >= 0) {
      setCurrentIndex(currentIndex - itemPerSwipe);
    }
  };
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-black p-4 md:p-8">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="mx-auto px-4 md:px-8 flex flex-col items-center mt-16 md:mt-24">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-400 inline-block text-transparent bg-clip-text text-center mb-4 md:mb-8">
          Projek
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 max-w-2xl text-center px-4">
          Berikut adalah beberapa projek yang telah saya kerjakan
        </p>

        <div className="touch-pan-x mb-8 overflow-x-auto relative scroll-smooth w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-transform duration-500 ease-in-out transform">
            {projects
              .slice(currentIndex, currentIndex + itemPerSwipe)
              .map((project, index) => (
                <div key={index} className="w-full">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 ease-in-out group shadow-lg shadow-blue-500/20">
                    <div className="relative w-full h-48">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:opacity-80 transition-opacity duration-500"
                      />
                    </div>
                    <div className="p-4 transform group-hover:translate-y-[-8px] transition-transform duration-500">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-500">
                        {project.description}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <a
                          href={project.link}
                          className="text-sm md:text-base text-blue-400 hover:text-blue-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-300 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-500"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={goPrev}
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
              onClick={goNext}
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
    </div>
  );
};

export default Project;
