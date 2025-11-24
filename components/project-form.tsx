"use client"

import type React from "react"

import { useState } from "react"

interface ProjectFormData {
  title: string
  description: string
  technologies: string
  image?: string
  github_url?: string
  live_demo_url?: string
}

interface ProjectFormProps {
  initialData?: ProjectFormData & { id?: number }
  onSubmit: (data: ProjectFormData) => void
  onCancel: () => void
}

export default function ProjectForm({ initialData, onSubmit, onCancel }: ProjectFormProps) {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: initialData?.title || "",
    description: initialData?.description || "",
    technologies: initialData?.technologies || "",
    image: initialData?.image || "",
    github_url: initialData?.github_url || "",
    live_demo_url: initialData?.live_demo_url || "",
  })

  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image || null)
  const [uploadError, setUploadError] = useState<string>("")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload a valid image file")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Image size must be less than 5MB")
      return
    }

    setUploadError("")

    const reader = new FileReader()
    reader.onload = (event) => {
      const base64String = event.target?.result as string
      setImagePreview(base64String)
      setFormData((prev) => ({ ...prev, image: base64String }))
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
      technologies: formData.technologies,
      image: formData.image,
      github_url: formData.github_url || undefined,
      live_demo_url: formData.live_demo_url || undefined,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-4">
      <div>
        <label className="block font-semibold mb-2 text-sm">Project Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
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
          className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-sm">Technologies (comma-separated) *</label>
        <input
          type="text"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          required
          placeholder="React, Node.js, PostgreSQL"
          className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-sm">Project Image *</label>
        <div className="space-y-3">
          <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary transition cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
              required={!imagePreview}
            />
            <label htmlFor="image-upload" className="cursor-pointer block">
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold">Click to upload or drag and drop</div>
                <div className="text-xs">PNG, JPG, GIF up to 5MB</div>
              </div>
            </label>
          </div>

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
                  setFormData((prev) => ({ ...prev, image: "" }))
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
          name="github_url"
          value={formData.github_url}
          onChange={handleChange}
          className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-sm">Live Demo Link</label>
        <input
          type="url"
          name="live_demo_url"
          value={formData.live_demo_url}
          onChange={handleChange}
          className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition text-sm"
        >
          {initialData ? "Update" : "Add"} Project
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-border py-2 rounded-lg font-semibold hover:bg-muted transition text-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
