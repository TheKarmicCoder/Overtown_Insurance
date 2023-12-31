import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styledComponents from 'babel-plugin-styled-components';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: /.(jsx|tsx)$/,
      babel: {
        plugins: [styledComponents],
        babelrc: false,
        configFile: false,
      },
    }),
  ],
});
