"use client"

import Link from "next/link"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-background via-background to-white px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <p className="text-sm font-medium text-primary font-semibold">Available for projects</p>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            <span className="bg-gradient-to-r from-primary via-orange-500 to-accent bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            I craft beautiful, performant web applications. Specializing in React, Node.js, and modern web technologies
            to build experiences that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/projects"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition duration-300"
            >
              Get In Touch
            </Link>
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

      {/* Skills Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Technologies and tools I&apos;ve mastered to deliver exceptional results
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "Django Rest",
              "TypeScript",
              "Postgres",
              "JavaScript",
              "React",
              "AWS",
              "Docker",
              "Next.js",
              "Node",
              "FastAPI",
              "MongoDB",
              "Python",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-background border-2 border-muted rounded-lg p-6 text-center hover:border-primary hover:shadow-lg hover:shadow-primary/15 transition duration-300 group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary transition">{skill}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}
