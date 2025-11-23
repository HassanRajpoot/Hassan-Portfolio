"use client"

import type { Project } from "@/lib/projects-store"

interface ProjectListProps {
  projects: Project[]
  onEdit: (project: Project) => void
  onDelete: (id: string) => void
}

export default function ProjectList({ projects, onEdit, onDelete }: ProjectListProps) {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-[color:--color-surface] border border-[color:--color-border] rounded-lg p-4 hover:shadow-md transition"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm text-[color:--color-text-muted]">{project.description.substring(0, 60)}...</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-[color:--color-primary] text-white text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(project)}
              className="flex-1 bg-[color:--color-primary] text-white py-2 rounded text-sm hover:bg-[color:--color-primary-dark] transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="flex-1 bg-red-600 text-white py-2 rounded text-sm hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
