"use client"

import { useState, useEffect } from "react"
import { getProjects, type Project } from "@/lib/projects-store"

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setProjects(getProjects())
    setLoading(false)

    const handleStorageChange = () => {
      setProjects(getProjects())
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  return (
    <main className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground">A selection of work I&apos;ve built recently</p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">No projects yet. Check back soon!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition duration-300 group"
              >
                <div className="relative overflow-hidden h-56 bg-muted">
                  <img
                    src={project.imageUrl || "/placeholder.svg?height=224&width=400&query=project"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="mb-6">
                    <p className="text-xs font-semibold mb-3 text-muted-foreground tracking-wide uppercase">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/15 text-primary text-xs px-3 py-1.5 rounded-full font-semibold border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-border/30">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent font-semibold text-sm transition flex items-center gap-1"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary font-semibold text-sm transition flex items-center gap-1"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
