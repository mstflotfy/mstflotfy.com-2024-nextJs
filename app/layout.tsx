import type { Metadata } from "next";
import { Roboto_Mono, Gloria_Hallelujah, Freehand } from "next/font/google"

// import style files
import "../styles/globals.css";
import "../styles/fonts.css"
import "../styles/colors.css"
import "../styles/elevation.css"

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
export const gloria = Gloria_Hallelujah({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gloria',
})
export const freehand = Freehand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-freehand',
})

export const metadata: Metadata = {
  title: "mstflotfy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${roboto_mono.variable} ${freehand.variable}`}
    >
      <body
        className={cn(
          "min-h-screen antialiased",
          roboto_mono.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
