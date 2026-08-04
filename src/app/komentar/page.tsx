"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

// Tipe data Komentar
interface Komentar {
  id: number;
  name: string;
  description: string;
  created_at: string;
}

// Konfigurasi Paginasi
const ITEMS_PER_PAGE = 4;

import CustomAlert from "@/components/ui/CustomAlert";
import HeaderSection from "./components/HeaderSection";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import AdminLoginModal from "./components/AdminLoginModal";

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

  // --- Hapus Komentar (Hanya Admin) ---
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
      className="relative w-full min-h-screen bg-[#121214] text-[#e5e1e4] py-16 md:py-24 overflow-hidden font-body transition-colors duration-500"
    >
      {/* Global Style Injections */}
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
            rgba(255, 255, 255, 0.08) 1px,
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

        .text-gradient {
          background: linear-gradient(to right, #ffffff, #8e9192);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Background Atmosphere & Grid */}
      <div className="absolute inset-0 z-0 bg-grid-pattern radial-mask pointer-events-none opacity-50" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {alertMessage && <CustomAlert message={alertMessage} type={alertType} />}

      <div className="max-w-[1280px] mx-auto px-5 md:px-16 relative z-10 w-full">
        <HeaderSection
          onGoBack={handleGoBack}
          onRefresh={() => fetchKomentar(currentPage)}
          isLoading={isLoadingComments}
          isAdmin={isAdmin}
          onOpenLogin={() => setShowLoginModal(true)}
          onLogout={() => setIsAdmin(false)}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-8"
        >
          {/* Form Komentar */}
          <CommentForm
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            nama={nama}
            setNama={setNama}
            isiKomentar={isiKomentar}
            setIsiKomentar={setIsiKomentar}
          />

          {/* List Komentar */}
          <CommentList
            comments={komentarList}
            isLoading={isLoadingComments}
            isAdmin={isAdmin}
            onDelete={handleDelete}
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            totalCount={totalCount}
          />
        </motion.div>
      </div>

      <AdminLoginModal
        isVisible={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleAdminLogin}
      />
    </section>
  );
}