import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Farraj Industrial Group - Electrical & Industrial Solutions",
    template: "%s | Farraj Industrial Group",
  },
  description:
    "Leading provider of electrical systems, manufacturing solutions, and industrial transformation across the GCC. 20+ years of expertise delivering $10B+ in value.",
  keywords: [
    "industrial solutions Saudi Arabia",
    "electrical systems GCC",
    "manufacturing automation",
    "power distribution Middle East",
    "industrial engineering services",
    "B2B industrial supplier",
    "petrochemical equipment",
    "oil and gas electrical systems",
  ],
  authors: [{ name: "Farraj Industrial Group" }],
  creator: "Farraj Industrial Group",
  publisher: "Farraj Industrial Group",
  metadataBase: new URL("https://www.farraj-sa.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ar: "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: "https://www.farraj-sa.com",
    title: "Farraj Industrial Group - Electrical & Industrial Solutions",
    description:
      "Leading provider of electrical systems, manufacturing solutions, and industrial transformation across the GCC. 20+ years of expertise.",
    siteName: "Farraj Industrial Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Farraj Industrial Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farraj Industrial Group - Electrical & Industrial Solutions",
    description:
      "Leading provider of electrical systems, manufacturing solutions, and industrial transformation across the GCC.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased">
      
        {/* <Header /> */}
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
