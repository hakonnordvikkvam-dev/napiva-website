"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes, from startups to enterprise companies. Our clients typically have operational workflows that involve repetitive tasks, data processing, or customer interactions that can benefit from AI automation. We've helped e-commerce brands, SaaS companies, agencies, and professional services firms.",
  },
  {
    question: "What can you automate?",
    answer: "Almost any repetitive, rule-based process can be automated. Common examples include data entry and processing, customer support responses, lead qualification, document generation, email workflows, reporting, inventory management, and internal operations. If you're doing something manually more than a few times a week, there's likely a way to automate it.",
  },
  {
    question: "How long does a project usually take?",
    answer: "Project timelines vary based on complexity. Simple automations can be built and deployed in 2-4 weeks. More comprehensive systems with multiple integrations typically take 6-12 weeks. We'll provide a detailed timeline during our discovery process based on your specific needs.",
  },
  {
    question: "Do you build custom AI solutions?",
    answer: "Yes, we specialize in custom AI solutions. This includes custom chatbots trained on your data, AI assistants for specific workflows, intelligent document processing, predictive analytics, and more. We use the latest AI models and techniques to build solutions that are tailored to your exact requirements.",
  },
  {
    question: "Can you improve our current systems?",
    answer: "Absolutely. We often work with businesses that have existing tools and workflows that need optimization. We can audit your current systems, identify inefficiencies, and implement improvements — whether that means adding AI capabilities, streamlining integrations, or rebuilding components for better performance.",
  },
  {
    question: "What happens after I submit the form?",
    answer: "Once you submit your inquiry, we'll review it within 24 hours and reach out to schedule a discovery call. During this call, we'll discuss your needs in detail, answer any questions, and determine if we're a good fit for your project. If we move forward, you'll receive a detailed proposal with scope, timeline, and next steps.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section-spacing relative overflow-hidden">
      {/* Subtle ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.72 0.19 160 / 0.04) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">FAQ</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card border border-border/50 rounded-2xl px-6 sm:px-8 data-[state=open]:border-primary/40 transition-all duration-300 card-glow overflow-hidden"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-6 text-base sm:text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
