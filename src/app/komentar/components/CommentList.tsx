"use client";

import React from "react";
import { RefreshCw, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

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
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
                ({totalCount}) Daftar Komentar
            </h3>

            {isLoading ? (
                <div className="bg-[#161633] p-6 rounded-xl text-center border border-gray-700">
                    <p className="text-cyan-400 flex items-center justify-center space-x-2">
                        <RefreshCw size={18} className="animate-spin" />
                        <span>Memuat komentar...</span>
                    </p>
                </div>
            ) : comments.length === 0 && totalCount > 0 ? (
                <div className="bg-[#161633] p-6 rounded-xl text-center border border-gray-700">
                    <p className="text-gray-400 italic">
                        Tidak ada komentar di halaman ini. Coba kembali ke halaman
                        sebelumnya. ⬅️
                    </p>
                </div>
            ) : comments.length === 0 ? (
                <div className="bg-[#161633] p-6 rounded-xl text-center border border-gray-700">
                    <p className="text-gray-400 italic">
                        Jadilah pengunjung pertama yang meninggalkan jejak!
                    </p>
                </div>
            ) : (
                comments.map((k) => (
                    <div
                        key={k.id}
                        className="bg-[#161633]/80 p-6 rounded-xl border-l-4 border-cyan-500 shadow-xl shadow-cyan-900/20 transition duration-300 hover:bg-[#1F1F47] relative"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-purple-400 text-lg">{k.name}</span>
                            <p className="text-xs text-gray-500 mt-1">
                                {new Date(k.created_at).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                        </div>
                        <p className="mb-3 text-gray-300 italic leading-relaxed text-base">
                            “{k.description}”
                        </p>

                        {isAdmin && (
                            <button
                                className="absolute bottom-4 right-4 bg-red-800/60 hover:bg-red-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition duration-200 flex items-center space-x-1 text-red-300 border border-red-700 transform active:scale-95"
                                onClick={() => onDelete(k.id)}
                            >
                                <Trash2 size={14} />
                                <span>Hapus</span>
                            </button>
                        )}
                    </div>
                ))
            )}

            {/* --- KONTROL PAGINASI --- */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 pt-4">
                    <button
                        onClick={onPrevPage}
                        disabled={currentPage === 1 || isLoading}
                        className={`p-2 rounded-full transition duration-300 ${currentPage === 1 || isLoading
                            ? "text-gray-600 bg-gray-800 cursor-not-allowed"
                            : "text-cyan-400 bg-purple-900/50 border border-cyan-700 hover:bg-purple-900 transform active:scale-95 shadow-md shadow-cyan-900/30"
                            }`}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <span className="text-sm font-medium text-gray-400">
                        Halaman {currentPage} dari {totalPages}
                    </span>

                    <button
                        onClick={onNextPage}
                        disabled={currentPage === totalPages || isLoading}
                        className={`p-2 rounded-full transition duration-300 ${currentPage === totalPages || isLoading
                            ? "text-gray-600 bg-gray-800 cursor-not-allowed"
                            : "text-cyan-400 bg-purple-900/50 border border-cyan-700 hover:bg-purple-900 transform active:scale-95 shadow-md shadow-cyan-900/30"
                            }`}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default CommentList;
