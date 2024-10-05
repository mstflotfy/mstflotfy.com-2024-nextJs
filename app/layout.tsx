import type { Metadata } from "next";

import { roboto_mono, gloria, freehand } from "@/lib/fonts"

// import style files
import "../styles/globals.css";
import "../styles/fonts.css"
import "../styles/colors.css"
import "../styles/elevation.css"

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: 'mstflotfy',
    template: '%s | mstflotfy',
  },
  description: 'Mostafa Lotfy (indie app maker). Exploring and building tools for productivity.',
  keywords: ['dev', 'design', 'productivity', 'self-mastery', 'mstflotfy', 'Mostafa-Lotfy', 'indie', 'oneexercise'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'mstflotfy',
    title: 'mstflotfy',
    description: 'Mostafa Lotfy (indie app maker). Exploring and building tools for productivity.',
    url: 'https://mstflotfy.com', 
    images: [
      {
        url: 'https://mstflotfy.com/images/mstflotfy.png',
        // recommended is 1200 x 630 (update later!)
        width: 500,
        height: 501,
        alt: "mstflotfy's profile image illustration",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mstflotfy',
    title: 'mstflotfy',
    description: 'Mostafa Lotfy (indie app maker). Exploring and building tools for productivity.',
  },
  alternates: {
    canonical: 'https://mstflotfy.com', // Set your canonical URL here
  },
  viewport: 'width=device-width, initial-scale=1', // Ensures responsive design
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
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
