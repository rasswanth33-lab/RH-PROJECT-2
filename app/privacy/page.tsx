import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="pt-20 pb-28 md:pt-28">
      <div className="container-lab max-w-2xl">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Privacy Policy</h1>
          <div className="prose prose-neutral mt-8 space-y-5 text-ink-muted">
            <p>
              Seeable Labs collects information you submit through our project enquiry form —
              including your name, company, email, phone, and project details — solely to respond
              to your enquiry and evaluate potential work.
            </p>
            <p>
              We do not sell or share your information with third parties for marketing purposes.
              Data is retained only as long as needed to service your enquiry or an active
              engagement.
            </p>
            <p>
              For questions about this policy or to request removal of your data, contact us
              through the project enquiry form.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
