"use client";

import React from "react";
import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";

interface ContactInfoProps { }

const ContactInfo: React.FC<ContactInfoProps> = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "workarleyxa@gmail.com",
            link: "mailto:workarleyxa@gmail.com",
            color: "text-purple-400",
            borderColor: "border-purple-500/50",
            bgHover: "hover:bg-purple-900/30",
        },
        {
            icon: MapPin,
            label: "Lokasi",
            value: "Bogor, Indonesia",
            link: "#",
            color: "text-cyan-400",
            borderColor: "border-cyan-500/50",
            bgHover: "hover:bg-cyan-900/30",
        },
    ];

    const socialLinks = [
        { icon: Github, url: "https://github.com/ArleyxaSyarif", color: "hover:text-white" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/mohamad-arleyxa-syarif/", color: "hover:text-blue-400" },
        { icon: Instagram, url: "https://instagram.com/mohamad._arleyxa", color: "hover:text-pink-400" },
    ];

    return (
        <div className="space-y-8">
            <div className="prose prose-invert">
                <h3 className="text-2xl font-bold text-white mb-4">
                    Informasi Kontak
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    Saya selalu terbuka untuk mendiskusikan proyek pengembangan web,
                    desain produk, atau peluang kemitraan. Silakan hubungi saya melalui form
                    atau kontak langsung di bawah ini.
                </p>
            </div>

            <div className="space-y-4">
                {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                        <a
                            key={idx}
                            href={info.link}
                            className={`block p-6 rounded-2xl bg-[#161633]/60 border ${info.borderColor} backdrop-blur-md transition-all group ${info.bgHover}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl bg-white/5 ${info.color}`}>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
                                        {info.label}
                                    </p>
                                    <p className="text-lg font-medium text-white group-hover:text-cyan-300 transition-colors">
                                        {info.value}
                                    </p>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>



            {/* Map Placeholder Graphic */}
            <div className="h-40 w-full rounded-2xl overflow-hidden relative border border-white/10 group">
                <div className="absolute inset-0 bg-[#0f0f25] flex items-center justify-center">
                    <div className="text-center">
                        <MapPin className="mx-auto text-cyan-500 mb-2 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
                        <span className="text-xs text-gray-500 font-mono">Bogor, West Java, ID</span>
                    </div>
                </div>
                {/* Decorative grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

        </div>
    );
};

export default ContactInfo;
