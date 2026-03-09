export const categoryLabels = {
  branding: "Logo y branding",
  "campaign-designs": "Campanas",
  "ilustracion-digital": "Ilustracion digital",
  "ilustracion-grafica": "Ilustracion grafica",
} as const;

export type ProjectCategory = keyof typeof categoryLabels;

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  year: string;
  campaign?: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  mupiImage?: string;
  gallery?: Array<{
    src: string;
    type?: "image" | "pdf";
    objectPosition?: string;
  }>;
};

export const projects: Project[] = [
  {
    id: "kaoka",
    category: "branding",
    title: "Kaoka - Identidad visual",
    description:
      "Branding integral para marca de chocolate artesanal con sistema grafico, piezas impresas y mockups.",
    year: "2024",
    technologies: ["Illustrator", "Photoshop"],
    image: "/proyectos/kaoka/poster-kaoka.png",
    liveUrl: "https://example.com/kaoka",
  },
  {
    id: "branding-cafe",
    category: "branding",
    title: "Branding para cafeteria local",
    description:
      "Identidad visual completa con piezas para redes sociales, cartel y carta de productos.",
    year: "2025",
    technologies: ["Figma", "Illustrator", "Photoshop"],
    image: "https://via.placeholder.com/960x540?text=Branding+Cafe",
    liveUrl: "https://example.com/branding-cafe",
  },
  {
    id: "campaign-lo-que-nos-mueve",
    category: "campaign-designs",
    title: "Lo que nos mueve",
    campaign: "Lo que nos mueve",
    description:
      "Campana visual enfocada en comunidad, intereses compartidos y accion social.",
    year: "2025",
    technologies: ["Illustrator", "Photoshop"],
    image: "/proyectos/campana/mupi.jpg",
    mupiImage: "/proyectos/campana/mupi.jpg",
    gallery: [
      { src: "/proyectos/campana/captura-1-2.png", type: "image", objectPosition: "center top" },
      { src: "/proyectos/campana/lo-que-nos-mueve-portfolio.pdf#view=FitH", type: "pdf" },
    ],
    liveUrl: "https://example.com/lo-que-nos-mueve",
  },
  {
    id: "web-evento-cultural",
    category: "ilustracion-digital",
    title: "Web de evento cultural",
    description:
      "Landing page responsive con agenda, ponentes y formulario de inscripcion.",
    year: "2025",
    technologies: ["Vue", "TypeScript", "Tailwind"],
    image: "https://via.placeholder.com/960x540?text=Web+Evento+Cultural",
    liveUrl: "https://example.com/evento-cultural",
  },
  {
    id: "app-recetas",
    category: "ilustracion-grafica",
    title: "App de recetas interactivas",
    description:
      "Proyecto academico con filtros por ingredientes y guardado de favoritos.",
    year: "2024",
    technologies: ["Vue", "Pinia", "CSS Grid"],
    image: "https://via.placeholder.com/960x540?text=App+Recetas",
    liveUrl: "https://example.com/app-recetas",
  },
];
