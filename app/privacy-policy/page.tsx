import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Napiva",
  description: "Privacy Policy for Napiva - AI Automation Agency",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-secondary/20">
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

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8 py-16 lg:py-24">
        <div className="glass-card border border-border/50 rounded-3xl p-8 sm:p-12 lg:p-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Napiva collects information submitted through the inquiry form, such as name, email, company, project details, and timeline.
            </p>
            
            <p>
              This information is used only to respond to inquiries and provide services.
            </p>
            
            <p>
              Napiva does not sell personal information.
            </p>
            
            <p>
              Data may be stored securely using third-party services such as Supabase and Vercel.
            </p>
            
            <p>
              For questions, contact{" "}
              <a href="mailto:haakon@napiva.com" className="text-primary hover:underline">
                haakon@napiva.com
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-16" />
    </main>
  )
}
