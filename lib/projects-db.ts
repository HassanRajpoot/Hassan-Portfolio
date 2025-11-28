import { sql } from "./db"

export interface Project {
  id?: number
  title: string
  description: string
  image?: string
  technologies?: string
  github_url?: string
  live_demo_url?: string
  created_at?: string
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const result = await sql`
      SELECT * FROM projects 
      ORDER BY created_at DESC
    `
    return result as Project[]
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function createProject(project: Project): Promise<Project | null> {
  try {
    
    console.log("[v0] createProject - Starting with data:", {
      title: project.title,
      technologies: project.technologies,
    })
    const result = await sql`
      INSERT INTO projects (title, description, image, technologies, github_url, live_demo_url)
      VALUES (${project.title}, ${project.description}, ${project.image || null}, ${project.technologies || ""}, ${project.github_url || ""}, ${project.live_demo_url || ""})
      RETURNING *
    `
    console.log("[v0] createProject - Database result:", result)
    if (!result || result.length === 0) {
      console.error("[v0] createProject - No result returned from database")
      return null
    }
    return result[0] as Project
  } catch (error) {
    console.error("[v0] createProject - Database error:", error)
    return null
  }
}

export async function updateProject(id: number, project: Partial<Project>): Promise<Project | null> {
  try {
    let result

    if (Object.keys(project).length === 0) return null

    // Build update dynamically based on provided fields
    const updates = []
    if (project.title !== undefined) {
      const res = await sql`
        UPDATE projects 
        SET title = ${project.title}, updated_at = NOW()
        WHERE id = ${id}
        RETURNING *
      `
      result = res[0]
    }
    if (project.description !== undefined) {
      const res = await sql`
        UPDATE projects 
        SET description = ${project.description}, updated_at = NOW()
        WHERE id = ${id}
        RETURNING *
      `
      result = res[0]
    }
    if (project.image !== undefined) {
      const res = await sql`
        UPDATE projects 
        SET image = ${project.image}, updated_at = NOW()
        WHERE id = ${id}
        RETURNING *
      `
      result = res[0]
    }
    if (project.technologies !== undefined) {
      const res = await sql`
        UPDATE projects 
        SET technologies = ${project.technologies}, updated_at = NOW()
        WHERE id = ${id}
        RETURNING *
      `
      result = res[0]
    }
    if (project.github_url !== undefined) {
      const res = await sql`
        UPDATE projects 
        SET github_url = ${project.github_url}, updated_at = NOW()
        WHERE id = ${id}
        RETURNING *
      `
      result = res[0]
    }
    if (project.live_demo_url !== undefined) {
      const res = await sql`
        UPDATE projects 
        SET live_demo_url = ${project.live_demo_url}, updated_at = NOW()
        WHERE id = ${id}
        RETURNING *
      `
      result = res[0]
    }

    return result as Project
  } catch (error) {
    console.error("Error updating project:", error)
    return null
  }
}

export async function deleteProject(id: number): Promise<boolean> {
  try {
    await sql`
      DELETE FROM projects 
      WHERE id = ${id}
    `
    return true
  } catch (error) {
    console.error("Error deleting project:", error)
    return false
  }
}
