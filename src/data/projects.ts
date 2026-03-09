export const categoryLabels = {
  branding: "Logo y branding",
  "campaign-designs": "Campañas",
  "diseno-editorial": "Diseño editorial",
  carteleria: "Cartelería",
  "ilustracion-digital": "Ilustración digital",
  "ilustracion-grafica": "Ilustración gráfica",
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
    id: "envidia",
    category: "carteleria",
    title: "Envidia - Cartelería teatral 'Siete'",
    description:
      "Cartelería para la obra teatral 'Siete' con enfoque minimalista, fotográfico-collage y textura orgánica.",
    year: "2025-2026",
    technologies: ["Cartelería", "Diseño gráfico", "Fotografía", "Tipografía"],
    image: "/proyectos/envidia/poster-minimalista.jpg",
    liveUrl: "https://example.com/envidia",
  },
  {
    id: "crefad",
    category: "campaign-designs",
    title: "CREFAD - Campaña Congreso Iberoamericano",
    campaign: "CREFAD",
    description:
      "Campaña visual para el I Congreso Iberoamericano de Creación y Fabricación Digital.",
    year: "2026",
    technologies: ["Illustrator", "Photoshop"],
    image: "/proyectos/crefad/poster-principal.jpg",
    liveUrl: "https://example.com/crefad",
  },
  {
    id: "kaoka",
    category: "branding",
    title: "Kaoka - Identidad visual",
    description:
      "Branding integral para marca de chocolate artesanal con sistema gráfico, piezas impresas y mockups.",
    year: "2024",
    technologies: ["Illustrator", "Photoshop"],
    image: "/proyectos/kaoka/poster-kaoka.png",
    liveUrl: "https://example.com/kaoka",
  },
  {
    id: "campaign-lo-que-nos-mueve",
    category: "campaign-designs",
    title: "Lo que nos mueve",
    campaign: "Lo que nos mueve",
    description:
      "Campaña visual enfocada en comunidad, intereses compartidos y acción social.",
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
      "Landing page responsive con agenda, ponentes y formulario de inscripción.",
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
      "Proyecto académico con filtros por ingredientes y guardado de favoritos.",
    year: "2024",
    technologies: ["Vue", "Pinia", "CSS Grid"],
    image: "https://via.placeholder.com/960x540?text=App+Recetas",
    liveUrl: "https://example.com/app-recetas",
  },
];
