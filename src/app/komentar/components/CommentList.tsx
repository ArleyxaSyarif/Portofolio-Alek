"use client";

import React from "react";
import { RefreshCw, Trash2, ChevronLeft, ChevronRight, MessageSquare, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Komentar {
  id: number;
  name: string;
  description: string;
  created_at: string;
}

interface CommentListProps {
  comments: Komentar[];
  isLoading: boolean;
  isAdmin: boolean;
  onDelete: (id: number) => void;
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  totalCount: number;
}

const CommentList: React.FC<CommentListProps> = ({
  comments,
  isLoading,
  isAdmin,
  onDelete,
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  totalCount,
}) => {
  return (
    <div className="space-y-6 order-2 lg:order-2">
      {/* List Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
            <MessageSquare size={18} />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Daftar Komentar
            </h3>
            <p className="font-body text-xs text-[#8e9192]">
              Suara dan tanggapan dari para pengunjung
            </p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#e5e1e4] font-semibold">
          {totalCount} Pesan
        </span>
      </div>

      {/* States: Loading / Empty / Content */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#201f21]/70 p-8 rounded-2xl text-center border border-white/10 backdrop-blur-xl"
          >
            <p className="text-xs font-medium text-[#8e9192] flex items-center justify-center gap-2">
              <RefreshCw size={16} className="animate-spin text-white" />
              <span>Memuat komentar...</span>
            </p>
          </motion.div>
        ) : comments.length === 0 && totalCount > 0 ? (
          <motion.div
            key="empty-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#201f21]/70 p-8 rounded-2xl text-center border border-white/10 backdrop-blur-xl"
          >
            <p className="text-xs text-[#8e9192] font-body italic">
              Tidak ada komentar di halaman ini. Coba kembali ke halaman sebelumnya.
            </p>
          </motion.div>
        ) : comments.length === 0 ? (
          <motion.div
            key="no-comments"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#201f21]/70 p-8 rounded-2xl text-center border border-white/10 backdrop-blur-xl"
          >
            <p className="text-xs text-[#8e9192] font-body italic">
              Jadilah pengunjung pertama yang meninggalkan jejak!
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="comment-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {comments.map((k, index) => (
              <motion.div
                key={k.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#201f21]/70 hover:bg-[#201f21] p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-white/20 backdrop-blur-xl transition duration-300 shadow-lg relative group"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs text-white shrink-0">
                      {k.name ? k.name.charAt(0).toUpperCase() : <User size={14} />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">
                        {k.name}
                      </h4>
                      <p className="text-[11px] text-[#8e9192] font-mono mt-0.5">
                        {new Date(k.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>

                  {isAdmin && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 hover:border-red-500/40 px-3 py-1.5 rounded-lg text-xs font-semibold transition duration-200 flex items-center gap-1.5 shrink-0"
                      onClick={() => onDelete(k.id)}
                    >
                      <Trash2 size={13} />
                      <span>Hapus</span>
                    </motion.button>
                  )}
                </div>

                <p className="text-[#c4c7c8] font-body leading-relaxed text-xs sm:text-sm pl-12">
                  “{k.description}”
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls Paginasi */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-4">
          <motion.button
            whileHover={{ scale: currentPage === 1 || isLoading ? 1 : 1.05 }}
            whileTap={{ scale: currentPage === 1 || isLoading ? 1 : 0.95 }}
            onClick={onPrevPage}
            disabled={currentPage === 1 || isLoading}
            className={`p-2.5 rounded-xl border transition duration-200 ${
              currentPage === 1 || isLoading
                ? "text-[#5f6368] bg-white/5 border-white/5 cursor-not-allowed opacity-50"
                : "text-white bg-[#201f21] border-white/10 hover:bg-white hover:text-[#121214] shadow-md"
            }`}
            aria-label="Halaman sebelumnya"
          >
            <ChevronLeft size={18} />
          </motion.button>

          <span className="text-xs font-mono text-[#8e9192]">
            Halaman <span className="text-white font-semibold">{currentPage}</span> dari{" "}
            <span className="text-white font-semibold">{totalPages}</span>
          </span>

          <motion.button
            whileHover={{ scale: currentPage === totalPages || isLoading ? 1 : 1.05 }}
            whileTap={{ scale: currentPage === totalPages || isLoading ? 1 : 0.95 }}
            onClick={onNextPage}
            disabled={currentPage === totalPages || isLoading}
            className={`p-2.5 rounded-xl border transition duration-200 ${
              currentPage === totalPages || isLoading
                ? "text-[#5f6368] bg-white/5 border-white/5 cursor-not-allowed opacity-50"
                : "text-white bg-[#201f21] border-white/10 hover:bg-white hover:text-[#121214] shadow-md"
            }`}
            aria-label="Halaman berikutnya"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default CommentList;