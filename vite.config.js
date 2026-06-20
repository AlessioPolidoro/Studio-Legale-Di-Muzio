import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Per testare /api in locale usare `vercel dev` invece di `npm run dev`.
// La cartella /api e' servita dal runtime serverless di Vercel, non da Vite.
export default defineConfig({
  plugins: [react()],
});
