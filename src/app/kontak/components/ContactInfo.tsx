"use client";

import React from "react";
import { Mail, MapPin, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo: React.FC = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "workarleyxa@gmail.com",
            link: "mailto:workarleyxa@gmail.com",
        },
        {
            icon: MapPin,
            label: "Lokasi Utama",
            value: "Bogor, Jawa Barat, Indonesia",
            link: "https://maps.google.com/?q=Bogor,Indonesia",
        },
    ];

    const socialLinks = [
        {
            name: "Github",
            icon: Github,
            url: "https://github.com/ArleyxaSyarif",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/mohamad-arleyxa-syarif/",
        },
        {
            name: "Instagram",
            icon: Instagram,
            url: "https://instagram.com/mohamad._arleyxa",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
        >
            <motion.div variants={itemVariants} className="space-y-3">
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    Informasi Kontak
                </h3>
                <p className="text-sm text-[#c4c7c8] leading-relaxed font-body">
                    Saya selalu terbuka untuk mendiskusikan proyek pengembangan web,
                    desain produk, atau peluang kemitraan. Silakan hubungi saya melalui form
                    atau kontak langsung di bawah ini.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
                {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                        <motion.a
                            key={idx}
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            whileHover={{ x: 4 }}
                            className="group block p-4 sm:p-5 rounded-2xl bg-[#201f21]/70 hover:bg-[#201f21] border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-300 shadow-md"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#e5e1e4] group-hover:bg-white group-hover:text-[#121214] transition-all duration-300">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-[#8e9192] uppercase tracking-widest font-semibold mb-0.5">
                                            {info.label}
                                        </p>
                                        <p className="text-sm md:text-base font-medium text-[#e5e1e4] group-hover:text-white transition-colors">
                                            {info.value}
                                        </p>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    size={18}
                                    className="text-[#8e9192] opacity-50 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                                />
                            </div>
                        </motion.a>
                    );
                })}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
                <p className="text-xs font-semibold text-[#8e9192] uppercase tracking-wider">
                    Temukan Saya Di Social Media
                </p>
                <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#201f21]/70 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group"
                            >
                                <Icon size={16} className="text-[#8e9192] group-hover:text-white transition-colors" />
                                <span className="text-xs font-medium text-[#c4c7c8] group-hover:text-white transition-colors hidden sm:inline">
                                    {social.name}
                                </span>
                            </motion.a>
                        );
                    })}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ContactInfo;