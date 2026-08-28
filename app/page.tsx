import { Hero } from "@/components/hero/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhatWeveDone } from "@/components/WhatWeveDone";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { Process } from "@/components/process/Process";
import { WhySeeableLabs } from "@/components/WhySeeableLabs";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { FinalCTA } from "@/components/cta/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <WhatWeveDone />
      <WhatWeBuild />
      <Process />
      <WhySeeableLabs />
      <WhoWeWorkWith />
      <FinalCTA />
    </>
  );
}
