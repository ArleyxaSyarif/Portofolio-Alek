"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img: string;
    colorT: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-gradient-to-br from-white via-blue-100 to-blue-200 px-8 py-8 md:w-[450px] dark:border-zinc-700 dark:bg-gradient-to-br dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] bg-gradient-to-br from-red-700 to-red-700 dark:from-red-700 dark:to-red-700 rounded-2xl opacity-50"
              ></div>              
              <span className={`relative z-20 text-lg leading-[1.6] font-medium ${item.colorT === 'php' ? 'text-gray-500' : item.colorT === 'tailwind' ? 'text-blue-400' : item.colorT === 'laravel' ? 'text-red-400' : item.colorT === 'bootstrap' ? 'text-purple-600' : item.colorT === 'css' ? 'text-blue-600' : item.colorT === 'html' ? 'text-orange-600' : item.colorT === 'react' ? 'text-cyan-400' : item.colorT === 'android' ? 'text-green-500' : item.colorT === 'vscode' ? 'text-blue-500' : item.colorT === 'reactnative' ? 'text-blue-400' : item.colorT === 'github' ? 'text-black' : item.colorT === 'nodejs' ? 'text-green-600' : 'text-gray-600'  }`}>
                {item.quote}
              </span>                            
              <div className="relative z-20 mt-2 flex flex-col items-center">
                <span className="flex flex-col items-center gap-2">
                  <span>
                    <Image
                      src={item.img}
                      alt=""
                      width={120}
                      height={120}
                      className="rounded-full"
                      priority={false}
                    />
                  </span>
                  <span className="text-md font-normal text-neutral-700 dark:text-gray-300">
                    {item.name}
                  </span>
                  <span className="text-sm font-normal  dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>        
        ))}
      </ul>
    </div>
  );
};