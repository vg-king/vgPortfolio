import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { structuredData } from "./lib/structured-data";
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
  title: {
    default: "Vishnu Gupta - Java Full Stack Developer | Portfolio",
    template: "%s | Vishnu Gupta Portfolio"
  },
  description: "A self-taught Java Full Stack Developer with hands-on experience in building secure, scalable applications using Spring Boot and React. Currently pursuing B.Tech at KIIT Bhubaneswar.",
  keywords: [
    "Java Developer",
    "Full Stack Developer", 
    "Spring Boot",
    "React.js",
    "Web Development",
    "Software Engineer",
    "Portfolio",
    "KIIT Bhubaneswar"
  ],
  authors: [{ name: "Vishnu Gupta" }],
  creator: "Vishnu Gupta",
  publisher: "Vishnu Gupta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vgportfolio.vercel.app',
    title: 'Vishnu Gupta - Java Full Stack Developer Portfolio',
    description: 'A self-taught Java Full Stack Developer with hands-on experience in building secure, scalable applications using Spring Boot and React.',
    siteName: 'Vishnu Gupta Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishnu Gupta - Java Full Stack Developer',
    description: 'A self-taught Java Full Stack Developer with hands-on experience in building secure, scalable applications.',
    creator: '@vishnugupta',
  },
  verification: {
    google: 'google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
