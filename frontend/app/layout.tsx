import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unique Neupane|Full Stack Developer | MERN, PHP, Next.js",
  description:
    "Unique Neupane is a Full Stack Developer from Kathmandu, Nepal specializing in MERN stack, PHP, Laravel, and Next.js, building scalable EdTech and hospital management systems.",
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  keywords: [
    "Unique Neupane",
    "Personal Portfolio",
    "Khemraj Neupane",
    "Neupane Khemraj",
    "Khem Raj Neupane",
    "Full Stack Developer Nepal",
    "MERN Stack Developer",
    "MERN Stack Developer Nepal",
    "Laravel Developer Nepal",
    "PHP Developer Nepal",
    "Web Developer Kathmandu",
    "Web Developer Nepal",
    "Frontend and Backend Developer",
    "Portfolio Website",
    "Kathmandu Developer",
  ],
  openGraph: {
    title: "Unique Neupane | Full Stack Developer | MERN, PHP, Next.js",
    description:
      "Unique Neupane is a Full Stack Developer from Kathmandu, Nepal specializing in MERN stack, PHP, Laravel, and Next.js, building scalable EdTech and hospital management systems.",
    url: "https://khemrajneupane.com.np",
    siteName: "Unique Neupane Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unique Neupane Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4598780809353718"
          crossOrigin="anonymous"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y28BZ8L18W"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y28BZ8L18W');
          `}
        </Script>
      </head>
      <body className={`font-serif antialiased `}>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
