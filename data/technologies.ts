export interface TechGroup {
  category: string;
  items: string[];
}

export const technologies: TechGroup[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "APIs", "Database systems"] },
  { category: "AI", items: ["LLMs", "AI Agents", "Automation", "AI APIs"] },
  { category: "Infrastructure", items: ["Cloud", "Authentication", "Payments", "Analytics"] },
];

export const processSteps = [
  { index: "01", title: "Discover", description: "Understand the business, users, goals, and problems." },
  { index: "02", title: "Design", description: "Create the product structure, user experience, and visual system." },
  { index: "03", title: "Build", description: "Develop the website, application, SaaS platform, or AI system." },
  { index: "04", title: "Launch", description: "Deploy, test, optimize, and make the product production-ready." },
  { index: "05", title: "Scale", description: "Continue improving the product as the business grows." },
];

export const whoWeWorkWith = [
  { title: "Startups", description: "Turn ideas into MVPs and launch-ready products." },
  { title: "Small Businesses", description: "Replace manual workflows with modern software." },
  { title: "Growing Companies", description: "Build internal systems and scalable applications." },
  { title: "Enterprises", description: "Develop custom digital platforms and automation." },
];

export const whySeeableLabs = [
  { title: "Business First", description: "We understand the problem before writing the software." },
  { title: "Product Thinking", description: "We build products, not disconnected pages." },
  { title: "Modern Engineering", description: "We use current technologies and scalable architecture." },
  { title: "Built to Evolve", description: "Products are designed to grow with the business." },
];

export const problems = [
  "Outdated websites",
  "Manual business processes",
  "Disconnected software",
  "Poor user experiences",
  "Repetitive work",
  "No scalable digital infrastructure",
];

export const systemFlow = ["Website", "Application", "Database", "Automation", "AI", "Analytics"];
export const heroFlow = ["Website", "SaaS", "AI", "Automation", "Analytics"];

export const projectTypes = [
  "Website",
  "SaaS",
  "Web Application",
  "AI Product",
  "Automation",
  "E-commerce",
  "Other",
];
