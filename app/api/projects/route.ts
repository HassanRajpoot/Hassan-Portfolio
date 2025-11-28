import { getAllProjects, createProject, updateProject, deleteProject } from "@/lib/projects-db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const projects = await getAllProjects()
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const project = await createProject(body)
    return NextResponse.json(project, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...projectData } = body
    const project = await updateProject(id, projectData)
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    if (!id) {
      return NextResponse.json({ error: "Project ID required" }, { status: 400 })
    }
    await deleteProject(Number.parseInt(id))
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 })
  }
}
