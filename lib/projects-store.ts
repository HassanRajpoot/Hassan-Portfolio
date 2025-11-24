// Client-side storage for projects using localStorage
export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  imageUrl: string
  githubLink?: string
  liveLink?: string
  createdAt: number
}

const STORAGE_KEY = "portfolio_projects"

const initializeStorage = (): void => {
  if (typeof window === "undefined") return
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) {
      // Only set default projects if storage is completely empty
      localStorage.setItem(STORAGE_KEY, JSON.stringify(getDefaultProjects()))
    }
  } catch {
    // Storage not available
  }
}

export const getProjects = (): Project[] => {
  if (typeof window === "undefined") return []
  try {
    initializeStorage()
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const getDefaultProjects = (): Project[] => {
  return [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management and payment integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "/ecommerce-dashboard.png",
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      createdAt: Date.now(),
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      techStack: ["React", "Firebase", "Tailwind CSS"],
      imageUrl: "/task-management-interface.png",
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      createdAt: Date.now() - 1000000,
    },
  ]
}

export const saveProjects = (projects: Project[]): void => {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
}

export const addProject = (project: Omit<Project, "id" | "createdAt">): Project => {
  const projects = getProjects()
  const newProject: Project = {
    ...project,
    id: Date.now().toString(),
    createdAt: Date.now(),
  }
  projects.push(newProject)
  saveProjects(projects)
  return newProject
}

export const updateProject = (id: string, updates: Partial<Omit<Project, "id" | "createdAt">>): Project | null => {
  const projects = getProjects()
  const index = projects.findIndex((p) => p.id === id)
  if (index === -1) return null

  projects[index] = { ...projects[index], ...updates }
  saveProjects(projects)
  return projects[index]
}

export const deleteProject = (id: string): boolean => {
  const projects = getProjects()
  const filtered = projects.filter((p) => p.id !== id)
  if (filtered.length === projects.length) return false

  saveProjects(filtered)
  return true
}
