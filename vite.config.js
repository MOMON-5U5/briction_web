import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
// This configuration file sets up Vite with React support and defines an alias for the src directory.
// It uses the 'defineConfig' function from Vite to create a configuration object.
// The 'react' plugin is included to enable React features, and the 'path' module is used to resolve the alias.
// The '@' alias points to the './src' directory, allowing for cleaner imports in the project.
// The configuration is exported as the default export of the module, making it available for Vite to use when building or serving the project.
// This file is essential for configuring the Vite development server and build process for a React application.