import type { Metadata } from "next";
import {  Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import {  Geist } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import { Navbar } from "@/components/porfolio/navbar";
import { CommandToobar } from "@/components/porfolio/command-toolbar";





const bricol = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage-grostesque"
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif"
});

const geistMono = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-geist-mono", 
});

export const metadata: Metadata = {
  title: "Abhi Vignesh",
  description: "Abhi Vignesh Portfolio",
  icons: {
    icon: "/av.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${geistMono.variable} ${instrumentSerif.variable} ${bricol.variable} antialiased dark:bg-[#080808] selection:bg-purple-500 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
          <Navbar />
          <CommandToobar />
         <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
