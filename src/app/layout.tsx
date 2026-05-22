import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vemtap Health | Modern Workflow Automation for Eye Clinics",
  description: "Reduce queues, automate patient check-ins, manage HMOs, and streamline operations with the most intelligent platform for eye clinics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col selection:bg-brand-blue/20 selection:text-brand-blue`}
      >
        {children}
      </body>
    </html>
  );
}
