import Image from "next/image";
import Link from "next/link";

export default function Kerja() {
    const profileImageUrl = "/img/arkana.png";

    return (
        <main className="w-full min-h-screen bg-[#131315] text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full">

                {/* Editorial Container Card */}
                <div className="bg-[#1E1E20] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">

                    {/* Left Visual Side */}
                    <div className="w-full lg:w-1/2 relative min-h-[350px] sm:min-h-[420px] lg:min-h-[520px] bg-zinc-900 overflow-hidden">
                        <Image
                            src={profileImageUrl}
                            alt="Profil Pendiri Arleyxa"
                            fill
                            unoptimized
                            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out mix-blend-luminosity opacity-70"
                            priority
                        />

                        {/* Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E20] via-transparent to-black/40"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1E1E20]/80 hidden lg:block"></div>

                        {/* Floating Tag */}
                        <div className="absolute top-6 left-6 z-10">
                            <div className="bg-[#1E1E20]/90 border border-white/15 rounded-full px-4 py-1.5 flex items-center space-x-2 backdrop-blur-md">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                <span className="text-xs font-semibold text-zinc-300 tracking-wider uppercase">
                                    Founder By Arleyxa
                                </span>
                            </div>
                        </div>

                        {/* Bottom Info Anchor */}
                        <div className="absolute bottom-6 left-6 right-6 z-10">
                            <h2 className="text-2xl font-bold text-white mb-0.5">
                                Arleyxa
                            </h2>
                            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                                Lead Engineer &amp; Desainer
                            </p>
                        </div>
                    </div>

                    {/* Right Content Side */}
                    <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-14 flex flex-col justify-center relative bg-[#1E1E20]">
                        {/* Background Glow Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="mb-3 inline-block">
                                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.2em]">
                                    Agensi Web Arkana
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                                Meningkatkan Standar Digital
                            </h1>

                            <p className="text-base sm:text-lg text-zinc-300 mb-8 max-w-lg leading-relaxed">
                                Kami membangun pengalaman web premium dengan presisi teknis dan
                                estetika minimalis. Menghadirkan platform canggih berkinerja tinggi
                                untuk brand modern.
                            </p>

                            {/* Stats Row */}
                            <div className="grid grid-cols-2 gap-6 mb-8 border-y border-white/10 py-6">
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                        50+
                                    </div>
                                    <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                                        Proyek Selesai
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                        99%
                                    </div>
                                    <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                                        Kepuasan Klien
                                    </div>
                                </div>
                            </div>

                            {/* Actions Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="#"
                                    className="w-full sm:w-auto bg-white text-black font-semibold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg"
                                >
                                    <span>Jelajahi Solusi Kami</span>
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </Link>

                                <Link
                                    href="https://arkanaweb.vercel.app"
                                    className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider hover:border-white hover:bg-white/5 transition-all duration-300 text-center"
                                >
                                    Lihat Profil Agensi
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

               

            </div>
        </main>
    );
}