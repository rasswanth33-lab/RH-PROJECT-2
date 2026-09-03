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
  demoUrl?: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    name: "Fleet Management & Co",
    slug: "fleet-management-real-estate-1",
    description: "A refined digital experience for a premier real estate brand and its portfolio of properties.",
    category: "Real Estate / Brand Website",
    technologies: ["HTML", "Tailwind CSS", "Responsive Design"],
    problem: "A premium property brand needed a polished online presence that could make its spaces and point of view feel tangible.",
    solution: "A visual-first real estate experience with editorial layouts, property imagery, and clear paths into the portfolio.",
    featured: true,
    demoUrl: "/work-pages/premier-real-estate-1.html",
    thumbnail: "/work-thumbnails/premier-real-estate-1.png",
  },
  {
    name: "Fleet Management & Co",
    slug: "fleet-management-real-estate-2",
    description: "A second editorial direction for a high-end real estate and property portfolio experience.",
    category: "Real Estate / Brand Website",
    technologies: ["HTML", "Tailwind CSS", "Responsive Design"],
    problem: "The property brand needed a flexible presentation for its homes, team, and distinctive coastal perspective.",
    solution: "A carefully paced landing page that balances large-format imagery with concise storytelling and portfolio discovery.",
    featured: true,
    demoUrl: "/work-pages/premier-real-estate-2.html",
    thumbnail: "/work-thumbnails/premier-real-estate-2.png",
  },
  {
    name: "CRAV",
    slug: "crav-artisan-burgers",
    description: "A bold, expressive website for an artisan smashed burger concept with a taste for personality.",
    category: "Food & Beverage / Brand Website",
    technologies: ["HTML", "Tailwind CSS", "Responsive Design"],
    problem: "A burger brand needed a digital home with the same energy, appetite, and confidence as its food.",
    solution: "A vivid restaurant experience built around strong typography, product photography, ingredients, locations, and ordering prompts.",
    featured: true,
    demoUrl: "/work-pages/crav-burgers.html",
    thumbnail: "/work-thumbnails/crav-burgers.png",
  },
  {
    name: "Aetheria Wellness",
    slug: "aetheria-wellness",
    description: "A calm, editorial wellness experience for movement, meditation, and restorative rituals.",
    category: "Wellness / Brand Website",
    technologies: ["HTML", "Tailwind CSS", "Responsive Design"],
    problem: "A wellness studio needed a digital space that felt as grounded and considered as the experience it offers.",
    solution: "A warm, image-led landing page with an inviting rhythm for programs, practitioners, testimonials, and booking.",
    featured: true,
    demoUrl: "/work-pages/aetheria-wellness.html",
    thumbnail: "/work-thumbnails/aetheria-wellness.png",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
