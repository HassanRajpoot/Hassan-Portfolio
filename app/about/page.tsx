export default function About() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Profile Header */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <img
              src="/professional-developer-avatar.png"
              alt="Hassan Shahzad — Full-Stack Python & AI Engineer"
              className="w-32 h-32 rounded-2xl object-cover border-4 border-primary/20 shadow-lg flex-shrink-0"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Hassan Shahzad</h1>
              <p className="text-xl text-primary font-semibold mb-3">Full-Stack Python &amp; AI Engineer</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Pakistan · UTC+5
                </span>
                <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/20 text-accent text-sm font-medium px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                  Available for Remote Work
                </span>
                <span className="inline-flex items-center gap-1.5 bg-muted border border-border text-muted-foreground text-sm font-medium px-3 py-1 rounded-full">
                  US · UK · CA · AU clients welcome
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">About Me</h2>
          <div className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a Full-Stack Engineer specializing in <strong className="text-foreground">high-performance Python backends</strong> and{" "}
              <strong className="text-foreground">LLM/AI integration</strong> for SaaS products.
              Over the past 3+ years, I&apos;ve built and scaled systems serving <strong className="text-foreground">100,000+ active users</strong>,
              cut API latency by 40%, and shipped AI-powered features — intelligent search, recommendations,
              and support automation — into production at funded tech companies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My engineering foundation covers the full stack: Python APIs (FastAPI, Django REST), React frontends,
              PostgreSQL and MongoDB databases, and AWS + Docker cloud deployments with CI/CD pipelines.
              I don&apos;t just write code — I deliver <strong className="text-foreground">measurable business outcomes</strong>: faster systems,
              lower infrastructure costs, and features that users actually engage with.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I work remotely with international clients across the US, UK, and beyond.
              I communicate clearly in English, overlap with US/UK business hours, and handle payments
              via Wise, Payoneer, or PayPal with standard international contracts.
            </p>
          </div>
        </section>

        {/* What I Bring */}
        <section className="mb-12">
          <div className="bg-card border border-border/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">What I Bring to Every Engagement</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "⚡", title: "Performance-first mindset", desc: "Every system I build is profiled, optimized, and ready for scale before it ships." },
                { icon: "🤖", title: "Real-world AI integration", desc: "I've shipped LLM features into live production systems — not just side projects." },
                { icon: "📊", title: "Results you can measure", desc: "I track and report the business impact of my work: latency, uptime, conversion, cost." },
                { icon: "🌍", title: "Remote-native work ethic", desc: "Clear async communication, overlap with your timezone, and no hand-holding needed." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Availability & Payments Info Card */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
            <h3 className="font-bold text-foreground mb-4">Working With Me (Remote)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-foreground mb-1">Timezone</p>
                <p className="text-muted-foreground">Pakistan Standard Time (UTC+5)<br />US/UK overlap hours available</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Availability</p>
                <p className="text-muted-foreground">Mon – Fri, flexible hours<br />Response within 24 hours</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Payments</p>
                <p className="text-muted-foreground">Wise · Payoneer · PayPal<br />USD invoices · Standard contracts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-accent">Professional Experience</h2>
          <div className="space-y-10">
            {[
              {
                year: "May 2025 – Present",
                title: "Software Engineer",
                company: "Xeven Solutions",
                type: "Onsite",
                description:
                  "Optimized backend APIs in Python, reducing latency by 40% under high concurrency. Built reusable Python backend packages, cutting development time by 30%. Integrated LLM features for intelligent search, recommendations, and support automation. Ensured 99.9% uptime through secure deployments, monitoring, and proactive incident resolution.",
                metrics: ["40% latency reduction", "30% faster dev cycles", "99.9% uptime"],
              },
              {
                year: "Sep 2023 – Apr 2025",
                title: "Software Engineer",
                company: "NETSOL Technologies",
                type: "Hybrid · Publicly listed · 1,000+ employees · Global clients",
                description:
                  "Designed and maintained Python + React applications with scalable architectures. Built and optimized REST APIs handling 100k+ daily requests, improving response times by 35%. Implemented tags-based analytics for real-time customer behavior tracking. Reduced DB load by 25% with session-based storage. Managed AWS (EC2, ECR) + Docker deployments and mentored junior developers.",
                metrics: ["100k+ daily API requests", "35% faster responses", "25% DB load reduction"],
              },
              {
                year: "Oct 2022 – Sep 2023",
                title: "Associate Software Developer",
                company: "HASSOL",
                type: "Hybrid",
                description:
                  "Delivered full-stack solutions for e-commerce platforms and consumer apps. Built responsive React UIs and integrated REST APIs for seamless frontend-backend communication. Collaborated directly with clients to gather requirements and ship tailored Python + Node.js + React solutions.",
                metrics: ["E-commerce platforms shipped", "Full-stack delivery", "Client-facing role"],
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="border-l-4 border-accent pl-8 pb-4 hover:border-primary transition duration-300"
              >
                <p className="text-accent font-bold text-sm tracking-wide uppercase mb-1">{exp.year}</p>
                <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                <p className="text-primary font-semibold mt-1">{exp.company}</p>
                <p className="text-xs text-muted-foreground mt-0.5 mb-3">{exp.type}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.metrics.map((m) => (
                    <span
                      key={m}
                      className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-accent">Education</h2>
          <div className="bg-card border border-border rounded-xl p-8 hover:border-accent transition duration-300">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Bachelor of Science in Computer Science</h3>
            <p className="text-primary font-semibold">COMSATS University Islamabad, 2023</p>
            <p className="text-sm text-muted-foreground mt-2">One of Pakistan&apos;s top-ranked CS programs</p>
          </div>
        </section>

      </div>
    </main>
  )
}
