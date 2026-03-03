export type Project = {
  id: string;
  category: "branding" | "campaign-designs" | "logotipos" | "social-media";
  title: string;
  description: string;
  year: string;
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
    description:
      "Campana visual enfocada en comunidad, intereses compartidos y accion social.",
    year: "2025",
    technologies: ["Illustrator", "Photoshop"],
    image: "/proyectos/campana/lo-que-nos-mueve-portfolio.pdf",
    mupiImage: "/proyectos/campana/mupi.jpg",
    gallery: [
      { src: "/proyectos/campana/captura-1-2.png", type: "image", objectPosition: "center top" },
    ],
    liveUrl: "https://example.com/lo-que-nos-mueve",
  },
  {
    id: "web-evento-cultural",
    category: "social-media",
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
    category: "logotipos",
    title: "App de recetas interactivas",
    description:
      "Proyecto academico con filtros por ingredientes y guardado de favoritos.",
    year: "2024",
    technologies: ["Vue", "Pinia", "CSS Grid"],
    image: "https://via.placeholder.com/960x540?text=App+Recetas",
    liveUrl: "https://example.com/app-recetas",
  },
];
