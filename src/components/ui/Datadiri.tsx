import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Datadiri = () => {
  return (
    <div className="relative flex h-auto min-h-[50rem] w-full items-center justify-center bg-black py-8">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div
        className="max-w-4xl w-full relative z-10 px-4 sm:px-6"
        id="tentangsaya"
      >
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md mb-8 mt-12">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-white to-blue-400 inline-block text-transparent bg-clip-text text-center w-full">
              Profil Singkat
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl text-center">
              Selamat datang di halaman profil saya.
            </p>
            <div className="rounded-full overflow-hidden w-64 h-64 sm:w-96 sm:h-96 mx-auto">
              <Image
                src="/img/profile2.jpeg"
                alt="Profile picture"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full p-4 sm:p-6">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
              <div className="w-full md:w-1/2 text-center p-4 sm:p-8 rounded-2xl bg-black border border-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 inline-block text-transparent bg-clip-text">
                  Data Diri
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Saya Mohamad Arleyxa Syarif, seorang pelajar yang memiliki
                  minat besar dalam dunia teknologi, terutama pengembangan
                  website. Saya senang mempelajari hal-hal baru di bidang IT dan
                  terus berusaha mengasah kemampuan saya melalui proyek-proyek
                  pribadi.
                </p>
              </div>
              <div className="w-full md:w-1/2 text-center p-4 sm:p-8 rounded-2xl bg-black border border-gradient-to-r from-blue-500 to-purple-500 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text">
                  Karir
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Saya bercita-cita menjadi seorang Fullstack Developer
                  profesional. Saat ini, saya sedang fokus memperkuat skill di
                  backend dan frontend, serta aktif mencari pengalaman dari
                  proyek-proyek nyata untuk mempersiapkan diri menghadapi dunia
                  kerja di masa depan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datadiri;
