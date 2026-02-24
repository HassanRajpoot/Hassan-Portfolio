"use client"

import Link from "next/link"

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    tag: "Backend",
    title: "API Development & Optimization",
    description:
      "I build Python REST APIs (FastAPI, Django) that handle 100k+ requests/day with sub-200ms response times. If your backend is slow, expensive, or breaking under load — I fix it.",
    targetClient: "Perfect for: SaaS startups scaling their backend infrastructure",
    accent: "primary",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tag: "AI · LLM",
    title: "AI Feature Integration",
    description:
      "I integrate LLMs (OpenAI, open-source) into your existing product for intelligent search, recommendations, and automation. Add AI without rebuilding your platform from scratch.",
    targetClient: "Perfect for: Products adding AI without rebuilding everything",
    accent: "accent",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    tag: "Full-Stack",
    title: "Full-Stack Web Applications",
    description:
      "End-to-end React + Python applications deployed on AWS with Docker and CI/CD pipelines. From MVP to production-grade system — built to scale from day one.",
    targetClient: "Perfect for: Startups needing an MVP or feature build",
    accent: "orange-500",
  },
]

const metrics = [
  { value: "100k+", label: "Active users served", sub: "across production systems" },
  { value: "40%", label: "API latency reduction", sub: "under high concurrency" },
  { value: "35%", label: "Response time improvement", sub: "for 100k+ daily requests" },
  { value: "99.9%", label: "Uptime maintained", sub: "through monitoring & DevOps" },
]

const skillGroups = [
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "Django REST", "Node.js", "REST APIs", "Microservices"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, ECR)", "Docker", "CI/CD", "PostgreSQL", "MongoDB"],
  },
  {
    category: "AI & Emerging",
    skills: ["LLM Integration", "OpenAI API", "LangChain", "Intelligent Search"],
  },
]

const companies = [
  { name: "Xeven Solutions", note: "AI Product Company" },
  { name: "NETSOL Technologies", note: "Publicly listed · 1,000+ employees · Global clients" },
  { name: "HASSOL", note: "Full-stack delivery agency" },
]

export default function Home() {
  return (
    <main>
      {/* ─── HERO SECTION ─────────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-background via-background to-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto w-full text-center">

          {/* Status badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <p className="text-sm font-semibold text-primary">Available for projects</p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            <span className="bg-gradient-to-r from-primary via-orange-500 to-accent bg-clip-text text-transparent">
              Full-Stack Engineer
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground/80">
              for High-Traffic SaaS Products
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            I build <strong className="text-foreground">Python backends</strong> and{" "}
            <strong className="text-foreground">React frontends</strong> that scale to 100,000+ users
            — with <strong className="text-foreground">LLM integration</strong> that ships to production.
            Clean code. Measurable results. Remote-ready.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/projects"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition duration-300 transform hover:scale-105"
            >
              See Case Studies
            </Link>
            <a
              href="/contact#book-call"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition duration-300"
            >
              Book a Free Call
            </a>
          </div>

          {/* Trust stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              "100k+ Users Served",
              "40% Latency Reduction",
              "3+ Years Experience",
              "LLM Integration",
              "Remote-Ready",
            ].map((stat) => (
              <span
                key={stat}
                className="bg-background border border-border text-muted-foreground text-xs font-semibold px-4 py-2 rounded-full"
              >
                {stat}
              </span>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="text-center">
            <div className="inline-block text-muted-foreground text-sm">
              <p className="mb-2">Scroll to explore</p>
              <svg className="w-5 h-5 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How I Can Help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I don&apos;t just write code — I solve the engineering problems that block your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background border-2 border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition duration-300 group flex flex-col"
              >
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {service.tag}
                  </span>
                </div>
                <div className="text-primary mb-4 group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">{service.description}</p>
                <p className="text-xs text-accent font-semibold border-t border-border/50 pt-4 mt-auto">
                  {service.targetClient}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/contact#book-call"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition duration-300 inline-block"
            >
              Book a Free Discovery Call →
            </a>
          </div>
        </div>
      </section>

      {/* ─── METRICS SECTION ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5 border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Results That Speak</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers from real production systems — not side projects.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-background border border-border/50 rounded-2xl p-8 text-center hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition duration-300"
              >
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {m.value}
                </p>
                <p className="font-semibold text-foreground mb-1">{m.label}</p>
                <p className="text-xs text-muted-foreground">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS SECTION ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A focused stack — chosen for performance, scalability, and real-world reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group) => (
              <div key={group.category} className="bg-background border border-border/50 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-3 border-b border-border/50">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground transition duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF / EXPERIENCE STRIP ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-card border-t border-border/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold text-muted-foreground tracking-widest uppercase mb-10">
            Professional Experience At
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-12">
            {companies.map((c) => (
              <div key={c.name} className="text-center">
                <p className="text-xl font-bold text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.note}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to build something that scales?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s talk about your project. Free 30-minute discovery call — no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact#book-call"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition duration-300"
              >
                Book a Free Call →
              </a>
              <Link
                href="/projects"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition duration-300"
              >
                See My Work First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
