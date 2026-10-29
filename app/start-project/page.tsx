"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { createClient, type SupabaseClient } from "@supabase/supabase-js"

let inquiryClient: SupabaseClient | null = null

// Create Supabase client only if env vars are available
function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  
  if (!url || !key) {
    return null
  }
  
  inquiryClient ??= createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  })
  return inquiryClient
}

export default function StartProjectPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [serviceError, setServiceError] = useState(false)
  
  // Form state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [projectHelp, setProjectHelp] = useState("")
  const [timeline, setTimeline] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [website, setWebsite] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setError(null)
    setServiceError(false)

    // Validate required fields
    if (!name.trim() || !email.trim() || !projectHelp.trim()) {
      setError("Please fill in all required fields.")
      setIsSubmitting(false)
      return
    }

    if (website || name.length > 120 || email.length > 254 || company.length > 200 ||
        projectHelp.length > 5000 || timeline.length > 200 || additionalInfo.length > 5000) {
      setError("Please check the form fields and try again.")
      setIsSubmitting(false)
      return
    }

    try {
      const supabase = getSupabaseClient()
      if (!supabase) {
        setServiceError(true)
        setError("We cannot accept inquiries right now. Please email haakon@napiva.com.")
        return
      }
      const { error: insertError } = await supabase
        .from("project_inquiries")
        .insert({
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || null,
          project_help: projectHelp.trim(),
          timeline: timeline.trim() || null,
          additional_info: additionalInfo.trim() || null,
          source: "napiva-website"
        })

      if (insertError) {
        throw insertError
      }

      // Success - clear form and show success message
      setIsSuccess(true)
      setName("")
      setEmail("")
      setCompany("")
      setProjectHelp("")
      setTimeline("")
      setAdditionalInfo("")
    } catch {
      setServiceError(true)
      setError("Something went wrong. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

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

          {/* Success Message */}
          {isSuccess ? (
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl opacity-60" />
              <div className="relative bg-secondary/30 border border-primary/40 rounded-3xl p-8 sm:p-10 backdrop-blur-sm text-center">
                <div className="size-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-6">
                  <svg className="size-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Inquiry sent!</h2>
                <p className="text-muted-foreground mb-6">
                  {"We've"} received your project inquiry. {"We'll"} review it and reply by email.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-primary hover:underline font-medium"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Form Card */
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl opacity-60" />
              <div className="relative bg-secondary/30 border border-border/60 rounded-3xl p-8 sm:p-10 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error message */}
                  {error && (
                    <div role="alert" className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                      <p>{error}</p>
                      {serviceError && (
                        <p className="mt-3">
                          If the form is unavailable, email us at{" "}
                          <a
                            href="mailto:haakon@napiva.com?subject=Napiva%20project%20inquiry"
                            className="font-medium text-primary underline underline-offset-2"
                          >
                            haakon@napiva.com
                          </a>
                          . Please do not include patient or medical information.
                        </p>
                      )}
                    </div>
                  )}

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
                        maxLength={120}
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        maxLength={254}
                        autoComplete="email"
                        placeholder="you@company.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 px-4 bg-secondary/60 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      maxLength={200}
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
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
                      maxLength={5000}
                      value={projectHelp}
                      onChange={(e) => setProjectHelp(e.target.value)}
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
                      placeholder="e.g. ASAP, next quarter, 3 months"
                      maxLength={200}
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
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
                      maxLength={5000}
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      className="w-full px-4 py-3 bg-secondary/60 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    />
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Leave this field empty</label>
                    <input id="website" name="website" type="text" tabIndex={-1}
                      autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                  </div>

                  {/* Privacy notice */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Read how we handle your inquiry in our{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>.
                    Please do not include patient or medical information in your inquiry.
                  </p>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors glow-emerald flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Inquiry
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Footer note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            You can also reach us at{" "}
            <a href="mailto:haakon@napiva.com" className="text-primary hover:underline">
              haakon@napiva.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
