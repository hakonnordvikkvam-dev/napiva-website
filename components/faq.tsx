"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with service businesses, agencies, startups, and growing teams that want to automate repetitive work and improve operations.",
  },
  {
    question: "What can you automate?",
    answer: "We can automate lead handling, onboarding, reporting, internal workflows, customer support, data entry, follow-ups, and tool integrations.",
  },
  {
    question: "How long does a project usually take?",
    answer: "Most projects take between 1–4 weeks depending on complexity, integrations, and the scope of the system.",
  },
  {
    question: "Do you build custom AI solutions?",
    answer: "Yes. Every system is designed around your workflow, tools, data, and business goals.",
  },
  {
    question: "Can you improve our current systems?",
    answer: "Yes. We can audit your existing setup, identify bottlenecks, and improve or rebuild systems so they work more reliably.",
  },
  {
    question: "What happens after I submit the form?",
    answer: "We review your inquiry, identify the best automation opportunities, and get back to you with the next steps.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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

        {/* FAQ Items */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card border rounded-2xl px-6 sm:px-8 transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-primary/40' : 'border-border/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left"
              >
                <span className="text-base sm:text-lg font-medium text-foreground">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`size-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
