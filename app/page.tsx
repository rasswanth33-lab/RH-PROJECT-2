import { Hero } from "@/components/hero/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { SystemSection } from "@/components/SystemSection";
import { Process } from "@/components/process/Process";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { WhySeeableLabs } from "@/components/WhySeeableLabs";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { TechnologySection } from "@/components/TechnologySection";
import { FinalCTA } from "@/components/cta/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <WhatWeBuild />
      <SystemSection />
      <Process />
      <ProjectsGrid />
      <WhySeeableLabs />
      <WhoWeWorkWith />
      <TechnologySection />
      <FinalCTA />
    </>
  );
}
