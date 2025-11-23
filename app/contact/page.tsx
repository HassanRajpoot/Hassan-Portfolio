import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact | Developer Portfolio",
  description: "Get in touch with me for project inquiries and collaborations",
}

export default function Contact() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">I&apos;d love to hear from you. Send me a message anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-accent">Contact Info</h2>
            <div className="space-y-8">
              <div>
                <p className="font-semibold text-foreground mb-2">Email</p>
                <a href="mailto:hassanshahzad1908@gmail.com" className="text-primary hover:text-accent transition font-medium">
                  hassanshahzad1908@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">GitHub</p>
                <a
                  href="https://github.com/HassanRajpoot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition font-medium"
                >
                  https://github.com/HassanRajpoot
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/hassan-s-1998261b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition font-medium"
                >
                  https://www.linkedin.com/in/hassan-s-1998261b1/
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Twitter</p>
                <a
                  href="https://x.com/HassanR15324323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition font-medium"
                >
                  @HassanR15324323
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-accent">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
