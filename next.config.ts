/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    css: {
      // Ini buat disable lightningcss yang biasanya bentrok sama syntax CSS custom
      legacyCss: true,
    },
  },
};

export default nextConfig;
