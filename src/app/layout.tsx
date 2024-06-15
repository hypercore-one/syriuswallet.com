import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PreLineScript from '@/components/PreLineScript';
import Header from '@/components/layout/Header';

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
      <body className={inter.className}>
          <Header/>
          <main id="content">
              <div className="max-w-[85rem] mx-auto pt-6 pb-10 px-4 sm:px-6 lg:px-8 md:pt-12">
                  {children}
              </div>
          </main>
          <PreLineScript />
      </body>
      </html>
  );
}
