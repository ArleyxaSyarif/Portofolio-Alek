"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Calendar,
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch(
      "https://api.github.com/users/ArleyxaSyarif/repos?per_page=100&sort=updated"
    )
      .then((res) => res.json())
      .then((data: Repo[]) => {
        // Sort by stars and updated date
        const sorted = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sorted);
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

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "from-yellow-400 to-yellow-600",
      TypeScript: "from-blue-500 to-blue-700",
      Python: "from-green-500 to-green-700",
      Java: "from-red-500 to-red-700",
      PHP: "from-purple-500 to-purple-700",
      CSS: "from-pink-500 to-pink-700",
      HTML: "from-orange-500 to-orange-700",
      Go: "from-cyan-500 to-cyan-700",
      Rust: "from-orange-600 to-orange-800",
    };
    return colors[language || ""] || "from-gray-500 to-gray-700";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const visibleRepos = repos.slice(currentIndex, currentIndex + itemsPerPage);
  const totalPages = Math.ceil(repos.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Open Source Portfolio
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span
              className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent"
              id="projek"
            >
              Projek
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Jelajahi kumpulan{" "}
            <span className="text-blue-400 font-semibold">
              {repos.length} repositori
            </span>{" "}
            saya yang menampilkan berbagai teknologi dan inovasi
          </p>
        </motion.div>

        {/* Projects Grid with Animation */}
        <div className="mb-12 relative">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {visibleRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl transition-all duration-500 hover:border-blue-500/50 hover:shadow-blue-500/25 hover:scale-105">
                    {/* Top Badge - Language */}
                    {repo.language && (
                      <div className="absolute top-4 left-4 z-10">
                        <div
                          className={`px-3 py-1.5 bg-gradient-to-r ${getLanguageColor(
                            repo.language
                          )} rounded-full text-white text-xs font-bold shadow-lg`}
                        >
                          {repo.language}
                        </div>
                      </div>
                    )}

                    {/* Animated gradient header */}
                    <div
                      className={`relative h-15 bg-gradient-to-br ${getLanguageColor(
                        repo.language
                      )} flex items-center justify-center overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-black/20"
                        animate={{
                          background:
                            hoveredIndex === index
                              ? "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)"
                              : "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 100%)",
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                      ></motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                        {repo.name}
                      </h2>

                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
                        {repo.description || "No description available"}
                      </p>

                      {/* Topics */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/20"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(repo.updated_at)}</span>
                        </div>

                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 font-medium group/link"
                        >
                          <span>GitHub</span>
                          <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-6">
            <motion.button
              onClick={goPrev}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Previous
              </span>
            </motion.button>

            {/* Page indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goToPage(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === idx
                      ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={goNext}
              disabled={currentIndex + itemsPerPage >= repos.length}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Next
              </span>
            </motion.button>
          </div>

          {/* Counter */}
          <p className="text-gray-500 text-sm">
            Showing {currentIndex + 1}-
            {Math.min(currentIndex + itemsPerPage, repos.length)} of{" "}
            {repos.length} repositories
          </p>
        </motion.div>
      </div>
    </div>
  );
}
