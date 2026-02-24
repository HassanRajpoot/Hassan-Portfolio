"use client"

import { useState, useEffect } from "react"

export interface Project {
  id?: number
  title: string
  description: string
  image?: string
  technologies?: string
  github_url?: string
  live_demo_url?: string
}

const caseStudies = [
  {
    tag: "Backend · Performance",
    tagColor: "bg-primary/10 text-primary border-primary/20",
    title: "High-Volume REST API Optimization",
    client: "NETSOL Technologies (Publicly listed · Global clients)",
    image: "/ecommerce-dashboard.png",
    problem:
      "REST APIs handling 100,000+ daily requests were experiencing performance bottlenecks, causing slow response times and degraded user experience under peak loads — directly impacting client SLA commitments.",
    solution:
      "Redesigned API architecture for horizontal scalability. Implemented session-based storage to offload database queries, rebuilt query patterns with indexing strategies, and integrated tags-based analytics for real-time behavior tracking. Deployed the new stack on AWS EC2 + Docker with full CI/CD pipelines.",
    results: [
      { metric: "35%", label: "Faster API responses" },
      { metric: "25%", label: "DB load reduction" },
      { metric: "100k+", label: "Daily requests handled" },
    ],
    stack: ["Python", "Django REST", "PostgreSQL", "AWS EC2", "Docker", "Redis"],
  },
  {
    tag: "AI · LLM Integration",
    tagColor: "bg-accent/10 text-accent border-accent/20",
    title: "LLM-Powered Feature Integration",
    client: "Xeven Solutions (AI Product Company)",
    image: "/task-management-interface.png",
    problem:
      "The product team needed to add intelligent search, personalized recommendations, and automated support features to an existing production system — without rebuilding the core platform or disrupting the 99.9% uptime SLA.",
    solution:
      "Designed a modular LLM integration layer using OpenAI APIs, enabling the core platform to remain unchanged while new AI features were added as independent services. Built reusable Python backend packages to standardize AI feature deployment across the engineering team.",
    results: [
      { metric: "40%", label: "API latency reduction" },
      { metric: "30%", label: "Faster dev cycles" },
      { metric: "99.9%", label: "Uptime maintained" },
    ],
    stack: ["Python", "FastAPI", "OpenAI API", "LangChain", "PostgreSQL", "Docker"],
  },
  {
    tag: "Full-Stack · E-Commerce",
    tagColor: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    title: "Full-Stack E-Commerce Platform",
    client: "HASSOL (Client-facing delivery)",
    image: "/ecommerce-dashboard.png",
    problem:
      "A retail client needed a scalable e-commerce platform with a modern React frontend and a robust backend API — built from scratch, with tight delivery timelines and direct client requirements gathering.",
    solution:
      "Led end-to-end development of the platform: designed and built a Python + Node.js REST API backend, developed responsive React UI components with optimized state management, and integrated third-party payment and logistics APIs. Collaborated directly with the client throughout the delivery cycle.",
    results: [
      { metric: "100%", label: "On-time delivery" },
      { metric: "Mobile-first", label: "Responsive UI" },
      { metric: "REST API", label: "Full integration" },
    ],
    stack: ["React", "Node.js", "Python", "PostgreSQL", "REST APIs", "Tailwind CSS"],
  },
]

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects")
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error("Error fetching projects:", error)
    } finally {
      setLoading(false)
    }
  }

  const getTechStack = (technologies: string | undefined) => {
    if (!technologies) return []
    return technologies
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
  }

  return (
    <main className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Real problems. Real solutions. Real numbers. Here&apos;s how I&apos;ve delivered measurable results for the teams I&apos;ve worked with.
          </p>
        </div>

        {/* Case Studies — Hardcoded PSR format */}
        <section className="mb-24 space-y-12">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition duration-300"
            >
              {/* Card top: image + tag */}
              <div className="relative h-52 bg-muted overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${cs.tagColor}`}>
                    {cs.tag}
                  </span>
                </div>
                {/* Metric badges overlay */}
                <div className="absolute bottom-4 left-4 flex gap-3 flex-wrap">
                  {cs.results.map((r) => (
                    <div key={r.label} className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 text-center">
                      <p className="text-lg font-bold text-primary leading-none">{r.metric}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card body: PSR */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-1">{cs.title}</h2>
                <p className="text-sm text-muted-foreground mb-6">{cs.client}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-background border border-border/40 rounded-xl p-5">
                    <p className="text-xs font-bold text-primary tracking-widest uppercase mb-2">Problem</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                  </div>
                  <div className="bg-background border border-border/40 rounded-xl p-5">
                    <p className="text-xs font-bold text-accent tracking-widest uppercase mb-2">Solution</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="bg-background border border-border/40 rounded-xl p-5">
                    <p className="text-xs font-bold text-orange-600 tracking-widest uppercase mb-3">Results</p>
                    <div className="space-y-2">
                      {cs.results.map((r) => (
                        <div key={r.label} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-semibold text-foreground">{r.metric}</span>
                          <span className="text-xs text-muted-foreground">{r.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {cs.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA between sections */}
        <div className="text-center mb-16">
          <a
            href="/contact#book-call"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition duration-300 inline-block"
          >
            Discuss Your Project →
          </a>
        </div>

        {/* Dynamic Projects Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-3">Recent Projects</h2>
          <p className="text-muted-foreground">Additional work added as projects are completed.</p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="text-center py-16 bg-card border border-border/30 rounded-2xl text-muted-foreground">
            <p className="text-lg font-medium mb-2">More projects coming soon</p>
            <p className="text-sm">Check back after you&apos;ve added projects via the admin dashboard.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition duration-300 group"
              >
                <div className="relative overflow-hidden h-56 bg-muted">
                  <img
                    src={project.image || "/placeholder.svg?height=224&width=400&query=project"}
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
                      {getTechStack(project.technologies).map((tech) => (
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
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent font-semibold text-sm transition flex items-center gap-1"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.live_demo_url && (
                      <a
                        href={project.live_demo_url}
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
