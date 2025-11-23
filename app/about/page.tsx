export default function About() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-16">About Me</h1>

        {/* Bio Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-accent">Bio</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full-Stack Software Engineer with proven experience designing and scaling applications for over 100,000 active users worldwide. Skilled in Python, React, PostgreSQL, MongoDB, and AWS/Docker deployments, with a strong track record of building high-performance APIs, cloud-native applications, and intuitive frontends that deliver measurable impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Core strengths include backend excellence in API development, microservices, database optimization, and performance tuning; frontend engineering expertise in React for responsive, state-managed UIs; and deep experience in cloud and DevOps practices such as AWS infrastructure, Docker containerization, and CI/CD pipelines for secure, scalable deployments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Additionally, I bring applied experience in integrating large language models (LLMs) and AI-driven features into production systems.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-accent">Professional Experience</h2>
          <div className="space-y-8">
            {[
              {
                year: "May 2025 – Present",
                title: "Software Engineer",
                company: "Xeven Solutions | Onsite",
                description:
                  "Optimized backend APIs in Python, reducing latency by 40% under high concurrency. Built reusable Python backend packages, cutting development time by 30%. Integrated LLM features for intelligent search, recommendations, and support. Ensured 99.9% uptime through secure deployments, monitoring, and proactive incident resolution.",
              },
              {
                year: "Sep 2023 – Apr 2025",
                title: "Software Engineer",
                company: "NETSOL Technologies | Hybrid",
                description:
                  "Designed and maintained Python + React applications with scalable architectures. Built and optimized REST APIs handling 100k+ daily requests, improving response times by 35%. Implemented tags-based analytics for real-time customer behavior tracking. Reduced DB load by 25% with session-based storage. Managed AWS (EC2, ECR) + Docker deployments and mentored junior developers.",
              },
              {
                year: "Oct 2022 – Sep 2023",
                title: "Associate Software Developer",
                company: "HASSOL | Hybrid",
                description:
                  "Delivered full-stack solutions for e-commerce platforms and user apps. Built responsive React UIs improving engagement across devices. Developed and integrated REST APIs for seamless frontend-backend communication. Optimized frontend performance and implemented robust state management. Collaborated with clients to gather requirements and build tailored Python + Node + React solutions.",
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="border-l-4 border-accent pl-8 pb-4 hover:border-primary transition duration-300"
              >
                <p className="text-accent font-bold text-sm tracking-wide">{exp.year}</p>
                <h3 className="text-2xl font-bold mt-2 text-foreground">{exp.title}</h3>
                <p className="text-primary font-semibold mt-1">{exp.company}</p>
                <p className="text-muted-foreground mt-3">{exp.description}</p>
              </div>
            ))}
          </div>

        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-accent">Education</h2>
          <div className="bg-card border border-border rounded-xl p-8 hover:border-accent transition duration-300">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Bachelor of Science in Computer Science</h3>
            <p className="text-primary font-semibold">Comsats University, 2023</p>
          </div>
        </section>
      </div>
    </main>
  )
}
