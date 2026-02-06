"use client";

import React, { useState, useEffect } from "react";
// Pastikan path ke supabaseClient benar
import { supabase } from "@/lib/supabaseClient";
import {
  RefreshCw,
  UserCheck,
  Lock,
  Trash2,
  X,
  AlertTriangle,
  MessageSquare,
  ChevronLeft, // Digunakan untuk paginasi DAN tombol kembali
  ChevronRight,
  Send, // Mengganti ikon Kirim Komentar
  LogIn, // Mengganti ikon Login
} from "lucide-react";

// Tipe data Komentar
interface Komentar {
  id: number;
  name: string;
  description: string;
  created_at: string;
}

// Konfigurasi Paginasi
const ITEMS_PER_PAGE = 4;

// Komponen Alert Kustom untuk feedback yang smooth
const CustomAlert: React.FC<{ message: string; type: "success" | "error" }> = ({
  message,
  type,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Alert hilang setelah 4 detik
    return () => clearTimeout(timer);
  }, [message]);

  if (!isVisible) return null;

  const icon =
    type === "success" ? (
      <UserCheck size={20} className="text-lime-300" />
    ) : (
      <AlertTriangle size={20} className="text-red-300" />
    );
  const bgColor =
    type === "success"
      ? "bg-lime-950/90 border-lime-600 shadow-lg shadow-lime-800/30"
      : "bg-red-950/90 border-red-600 shadow-lg shadow-red-800/30";

  return (
    // Menambahkan kelas untuk transisi fade-in/out
    <div
      className={`fixed top-4 right-4 p-4 rounded-xl z-50 flex items-center space-x-3 text-white backdrop-blur-sm transition-all duration-500 ease-in-out ${bgColor} transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`}
    >
      {icon}
      <p className="font-semibold text-sm">{message}</p>
    </div>
  );
};

