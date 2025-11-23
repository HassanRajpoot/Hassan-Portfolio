"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { isAuthenticated, clearAuthToken } from "@/lib/auth"
import { getProjects, addProject, updateProject, deleteProject, type Project } from "@/lib/projects-store"
import ProjectForm from "@/components/project-form"
import ProjectList from "@/components/project-list"

export default function AdminDashboard() {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login")
      return
    }
    setProjects(getProjects())
    setLoading(false)
  }, [router])

  const handleAddProject = (formData: Omit<Project, "id" | "createdAt">) => {
    const newProject = addProject(formData)
    setProjects([...projects, newProject])
    setIsFormOpen(false)
  }

  const handleUpdateProject = (id: string, formData: Omit<Project, "id" | "createdAt">) => {
    const updated = updateProject(id, formData)
    if (updated) {
      setProjects(projects.map((p) => (p.id === id ? updated : p)))
      setEditingProject(null)
    }
  }

  const handleDeleteProject = (id: string) => {
    if (deleteProject(id)) {
      setProjects(projects.filter((p) => p.id !== id))
    }
  }

  const handleLogout = () => {
    clearAuthToken()
    router.push("/")
  }

  if (loading) {
    return <div className="py-16 text-center text-muted-foreground">Loading...</div>
  }

  return (
    <main className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h1 className="text-5xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your portfolio projects</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-destructive text-destructive-foreground px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-destructive/30 transition font-semibold"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border/30 rounded-xl p-6 sticky top-24">
              {editingProject ? (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-accent">Edit Project</h2>
                  <ProjectForm
                    initialData={editingProject}
                    onSubmit={(data) => handleUpdateProject(editingProject.id, data)}
                    onCancel={() => setEditingProject(null)}
                  />
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-accent">Add Project</h2>
                  {isFormOpen ? (
                    <>
                      <ProjectForm onSubmit={handleAddProject} onCancel={() => setIsFormOpen(false)} />
                    </>
                  ) : (
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition"
                    >
                      + New Project
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Projects List */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-accent">Your Projects ({projects.length})</h2>
              {projects.length === 0 ? (
                <p className="text-muted-foreground text-center py-12">No projects yet. Create your first project!</p>
              ) : (
                <ProjectList projects={projects} onEdit={setEditingProject} onDelete={handleDeleteProject} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
