"use client"

interface Project {
  id?: number
  title: string
  description: string
  image?: string
  technologies?: string
  github_url?: string
  live_demo_url?: string
}

interface ProjectListProps {
  projects: Project[]
  onEdit: (project: Project) => void
  onDelete: (id: number | undefined) => void
}

export default function ProjectList({ projects, onEdit, onDelete }: ProjectListProps) {
  const getTechStack = (technologies: string | undefined) => {
    if (!technologies) return []
    return technologies
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description.substring(0, 60)}...</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {getTechStack(project.technologies).map((tech) => (
              <span key={tech} className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(project)}
              className="flex-1 bg-primary text-primary-foreground py-2 rounded text-sm hover:bg-primary/90 transition"
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
