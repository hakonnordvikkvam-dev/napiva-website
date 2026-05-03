"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Cpu, Workflow } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep background base */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Animated mesh gradients - green smoke effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary large gradient orb */}
        <div 
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full animate-mesh"
          style={{
            background: 'radial-gradient(circle, oklch(0.72 0.19 160 / 0.12) 0%, oklch(0.72 0.19 160 / 0.04) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Secondary gradient orb - right side */}
        <div 
          className="absolute -top-1/4 right-0 w-[700px] h-[700px] rounded-full animate-mesh-delayed"
          style={{
            background: 'radial-gradient(circle, oklch(0.72 0.19 160 / 0.08) 0%, oklch(0.65 0.15 165 / 0.03) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* Bottom accent smoke */}
        <div 
          className="absolute bottom-0 left-1/3 w-[900px] h-[500px] rounded-full animate-smoke"
          style={{
            background: 'radial-gradient(ellipse at center, oklch(0.72 0.19 160 / 0.10) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-primary/60 rounded-full animate-particle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-particle" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-particle" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/4 right-1/3 w-0.5 h-0.5 bg-primary/70 rounded-full animate-particle" style={{ animationDelay: '9s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-primary/30 rounded-full animate-particle" style={{ animationDelay: '12s' }} />
        
        {/* Light trails */}
        <div 
          className="absolute top-1/3 left-0 w-[300px] h-[1px] animate-trail"
          style={{
            background: 'linear-gradient(90deg, transparent, oklch(0.72 0.19 160 / 0.4), transparent)',
            animationDelay: '0s',
          }}
        />
        <div 
          className="absolute top-2/3 left-0 w-[200px] h-[1px] animate-trail"
          style={{
            background: 'linear-gradient(90deg, transparent, oklch(0.72 0.19 160 / 0.3), transparent)',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-secondary/60 border border-border/80 backdrop-blur-sm mb-10">
          <div className="relative size-2">
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
            <div className="relative size-2 rounded-full bg-primary" />
          </div>
          <span className="text-sm font-medium text-foreground/80 tracking-wide">AI Automation Agency</span>
        </div>

        {/* Headline - Premium wide typography */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 leading-[0.95]">
          <span className="text-foreground">High-end systems.</span>
          <br />
          <span className="text-gradient">Fully automated.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground mb-12 text-pretty leading-relaxed">
          We design, build, and connect full-stack systems, AI automations, and cinematic websites — production-grade work that runs itself.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button asChild size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 glow-emerald rounded-xl">
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center gap-2.5 cursor-pointer">
              Start a Project
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-border/80 hover:bg-secondary/80 hover:border-primary/30 rounded-xl transition-all duration-300">
            <Link href="#process">See How We Work</Link>
          </Button>
        </div>

        {/* Credibility points */}
        <div className="pt-16 border-t border-border/40">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 border border-primary/20">
                <Zap className="size-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground/70">Fast implementation</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 border border-primary/20">
                <Cpu className="size-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground/70">Custom AI systems</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 border border-primary/20">
                <Workflow className="size-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground/70">Built around your workflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