export default function KomentarPage() {
  const [nama, setNama] = useState("");
  const [isiKomentar, setIsiKomentar] = useState("");
  const [komentarList, setKomentarList] = useState<Komentar[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error">("success");
  const [isLoadingComments, setIsLoadingComments] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const triggerAlert = (message: string, type: "success" | "error") => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => setAlertMessage(null), 4000);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const fetchKomentar = async (page: number) => {
    setIsLoadingComments(true);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE - 1;

    const { data, error, count } = await supabase
      .from("komentar")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(start, end);

    if (!error && data) {
      setKomentarList(data as Komentar[]);
      setTotalCount(count ?? 0);
      setCurrentPage(page);
    } else {
      console.error("Gagal mengambil komentar:", error);
      triggerAlert(`Gagal memuat komentar: ${error?.message}`, "error");
    }
    setIsLoadingComments(false);
  };

  useEffect(() => {
    fetchKomentar(1);
  }, []);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      fetchKomentar(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      fetchKomentar(currentPage - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !isiKomentar.trim()) {
      triggerAlert("Nama dan komentar tidak boleh kosong!", "error");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase
      .from("komentar")
      .insert([{ name: nama.trim(), description: isiKomentar.trim() }]);

    setIsSubmitting(false);

    if (!error) {
      triggerAlert(
        "Komentar berhasil dikirim! Terima kasih atas Komentar Anda. 💙",
        "success"
      );
      setNama("");
      setIsiKomentar("");
      fetchKomentar(1);
    } else {
      triggerAlert(`Gagal mengirim komentar: ${error.message}`, "error");
    }
  };

  // --- 3. Hapus Komentar (Hanya Admin) ---
  const handleDelete = async (id: number) => {
    if (
      !window.confirm(
        "Anda yakin ingin menghapus komentar ini? Tindakan tidak dapat dibatalkan."
      )
    )
      return;

    const { error } = await supabase.from("komentar").delete().eq("id", id);
    if (!error) {
      triggerAlert("Komentar berhasil dihapus. 🗑️", "success");
      fetchKomentar(currentPage);
    } else {
      triggerAlert(`Gagal menghapus komentar: ${error.message}`, "error");
    }
  };

  const handleAdminLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = (form.elements.namedItem("username") as HTMLInputElement)
      ?.value;
    const pass = (form.elements.namedItem("password") as HTMLInputElement)
      ?.value;

    // Username dan password baru: Arleyxa / 160407
    if (user === "Arleyxa" && pass === "160407") {
      setIsAdmin(true);
      setShowLoginModal(false);
      triggerAlert(
        "Selamat datang, Admin! Anda sekarang dapat mengelola komentar. 🛡️",
        "success"
      );
    } else {
      triggerAlert("Username atau password salah.", "error");
    }
  };

  return (
    <section
      id="komentar"
      className="py-12 md:py-20 bg-[#0A0A1F] text-white relative min-h-screen transition-colors duration-500"
    >
      {alertMessage && <CustomAlert message={alertMessage} type={alertType} />}

      <div className="container mx-auto px-4 max-w-lg lg:max-w-5xl">
       
        <div className="mb-8">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center space-x-1 text-cyan-400 border border-cyan-400 px-4 py-2 rounded-full font-medium bg-cyan-900/20 hover:bg-cyan-900/50 transition duration-300 transform hover:scale-[1.03] active:scale-100 shadow-md shadow-cyan-900/40 mb-8"
          >
            <ChevronLeft size={20} />
            <span>Kembali ke Halaman Sebelumnya</span>
          </button>

          <h2
            className="text-4xl md:text-6xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-lg transition duration-500"
          >
            Komunitas Komentar
          </h2>
          <p className="text-center text-gray-400 mb-10 md:mb-16 italic text-base md:text-lg font-light">
            Bagikan pendapat atau tinggalkan jejak digital Anda di sini. 🌌
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-10 border-b border-purple-700/50 pb-4 md:pb-6 space-y-3 sm:space-y-0">
          <button
            onClick={() => fetchKomentar(currentPage)}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-105 disabled:opacity-50"
            disabled={isLoadingComments}
          >
            <RefreshCw
              size={18}
              className={isLoadingComments ? "animate-spin" : ""}
            />
            <span className="text-sm font-medium">
              {isLoadingComments ? "Memuat..." : "Muat Ulang Komentar"}
            </span>
          </button>

          {!isAdmin ? (
            <button
              onClick={() => setShowLoginModal(true)}
              className="inline-flex opacity-0 items-center space-x-2 text-indigo-400 border border-indigo-400 px-4 py-2 rounded-full font-medium bg-indigo-900/20 hover:bg-indigo-900/50 transition duration-300 transform hover:scale-[1.03] active:scale-100 shadow-md shadow-indigo-900/40"
            >
              <LogIn size={16} />
              <span>Login Admin</span>
            </button>
          ) : (
            <div className="inline-flex items-center space-x-3">
              <span
                className="text-xs sm:text-sm font-bold text-lime-400 bg-lime-900/50 px-3 py-1 rounded-full border border-lime-500 shadow-lg shadow-lime-800/30 transition duration-300"
              >
                <UserCheck size={14} className="inline mr-1" /> ADMIN MODE AKTIF
              </span>
              <button
                onClick={() => setIsAdmin(false)}
                className="text-gray-400 border border-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition duration-300 transform active:scale-95"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div
            className="p-6 md:p-8 border border-purple-700/50 rounded-2xl shadow-2xl shadow-purple-900/30 bg-[#161633]/95 backdrop-blur-sm transition duration-500 h-fit 
            
            // PERUBAHAN DI SINI: order-1 (Mobile) / lg:order-1 (Desktop)
            order-1 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400 flex items-center space-x-2">
              <MessageSquare size={24} /> <span>Tulis Komentar</span>
            </h3>

            <form onSubmit={handleSubmit}>
              {/* ... (Form Fields tetap sama) */}
              <div className="mb-4">
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium mb-2 text-purple-300"
                >
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="nama"
                  className="w-full p-3 border border-gray-700 rounded-lg bg-[#1F1F47] text-white focus:ring-purple-500 focus:border-purple-500 transition duration-200 placeholder-gray-500"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="komentar"
                  className="block text-sm font-medium mb-2 text-purple-300"
                >
                  Komentar Anda
                </label>
                <textarea
                  id="komentar"
                  rows={4}
                  className="w-full p-3 border border-gray-700 rounded-lg bg-[#1F1F47] text-white focus:ring-purple-500 focus:border-purple-500 transition duration-200 placeholder-gray-500"
                  value={isiKomentar}
                  onChange={(e) => setIsiKomentar(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Tombol Gradient Neon Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-block font-bold py-3 px-6 md:px-8 rounded-full text-white transition duration-300 ease-in-out transform active:scale-95 w-full text-base md:text-lg flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed shadow-none"
                    : "bg-gradient-to-r from-purple-600 to-cyan-500 shadow-xl shadow-purple-900/50 hover:scale-[1.02] hover:shadow-cyan-500/50"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={20} className="animate-spin" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Kirim Komentar</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* LIST KOMENTAR */}
          <div
            // PERUBAHAN DI SINI: order-2 (Mobile) / lg:order-2 (Desktop)
            className="space-y-6 order-2 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
              ({totalCount}) Daftar Komentar
            </h3>
            {/* ... (Konten List Komentar & Paginasi tetap sama) */}
            {isLoadingComments ? (
              <div className="bg-[#161633] p-6 rounded-xl text-center border border-gray-700">
                <p className="text-cyan-400 flex items-center justify-center space-x-2">
                  <RefreshCw size={18} className="animate-spin" />
                  <span>Memuat komentar...</span>
                </p>
              </div>
            ) : komentarList.length === 0 && totalCount > 0 ? (
              <div className="bg-[#161633] p-6 rounded-xl text-center border border-gray-700">
                <p className="text-gray-400 italic">
                  Tidak ada komentar di halaman ini. Coba kembali ke halaman
                  sebelumnya. ⬅️
                </p>
              </div>
            ) : komentarList.length === 0 ? (
              <div className="bg-[#161633] p-6 rounded-xl text-center border border-gray-700">
                <p className="text-gray-400 italic">
                  Jadilah pengunjung pertama yang meninggalkan jejak!
                </p>
              </div>
            ) : (
              komentarList.map((k) => (
                <div
                  key={k.id}
                  // Styling Item Komentar Cosmic Dark/Neon
                  className="bg-[#161633]/80 p-6 rounded-xl border-l-4 border-cyan-500 shadow-xl shadow-cyan-900/20 transition duration-300 hover:bg-[#1F1F47] relative"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-purple-400 text-lg">
                      {k.name}
                    </span>
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

                  {/* Tombol Hapus (Hanya Admin) */}
                  {isAdmin && (
                    <button
                      // Styling Hapus Neon Red
                      className="absolute bottom-4 right-4 bg-red-800/60 hover:bg-red-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition duration-200 flex items-center space-x-1 text-red-300 border border-red-700 transform active:scale-95"
                      onClick={() => handleDelete(k.id)}
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
                  onClick={handlePrevPage}
                  disabled={currentPage === 1 || isLoadingComments}
                  // Styling Paginasi Neon
                  className={`p-2 rounded-full transition duration-300 ${
                    currentPage === 1 || isLoadingComments
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
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages || isLoadingComments}
                  // Styling Paginasi Neon
                  className={`p-2 rounded-full transition duration-300 ${
                    currentPage === totalPages || isLoadingComments
                      ? "text-gray-600 bg-gray-800 cursor-not-allowed"
                      : "text-cyan-400 bg-purple-900/50 border border-cyan-700 hover:bg-purple-900 transform active:scale-95 shadow-md shadow-cyan-900/30"
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- MODAL LOGIN ADMIN --- */}
      {/* ... (Modal tetap sama) */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] transition-opacity duration-300">
          <div
            // Styling Modal Neon
            className="bg-[#1F1F47] p-8 rounded-2xl border border-blue-700/50 w-full max-w-sm mx-4 shadow-2xl shadow-blue-900/40 transform scale-100 transition-transform duration-300 ease-out"
          >
            <h3 className="text-2xl mb-4 text-blue-400 font-bold flex items-center space-x-2">
              <Lock size={20} /> <span>Akses Admin</span>
            </h3>

            <form onSubmit={handleAdminLogin}>
              <input
                name="username"
                placeholder="Username"
                // Styling Input Dark
                className="bg-[#161633] w-full p-3 mb-3 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                // Styling Input Dark
                className="bg-[#161633] w-full p-3 mb-5 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required
              />

              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full w-full font-bold transition duration-200 transform active:scale-[0.98] shadow-md hover:shadow-lg shadow-blue-900/50">
                Login
              </button>
            </form>

            <button
              className="
                text-blue-400 
                border border-blue-600 
                hover:bg-blue-900/40 
                hover:text-cyan-300 
                transition duration-300 
                block mx-auto 
                mt-5
                flex items-center space-x-1 
                py-2 px-4 rounded-full 
                text-sm font-medium 
                transform active:scale-95
              "
              onClick={() => setShowLoginModal(false)}
            >
              <X size={14} /> <span>Batal</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
