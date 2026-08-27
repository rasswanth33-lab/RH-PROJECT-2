import { Hero } from "@/components/hero/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhatWeveDone } from "@/components/WhatWeveDone";
import { ContactSection } from "@/components/cta/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <WhatWeveDone />
      <ContactSection />
    </>
  );
}
