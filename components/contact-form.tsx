import Link from "next/link"
import { ArrowRight, Search, Lightbulb, MessageCircle } from "lucide-react"

export function ContactForm() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Copy */}
          <div>
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

          {/* Right side - CTA Card */}
          <div className="relative">
            {/* Card glow backdrop */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl opacity-60" />
            
            <div className="relative glass-card border border-border/60 rounded-3xl p-8 sm:p-12 card-glow text-center">
              <div className="flex items-center justify-center size-16 rounded-2xl bg-primary/10 border border-primary/20 mx-auto mb-6">
                <ArrowRight className="size-7 text-primary" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                Fill out a quick form and {"we'll"} get back to you within 24 hours with the next steps.
              </p>
              
              <Link 
                href="/start-project" 
                className="relative z-10 pointer-events-auto inline-flex items-center justify-center gap-2.5 h-14 px-10 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 glow-emerald rounded-xl transition-all"
              >
                Start Your Project
                <ArrowRight className="size-4" />
              </Link>
              
              <p className="text-sm text-muted-foreground mt-6">
                Or email us directly at{" "}
                <a href="mailto:haakon@napiva.com" className="text-primary hover:underline">
                  haakon@napiva.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
