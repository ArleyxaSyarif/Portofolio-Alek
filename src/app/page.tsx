"use client";

import Profile from "@/components/ui/Profile";
import Project from "@/components/ui/Project";
import Keterampilan from "@/components/ui/Keterampilan";
import Datadiri from "@/components/ui/Datadiri";
import Sertifikat from "@/components/ui/Sertifikat";
import Footer from "@/components/ui/Footer";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mengindikasikan bahwa kita di client
  }, []);

  if (!isClient) {
    return null; // Jangan render komponen di server
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <Profile />

      <Datadiri />
      <Keterampilan />
      <Project />
      <Sertifikat />
      <Footer />
    </main>
  );
}
