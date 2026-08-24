import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <section className="pt-20 pb-28 md:pt-28">
      <div className="container-lab max-w-2xl">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Terms of Service</h1>
          <div className="prose prose-neutral mt-8 space-y-5 text-ink-muted">
            <p>
              This website is operated by Seeable Labs. By using this site, you agree to use it
              only for lawful purposes and in a way that does not infringe the rights of others.
            </p>
            <p>
              All content on this website — including text, design, and branding — is the
              property of Seeable Labs unless otherwise stated, and may not be reproduced without
              permission.
            </p>
            <p>
              Project engagements are governed by a separate written agreement between Seeable
              Labs and the client, which takes precedence over these general terms.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
