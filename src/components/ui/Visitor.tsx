import { useEffect, useState, useRef } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const fetched = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || fetched.current) return;
    fetched.current = true; // cegah fetch 2x karena Strict Mode

    const savedCount = localStorage.getItem("visitorCount");
    if (savedCount) setCount(Number(savedCount));

    fetch("https://api.counterapi.dev/v1/portofolio-alek/visits/up")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        localStorage.setItem("visitorCount", data.count);
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
      });
  }, []);

  return (
    <p className="text-center mt-4 text-sm sm:text-base font-medium">
      <span className="text-base animate-bounce inline-block mr-1">👋</span>
      <span className="text-gray-400">Kamu orang ke </span>
      <span className="font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
        {count !== null ? count : "memuat..."}
      </span>{" "}
      <span className="text-gray-400">yang mengunjungi website ini 🚀</span>
    </p>
  );
}
