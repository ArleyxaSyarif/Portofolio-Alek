import nested from 'postcss-nested';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
  plugins: ["@tailwindcss/postcss", tailwindcss, nested, autoprefixer],
};

export default config;
