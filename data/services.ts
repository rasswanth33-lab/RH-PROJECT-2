export interface Service {
  id: string;
  title: string;
  summary: string;
  examples: string[];
}

export const services: Service[] = [
  {
    id: "websites",
    title: "Websites",
    summary: "High-performance websites that represent businesses properly.",
    examples: [
      "Corporate websites",
      "Landing pages",
      "E-commerce",
      "Portfolio websites",
      "Conversion-focused websites",
    ],
  },
  {
    id: "saas",
    title: "SaaS",
    summary: "Custom software products built around real business workflows.",
    examples: ["CRM", "ERP", "Billing", "Inventory", "HR / PMS", "Business management systems"],
  },
  {
    id: "ai",
    title: "AI",
    summary: "AI-powered products that automate and improve business operations.",
    examples: ["AI agents", "AI dashboards", "AI assistants", "AI automation", "AI-powered analytics"],
  },
  {
    id: "web-applications",
    title: "Web Applications",
    summary: "Complex browser-based applications built for specific business requirements.",
    examples: ["Internal tools", "Customer portals", "Operational dashboards", "Custom workflow apps"],
  },
  {
    id: "automation",
    title: "Automation",
    summary: "Connect systems and remove repetitive manual work.",
    examples: ["System integrations", "Workflow automation", "Data pipelines", "Notification systems"],
  },
  {
    id: "product-development",
    title: "Product Development",
    summary: "Turn startup ideas into usable MVPs and scalable products.",
    examples: ["MVP development", "Product strategy", "Technical architecture", "Scalable roadmaps"],
  },
];
