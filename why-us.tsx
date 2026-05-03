import { Zap, Target, TrendingUp, Layers } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Custom-built solutions",
    description: "Every system is tailored to your workflows, tools, and goals.",
  },
  {
    icon: Zap,
    title: "Fast implementation",
    description: "We move quickly from discovery to deployment without unnecessary complexity.",
  },
  {
    icon: TrendingUp,
    title: "Real business outcomes",
    description: "We focus on saving time, reducing manual work, and improving operations.",
  },
  {
    icon: Layers,
    title: "Simple and scalable",
    description: "Clean systems that can grow with your business.",
  },
]

export function WhyUs() {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-0 right-1/4 w-[700px] h-[400px] rounded-full animate-smoke"
          style={{
            background: 'radial-gradient(ellipse at center, oklch(0.72 0.19 160 / 0.05) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">Why Napiva</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Why work with Napiva
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
            We build practical AI systems that are simple to use and built around your business.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative text-center p-7 rounded-2xl glass-card border border-border/50 hover:border-primary/40 transition-all duration-500 card-glow"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon with glow effect */}
                <div className="relative inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 group-hover:border-primary/40 transition-colors duration-300">
                  <value.icon className="size-7 text-primary" />
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
