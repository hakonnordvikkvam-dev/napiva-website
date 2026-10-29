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
              NAPIVA KVAM (organisation number 938 698 465) is the data controller for information submitted through this website. We collect information provided through the inquiry form, including name, email, company, project details, timeline, and any additional information you choose to provide.
            </p>
            
            <p>
              This information is used to respond to inquiries and provide services. We review inquiries at least once per month and manually delete those no longer needed for the inquiry or necessary follow-up, unless we are required by law to retain them.
            </p>
            
            <p>
              Our legal basis for responding to business inquiries and following up on potential projects is our legitimate interest in handling requests sent to us (GDPR Article 6(1)(f)). We do not use inquiry information for marketing.
            </p>

            <p>
              Napiva does not sell personal information.
            </p>

            <p>
              You may request access to, correction of, or deletion of your personal data, as well as restriction of processing or object to processing where applicable. To exercise your rights, contact us using the email address below. You may also lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet).
            </p>
            
            <p>
              We use Supabase to store inquiries submitted through the website in its Ireland (EU) region and Netlify to host the website. These providers process inquiry data or technical request information, such as IP addresses, to deliver and secure their services. If you contact us by email, your message is also handled by the email providers involved in delivering and receiving it.
            </p>

            <p>
              Our providers operate internationally, including in the United States and Singapore. An EU database region does not exclude processing elsewhere for support or service operations. Supabase and Netlify publish data processing agreements describing international-transfer safeguards, including the European Commission&apos;s Standard Contractual Clauses. Contact us for information about the safeguards applicable to your data.
            </p>

            <p>
              This version of the website does not use advertising trackers or optional website analytics. Hosting and security providers may retain technical request logs under their own retention policies. The inquiry form does not require an account or a login cookie. Providing your name, email, and project description is necessary for us to handle the form inquiry; company, timeline, and additional information are optional. Please do not send patient or medical information.
            </p>
            
            <p>
              For questions, contact{" "}
              <a href="mailto:haakon.nordvik.kvam@gmail.com" className="text-primary hover:underline">
                haakon.nordvik.kvam@gmail.com
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
