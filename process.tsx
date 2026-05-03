import { Search, PenTool, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analyze",
    description: "We map your workflows, identify repetitive tasks, and find the highest-impact automation opportunities.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Build",
    description: "We design the system, build the automation, and connect it to your existing tools.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Improve",
    description: "We deploy, test, refine, and improve the system so it performs reliably.",
  },
]

export function Process() {
  return (
    <section id="process" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-1/2 left-1/4 w-[600px] h-[600px] rounded-full animate-mesh"
          style={{
            background: 'radial-gradient(circle, oklch(0.72 0.19 160 / 0.06) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">Process</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance tracking-tight">
            How we work
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
            A simple process from idea to launch.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-border via-primary/30 to-transparent" />
                </div>
              )}
              
              <div className="relative p-8 lg:p-10 rounded-2xl glass-card border border-border/50 hover:border-primary/40 transition-all duration-500 card-glow h-full">
                {/* Step number - floating */}
                <div className="absolute -top-4 -right-4 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-md group-hover:bg-primary/50 transition-colors duration-300" />
                    <span className="relative flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground text-sm font-bold border border-primary/50">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center size-14 rounded-xl bg-secondary/80 border border-border/50 mb-6 group-hover:border-primary/30 transition-colors duration-300">
                  <step.icon className="size-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
