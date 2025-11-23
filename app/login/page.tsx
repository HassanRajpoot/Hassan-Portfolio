"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { verifyCredentials, setAuthToken } from "@/lib/auth"
import Link from "next/link"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (verifyCredentials(username, password)) {
      setAuthToken()
      router.push("/admin")
    } else {
      setError("Invalid username or password")
    }
  }

  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border/30 rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-2 text-center text-foreground">Admin Login</h1>
          <p className="text-muted-foreground text-center mb-8">Sign in to manage your portfolio</p>

          {error && (
            <div className="bg-destructive/10 border border-destructive/30 text-destructive px-4 py-3 rounded-lg mb-6 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold mb-2 text-foreground">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border border-border/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background text-foreground"
                placeholder="admin"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-foreground">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-border/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background text-foreground"
                placeholder="••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition duration-300 transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-muted-foreground mt-6 text-sm">Login to enter admin page</p>

          <div className="mt-8 text-center">
            <Link href="/" className="text-primary hover:text-accent transition font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
