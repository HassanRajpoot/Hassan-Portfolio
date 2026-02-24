import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/30 mt-24 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand + About */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hassan Shahzad
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Full-Stack Python &amp; AI Engineer specializing in high-performance APIs and LLM integration.
              Building systems that scale to 100,000+ users for SaaS startups worldwide.
            </p>
            {/* Location & Availability */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Pakistan · UTC+5
              </span>
              <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                Open to Remote Work
              </span>
            </div>
            {/* Payment Methods */}
            <p className="text-xs text-muted-foreground">
              Payments via{" "}
              <span className="font-semibold text-foreground">Wise</span> ·{" "}
              <span className="font-semibold text-foreground">Payoneer</span> ·{" "}
              <span className="font-semibold text-foreground">PayPal</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition duration-200 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition duration-200 font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition duration-200 font-medium">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition duration-200 font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition duration-200 font-medium"
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <ul className="space-y-3">
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
                  href="mailto:hassanshahzad1908@gmail.com"
                  className="text-muted-foreground hover:text-primary transition duration-200 font-medium"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="#book-call"
                  className="text-accent hover:text-primary transition duration-200 font-semibold"
                >
                  Book a Call →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>&copy; 2025 Hassan Shahzad. All rights reserved.</p>
          <p>Available for US · UK · Canada · Australia remote work</p>
        </div>
      </div>
    </footer>
  )
}
