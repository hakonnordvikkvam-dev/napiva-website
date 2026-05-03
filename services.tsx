"use client"

import { Bot, Workflow, Wrench, MessageSquare, Server, Plug, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Automate repetitive tasks, approvals, reporting, and daily operations.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Workflow,
    title: "Workflow Optimization",
    description: "Identify bottlenecks and redesign processes so your team can move faster.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Wrench,
    title: "Custom Internal Tools",
    description: "Build dashboards, portals, and tools tailored to your exact business needs.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Assistants",
    description: "Create AI assistants that handle questions, support, onboarding, and internal requests.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Design reliable systems that connect your data, tools, and workflows.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Connect your apps and platforms into one streamlined automation system.",
    accent: "from-primary/15 to-primary/5",
  },
]

export function Services() {
  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, oklch(0.72 0.19 160 / 0.03) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">Services</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance tracking-tight">
            What we do
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
            End-to-end AI solutions designed to simplify operations and unlock growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-7 rounded-2xl glass-card border border-border/50 hover:border-primary/40 transition-all duration-500 card-glow"
            >
              {/* Subtle inner glow on hover */}
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
              />
              
              <div className="relative z-10">
                {/* Icon container with glow */}
                <div className="relative inline-flex items-center justify-center size-14 rounded-xl bg-secondary/80 border border-border/50 mb-6 group-hover:border-primary/30 transition-colors duration-300">
                  <service.icon className="size-6 text-primary" />
                  <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                </div>
                
                {/* Title with arrow */}
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-300" />
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
