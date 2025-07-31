import type { Metadata } from "next";
import {  Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/next"

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose weights you need
  variable: "--font-roboto-mono", // Optional: for CSS variable
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
        className={`${robotoMono.variable} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
         <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
