import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import NavSpacer from "@/components/layout/NavSpacer";
import Footer from "@/components/layout/Footer";
import { EVENT_ONE_LINER } from "@/lib/event";

const inter = Inter({ subsets: ["latin"] });
// Name / role typeface used on the printed attendee tags. Self-hosted so the
// build never depends on fetching Google Fonts at deploy time.
const anton = localFont({
  src: "./fonts/Anton-Regular.ttf",
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: EVENT_ONE_LINER,
  description: "Integrate, fund, sustain and own TB-HIV Response in Gombe State",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${anton.variable} min-h-screen flex flex-col bg-milk`}>
        <Navbar />
        <NavSpacer />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
