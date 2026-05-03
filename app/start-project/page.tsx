import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Start Your Project | Napiva",
  description: "Tell us what you want to automate, improve, or build. We'll review your inquiry and get back to you.",
}

export default function StartProjectPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.72 0.19 160 / 0.08) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.72 0.19 160 / 0.06) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative size-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-primary font-bold text-base">N</span>
                </div>
              </div>
              <span className="text-lg font-semibold text-foreground tracking-tight">Napiva</span>
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to home
            </Link>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 sm:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Start your project
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Tell us what you want to automate, improve, or build. {"We'll"} review your inquiry and get back to you.
            </p>
          </div>

          {/* Form Card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl opacity-60" />
            <div className="relative bg-secondary/30 border border-border/60 rounded-3xl p-8 sm:p-10 backdrop-blur-sm">
              <form 
                action="https://formsubmit.co/haakon@napiva.com" 
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Napiva project inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://napiva.com/start-project?submitted=true" />

                {/* Name and Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full h-12 px-4 bg-secondary/60 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="w-full h-12 px-4 bg-secondary/60 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company <span className="text-primary">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    required
                    className="w-full h-12 px-4 bg-secondary/60 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>

                {/* Project help */}
                <div className="space-y-2">
                  <label htmlFor="project_help" className="text-sm font-medium text-foreground">
                    What do you need help with? <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="project_help"
                    name="project_help"
                    placeholder="Tell us about your project, current challenges, and what you want help with..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary/60 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  />
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-medium text-foreground">
                    Timeline <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    placeholder="e.g. ASAP, Q3 2025, 3 months"
                    className="w-full h-12 px-4 bg-secondary/60 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>

                {/* Additional info */}
                <div className="space-y-2">
                  <label htmlFor="additional_info" className="text-sm font-medium text-foreground">
                    Anything else we should know? <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="additional_info"
                    name="additional_info"
                    placeholder="Budget, specific tools you use, previous attempts, etc."
                    rows={3}
                    className="w-full px-4 py-3 bg-secondary/60 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-14 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors glow-emerald flex items-center justify-center gap-2.5"
                >
                  Send Inquiry
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            {"We'll"} respond within 24 hours. You can also reach us at{" "}
            <a href="mailto:haakon@napiva.com" className="text-primary hover:underline">
              haakon@napiva.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
