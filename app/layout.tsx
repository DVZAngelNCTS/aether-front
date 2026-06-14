import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MangaScan",
  description: "Lis tes mangas, webtoons et manhwas gratuitement",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}