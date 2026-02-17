import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/wrapper/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { CommandToobar } from "@/components/modals/command-toolbar";
import { LabelDisplayProvider } from "@/context/LabelDisplay/LabelDisplayProvider";
import { SoundProvider } from "@/context/Sound/SoundProvider";

const bricol = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage-grostesque",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-geist-sans",
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
        className={` ${geistSans.variable} ${instrumentSerif.variable} ${bricol.variable} antialiased dark:bg-[#080808] selection:bg-purple-500 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SoundProvider>
            <LabelDisplayProvider>
              <Toaster />
              {children}
              <CommandToobar />
              <Analytics />
            </LabelDisplayProvider>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
