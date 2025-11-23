"use client"

import type React from "react"
import { useState } from "react"
import { saveSubmission } from "@/lib/contact-store"

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      console.log("[v0] Contact submission sent successfully")
      saveSubmission(formData.name, formData.email, formData.message)

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setErrors({})

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setErrors({ message: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div>
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-4 rounded-lg mb-6 font-medium animate-in fade-in slide-in-from-top-2">
          <p className="font-semibold">Message sent successfully!</p>
          <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-2 text-foreground">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            disabled={isSubmitting}
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition bg-card text-foreground placeholder-muted-foreground ${
              errors.name
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-border/30 focus:border-primary focus:ring-primary/20"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1 font-medium">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-2 text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            disabled={isSubmitting}
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition bg-card text-foreground placeholder-muted-foreground ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-border/30 focus:border-primary focus:ring-primary/20"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1 font-medium">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block font-semibold mb-2 text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or inquiry..."
            disabled={isSubmitting}
            rows={5}
            className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition bg-card text-foreground placeholder-muted-foreground resize-none ${
              errors.message
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-border/30 focus:border-primary focus:ring-primary/20"
            } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none`}
          />
          {errors.message && <p className="text-red-600 text-sm mt-1 font-medium">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}
