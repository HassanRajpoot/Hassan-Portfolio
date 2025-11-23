"use client"

import React from "react"
import Link from "next/link"
import { useState } from "react"
import { isAuthenticated } from "@/lib/auth"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  React.useEffect(() => {
    setAuthenticated(isAuthenticated())
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border/30 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition"
          >
            Hassan Shahzad
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="hover:text-primary transition font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition font-medium">
              About
            </Link>
            <Link href="/projects" className="hover:text-primary transition font-medium">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-primary transition font-medium">
              Contact
            </Link>
            {authenticated ? (
              <Link
                href="/admin"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition font-semibold"
              >
                Admin
              </Link>
            ) : (
              <Link
                href="/login"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition font-semibold"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-card rounded-lg transition" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 hover:bg-card/50 rounded-lg transition font-medium">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-card/50 rounded-lg transition font-medium">
              About
            </Link>
            <Link href="/projects" className="block px-4 py-2 hover:bg-card/50 rounded-lg transition font-medium">
              Projects
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-card/50 rounded-lg transition font-medium">
              Contact
            </Link>
            {authenticated ? (
              <Link
                href="/admin"
                className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold"
              >
                Admin
              </Link>
            ) : (
              <Link
                href="/login"
                className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
