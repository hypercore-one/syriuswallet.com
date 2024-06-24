import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PreLineScript from '@/components/PreLineScript';
import Header from '@/components/layout/Header';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syrius Wallet",
  description: "Download the Syrius Wallet today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png"/>
          <link rel="android-chrome" sizes="512x512" href="/android-chrome-512x512.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <body className={inter.className}>
      <Header/>
      <main id="content">
          <div className="max-w-[85rem] mx-auto pt-6 pb-10 px-4 sm:px-6 lg:px-8 md:pt-12">
              {children}
          </div>
      </main>
      <PreLineScript/>
      </body>
      </html>
  );
}
