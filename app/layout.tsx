import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hassan Shahzad | Full-Stack Python & AI Engineer",
  description:
    "Full-Stack Engineer specializing in high-performance Python APIs, React frontends, and LLM integration. Built systems serving 100,000+ users with 40% latency improvements. Available for remote work.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
