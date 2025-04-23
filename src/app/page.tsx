"use client";

import Profile from "@/components/ui/Profile";
import Project from "@/components/ui/Project";
import Keterampilan from "@/components/ui/Keterampilan";
import Datadiri from "@/components/ui/Datadiri";
import Sertifikat from "@/components/ui/Sertifikat";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };
  return (
    <main className="min-h-screen bg-black">
      <nav className="bg-black fixed w-full top-0 z-50 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold font-sans tracking-wider hover:scale-105 transition-transform duration-300 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-blue-600">
              Arleyxa
            </h1>

            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a
                href="#beranda"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("beranda");
                }}
                className="text-white hover:text-black hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
              >
                Beranda
              </a>
              <a
                href="#tentangsaya"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("tentangsaya");
                }}
                className="text-white hover:text-black hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
              >
                Tentang Saya
              </a>
              <a
                href="#keterampilan"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("keterampilan");
                }}
                className="text-white hover:text-black hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
              >
                Keterampilan
              </a>
              <a
                href="#projek"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projek");
                }}
                className="text-white hover:text-black hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
              >
                Projek
              </a>
              <a
                href="#sertifikasi"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("sertifikasi");
                }}
                className="text-white hover:text-black hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
              >
                Sertifikasi
              </a>
              <a
                href="#kontak"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("kontak");
                }}
                className="text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-300 hover:to-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
              >
                Kontak
              </a>
            </div>

            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden px-2 pt-2 pb-3 space-y-1 bg-black">
            {[
              { id: "beranda", label: "Beranda" },
              { id: "tentangsaya", label: "Tentang Saya" },
              { id: "keterampilan", label: "Keterampilan" },
              { id: "projek", label: "Projek" },
              { id: "sertifikasi", label: "Sertifikasi" },
              { id: "kontak", label: "Kontak" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
                className={`block text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-black`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <Profile />

      <Datadiri />

      <Keterampilan />

      <Project />

      <Sertifikat />

      <footer className="bg-[#0d1117] text-white py-12 mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span>Jl. Wijaya Kusuma II, Jawa Barat</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span>+62 895-3986-78090</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>kiritonkichan@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Social Media
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ArleyxaSyarif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://discord.com/users/kichan9190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>{" "}
                <a
                  href="https://instagram.com/kichan._lex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#beranda"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#tentangsaya"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li>
                  <a
                    href="#keterampilan"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Keterampilan
                  </a>
                </li>
                <li>
                  <a
                    href="#projek"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Projek
                  </a>
                </li>
                <li>
                  <a
                    href="#sertifikat"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Sertifikat
                  </a>
                </li>
                <li>
                  <a
                    href="#kontak"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Arleyxa Syarif
              </h3>
              <p className="text-gray-400 mb-4">
                Seorang pengembangan FullStack yang berfokus pada pembuatan
                Aplikasi dan Web berkualitas tinggi.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2025 Arleyxa Syarif. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
