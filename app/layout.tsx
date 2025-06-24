import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Head from "next/head";

const QuicksandText = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const InterText = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tesserato Integra",
  description: "Created by Gabriel Morais (@GabrielMoraisDev on Github)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body className={`${QuicksandText.variable} ${InterText.variable} antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
