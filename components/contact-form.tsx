"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Check, Sparkles, Search, Lightbulb, MessageCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="relative inline-flex items-center justify-center size-20 rounded-2xl bg-primary/20 border border-primary/30 mb-8">
              <Check className="size-10 text-primary" />
              <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Thank you!
            </h2>
            <p className="text-muted-foreground text-lg">
              {"We've received your inquiry and will be in touch within 24 hours."}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      {/* Rich background treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Animated ambient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full animate-mesh"
          style={{
            background: 'radial-gradient(ellipse at center, oklch(0.72 0.19 160 / 0.12) 0%, oklch(0.72 0.19 160 / 0.04) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full animate-smoke"
          style={{
            background: 'radial-gradient(circle, oklch(0.72 0.19 160 / 0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Copy */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">Get Started</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 text-balance tracking-tight leading-[1.1]">
              {"Let's build"}
              <br />
              <span className="text-gradient">something smarter</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-lg">
              Tell us what you want to automate, improve, or streamline. 
              {"We'll"} review your inquiry and get back to you with the next steps.
            </p>
            
            {/* What happens next */}
            <div className="space-y-5">
              <p className="text-sm font-semibold text-foreground tracking-wide">What happens next?</p>
              <div className="space-y-4">
                {[
                  { icon: Search, text: "We review your inquiry" },
                  { icon: Lightbulb, text: "We identify automation opportunities" },
                  { icon: MessageCircle, text: "We suggest the best next step" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 size-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                      <item.icon className="size-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground pt-1.5">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="relative">
            {/* Form glow backdrop */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl opacity-60" />
            
            <div className="relative glass-card border border-border/60 rounded-3xl p-8 sm:p-10 card-glow">
              {/* Form header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
                <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10 border border-primary/20">
                  <Sparkles className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Start your project</h3>
                  <p className="text-sm text-muted-foreground">{"We'll"} respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                      className="h-12 bg-secondary/60 border-border/60 focus:border-primary/60 rounded-xl transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="h-12 bg-secondary/60 border-border/60 focus:border-primary/60 rounded-xl transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Acme Inc."
                    required
                    className="h-12 bg-secondary/60 border-border/60 focus:border-primary/60 rounded-xl transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    What do you need help with? <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, current challenges, and what you're looking to achieve..."
                    required
                    rows={4}
                    className="bg-secondary/60 border-border/60 focus:border-primary/60 rounded-xl resize-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-medium text-foreground">
                    Timeline <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <Input
                    id="timeline"
                    name="timeline"
                    placeholder="e.g., Q2 2025, ASAP, 3 months"
                    className="h-12 bg-secondary/60 border-border/60 focus:border-primary/60 rounded-xl transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90 glow-emerald rounded-xl mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center gap-2.5">
                      Send Inquiry
                      <ArrowRight className="size-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
