export interface Project {
  name: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  problem: string;
  solution: string;
  result?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: "Seeable Hoarding",
    slug: "seeable-hoarding",
    description:
      "A digital platform designed to simplify billboard discovery, availability, and advertising management.",
    category: "Marketplace / Advertising Technology",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    problem:
      "Outdoor advertising space was booked through fragmented, manual, offline processes with no central way to check availability or manage bookings.",
    solution:
      "A unified marketplace where hoarding inventory, availability, and bookings are managed digitally, giving advertisers and vendors a shared source of truth.",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
