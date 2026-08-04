"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  FolderGit2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch(
      "https://api.github.com/users/ArleyxaSyarif/repos?per_page=100&sort=updated"
    )
      .then((res) => res.json())
      .then((data: Repo[]) => {
        if (Array.isArray(data)) {
          const sorted = data.sort(
            (a, b) => b.stargazers_count - a.stargazers_count
          );
          setRepos(sorted);
        }
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
      });
  }, []);

  const goNext = () => {
    if (currentIndex + itemsPerPage < repos.length) {
      setDirection(1);
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(Math.max(0, currentIndex - itemsPerPage));
    }
  };

  const goToPage = (pageIndex: number) => {
    const newIndex = pageIndex * itemsPerPage;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const formatTimeAgo = (dateString: string) => {
    const updated = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - updated.getTime()) / 1000);

    const days = Math.floor(diffInSeconds / 86400);
    if (days < 1) return "Updated today";
    if (days === 1) return "Updated 1d ago";
    if (days < 7) return `Updated ${days}d ago`;
    
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `Updated ${weeks}w ago`;

    const months = Math.floor(days / 30);
    return `Updated ${months}m ago`;
  };

  const visibleRepos = repos.slice(currentIndex, currentIndex + itemsPerPage);
  const totalPages = Math.ceil(repos.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  return (
    <section
      id="projek"
      className="relative w-full min-h-screen bg-[#121214] text-[#e5e1e4] pt-32 pb-24 overflow-hidden flex flex-col justify-center font-body"
    >
      {/* Import Font & Global Styling untuk Monokrom & Tipografi */}
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
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .text-gradient {
          background: linear-gradient(to right, #ffffff, #8e9192);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-grid-pattern radial-mask pointer-events-none opacity-50" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-16 relative z-10 w-full">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 text-center md:text-left max-w-3xl">
          {/* Badge Di Atas Projek */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#201f21]/80 backdrop-blur-md mb-6 text-xs font-semibold font-body tracking-wider text-[#e5e1e4] uppercase shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-[#8e9192]" />
            <span>Portofolio Repositori</span>
          </div>

          <h1 className="font-display text-4xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
            Projek
          </h1>
          <p className="font-body text-lg text-[#c4c7c8] leading-relaxed">
            Jelajahi kumpulan repositori saya. Koleksi open-source yang berfokus
            pada pengembangan web modern, desain UI/UX, dan eksperimen teknis.
            Menampilkan sekitar {repos.length || "100+"} repositori.
          </p>
        </div>

        {/* Projects Grid Slider */}
        <div className="min-h-[380px] mb-16">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="glass-card rounded-xl p-6 flex flex-col h-full group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  {/* Hover Bottom Accent Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Top Bar / Card Title */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-2xl font-bold text-white line-clamp-1">
                      {repo.name}
                    </h3>
                    <Folder className="w-5 h-5 text-[#8e9192] group-hover:text-white transition-colors flex-shrink-0 ml-2" />
                  </div>

                  {/* Card Description */}
                  <p className="font-body text-base text-[#c4c7c8] mb-6 flex-grow leading-relaxed line-clamp-3">
                    {repo.description ||
                      "Personal portfolio repository showcasing modern web development techniques and design implementations."}
                  </p>

                  {/* Tags / Topics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.topics && repo.topics.length > 0 ? (
                      repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="bg-[#201f21] text-[#e5e1e4] font-body text-xs font-semibold px-3 py-1 rounded-full border border-white/5"
                        >
                          {topic}
                        </span>
                      ))
                    ) : (
                      <>
                        <span className="bg-[#201f21] text-[#e5e1e4] font-body text-xs font-semibold px-3 py-1 rounded-full border border-white/5">
                          {repo.language || "HTML"}
                        </span>
                        <span className="bg-[#201f21] text-[#e5e1e4] font-body text-xs font-semibold px-3 py-1 rounded-full border border-white/5">
                          Portfolio
                        </span>
                      </>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto font-body text-xs text-[#8e9192]">
                    <span className="flex items-center gap-1.5 font-semibold text-[#8e9192]">
                      <span className="w-2 h-2 rounded-full bg-[#c6c6c7]" />
                      {repo.language || "Code"}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-[#8e9192]">
                        {formatTimeAgo(repo.updated_at)}
                      </span>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e5e1e4] hover:text-white transition-colors flex items-center group-hover:translate-x-1 duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-12 font-body">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#e5e1e4] hover:bg-white/5 hover:border-white/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2 items-center">
            {Array.from({ length: Math.min(totalPages, 5) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`rounded-full transition-all duration-300 ${
                  currentPage === idx
                    ? "w-2.5 h-2.5 bg-white scale-125"
                    : "w-2 h-2 bg-[#444748] hover:bg-[#8e9192]"
                }`}
                aria-label={`Halaman ${idx + 1}`}
              />
            ))}
            {totalPages > 5 && (
              <span className="text-sm text-[#444748] mx-1">...</span>
            )}
          </div>

          <button
            onClick={goNext}
            disabled={currentIndex + itemsPerPage >= repos.length}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#e5e1e4] hover:bg-white/5 hover:border-white/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
            aria-label="Berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}