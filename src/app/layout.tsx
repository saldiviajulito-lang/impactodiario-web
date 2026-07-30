import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import VideoPlayerModal from "@/components/video-player/VideoPlayerModal";
import { VideoPlayerProvider } from "@/context/VideoPlayerContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impacto Diario",
  description: "Portal de noticias de Tierra del Fuego, Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div id="fb-root" />
        <Script
          src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v21.0"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <VideoPlayerProvider>
          {children}
          <VideoPlayerModal />
        </VideoPlayerProvider>
      </body>
    </html>
  );
}
