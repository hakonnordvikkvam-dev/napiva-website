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
            <p><strong className="text-foreground">Last updated:</strong> 1 November 2026</p>
            <h2 className="text-xl font-semibold text-foreground">Who is responsible?</h2>
            <p>Napiva operates this website and handles inquiries sent through it. For questions about your personal information or to exercise your rights, email <a href="mailto:haakon@napiva.com" className="text-primary hover:underline">haakon@napiva.com</a>.</p>
            <h2 className="text-xl font-semibold text-foreground">What information do we collect?</h2>
            <p>When you send an inquiry, the form collects your name, email address, company, project description and, if provided, your preferred timeline and additional information. Necessary technical information may also be processed by our hosting provider to provide and secure the website.</p>
            <p>Please do not include patient information, medical details, passwords or other sensitive personal information in the free-text fields.</p>
            <h2 className="text-xl font-semibold text-foreground">Why and on what basis do we use the information?</h2>
            <p>We use inquiry details to respond to your request, understand whether we can provide the requested services and communicate about potential work. Where you ask us to take steps towards a contract, the legal basis may be GDPR Article 6(1)(b). For ordinary business inquiries and managing correspondence, the basis is our legitimate interest in responding and operating our business (Article 6(1)(f)). We do not use submitted inquiries to send unsolicited marketing.</p>
            <h2 className="text-xl font-semibold text-foreground">Who receives the information?</h2>
            <p>Form submissions are stored using Supabase. Vercel hosts and delivers the website. These providers may process information needed to operate their services. Other parties receive inquiry information only where necessary for our operations or where required by law.</p>
            <p>Processing or access outside the European Economic Area may occur depending on the providers and services used. Contact us for information about applicable transfer arrangements.</p>
            <h2 className="text-xl font-semibold text-foreground">How long is information kept?</h2>
            <p>We review inquiry records at least monthly and delete them when no longer necessary to handle the inquiry or retain relevant business correspondence. Records that must be retained under applicable law may be kept longer. This review currently involves manual deletion, not automatic expiry.</p>
            <h2 className="text-xl font-semibold text-foreground">Your rights</h2>
            <p>Subject to the conditions in data protection law, you may request access, correction or deletion of personal data, restriction of or objection to processing, and data portability where applicable. You may also complain to the Norwegian Data Protection Authority (Datatilsynet). Contact us at <a href="mailto:haakon@napiva.com" className="text-primary hover:underline">haakon@napiva.com</a>.</p>
            <h2 className="text-xl font-semibold text-foreground">Website technology</h2>
            <p>We use technical measures necessary to provide and protect the website. Non-essential analytics have been disabled while we review tracking and consent requirements. If this changes, we will update this notice and implement any consent mechanism required by law.</p>
            <h2 className="text-xl font-semibold text-foreground">Is submitting required?</h2>
            <p>You do not have to use the inquiry form. If you choose to contact us, the required fields are needed for us to respond meaningfully. You can email us instead. Inquiry submissions are not subject to automated decision-making that produces legal or similarly significant effects.</p>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-16" />
    </main>
  )
}
