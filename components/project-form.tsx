"use client"

import type React from "react"

import { useState } from "react"
import type { Project } from "@/lib/projects-store"

interface ProjectFormProps {
  initialData?: Project
  onSubmit: (data: Omit<Project, "id" | "createdAt">) => void
  onCancel: () => void
}

export default function ProjectForm({ initialData, onSubmit, onCancel }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    techStack: initialData?.techStack.join(", ") || "",
    imageUrl: initialData?.imageUrl || "",
    githubLink: initialData?.githubLink || "",
    liveLink: initialData?.liveLink || "",
  })

  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.imageUrl || null)
  const [uploadError, setUploadError] = useState<string>("")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload a valid image file")
      return
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Image size must be less than 5MB")
      return
    }

    setUploadError("")

    // Convert image to base64
    const reader = new FileReader()
    reader.onload = (event) => {
      const base64String = event.target?.result as string
      setImagePreview(base64String)
      setFormData((prev) => ({ ...prev, imageUrl: base64String }))
    }
    reader.onerror = () => {
      setUploadError("Failed to read file")
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      title: formData.title,
      description: formData.description,
      techStack: formData.techStack
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      imageUrl: formData.imageUrl,
      githubLink: formData.githubLink || undefined,
      liveLink: formData.liveLink || undefined,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[color:--color-surface] border border-[color:--color-border] rounded-lg p-6 space-y-4"
    >
      <div>
        <label className="block font-semibold mb-2 text-sm">Project Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border border-[color:--color-border] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[color:--color-primary]"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-sm">Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
          className="w-full border border-[color:--color-border] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[color:--color-primary]"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-sm">Tech Stack (comma-separated) *</label>
        <input
          type="text"
          name="techStack"
          value={formData.techStack}
          onChange={handleChange}
          required
          placeholder="React, Node.js, MongoDB"
          className="w-full border border-[color:--color-border] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[color:--color-primary]"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-sm">Project Image *</label>
        <div className="space-y-3">
          <div className="border-2 border-dashed border-[color:--color-border] rounded-lg p-4 text-center hover:border-[color:--color-primary] transition cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
              required={!imagePreview}
            />
            <label htmlFor="image-upload" className="cursor-pointer block">
              <div className="text-sm text-[color:--color-muted]">
                <div className="font-semibold">Click to upload or drag and drop</div>
                <div className="text-xs">PNG, JPG, GIF up to 5MB</div>
              </div>
            </label>
          </div>

          {/* Image preview */}
          {imagePreview && (
            <div className="relative">
              <img
                src={imagePreview || "/placeholder.svg"}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => {
                  setImagePreview(null)
                  setFormData((prev) => ({ ...prev, imageUrl: "" }))
                }}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold"
              >
                Remove
              </button>
            </div>
          )}

          {uploadError && <div className="text-xs text-red-500 font-semibold">{uploadError}</div>}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-2 text-sm">GitHub Link</label>
        <input
          type="url"
          name="githubLink"
          value={formData.githubLink}
          onChange={handleChange}
          className="w-full border border-[color:--color-border] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[color:--color-primary]"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-sm">Live Demo Link</label>
        <input
          type="url"
          name="liveLink"
          value={formData.liveLink}
          onChange={handleChange}
          className="w-full border border-[color:--color-border] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[color:--color-primary]"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 bg-[color:--color-primary] text-white py-2 rounded-lg font-semibold hover:bg-[color:--color-primary-dark] transition text-sm"
        >
          {initialData ? "Update" : "Add"} Project
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-[color:--color-border] py-2 rounded-lg font-semibold hover:bg-[color:--color-surface] transition text-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
