import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/30 mt-24 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hassan Shahzad Portfolio
            </h3>
            <p className="text-muted-foreground">Full-stack Software Engineer skilled in Python, React, PostgreSQL/MongoDB, and AWS/Docker, with experience scaling apps for 100,000+ users. Strong in API development, microservices, cloud deployments, and integrating LLM-powered features.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition duration-200 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition duration-200 font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition duration-200 font-medium"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition duration-200 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/HassanRajpoot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition duration-200 font-medium"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hassan-s-1998261b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition duration-200 font-medium"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hassanshahzad1908@gmail.com"
                  className="text-muted-foreground hover:text-primary transition duration-200 font-medium"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/30 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Hassan Shahzad Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
