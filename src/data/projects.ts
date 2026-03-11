export const categoryLabels = {
  branding: "Logo y branding",
  "campaign-designs": "Campañas",
  "diseno-editorial": "Diseño editorial",
  "diseno-tipografico": "Diseño tipográfico",
  carteleria: "Cartelería",
  ilustracion: "Ilustración",
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
    id: "mentecatos",
    category: "branding",
    title: "Mentecatos",
    description:
      "Proyecto de branding integral para juego de mesa con identidad visual aplicada a caja, cartas y tablero.",
    year: "2024",
    technologies: ["Branding", "Diseño gráfico", "Packaging"],
    image: "/proyectos/mentecatos/caja-frontal.jpg",
    liveUrl: "https://example.com/mentecatos",
  },
  {
    id: "huellas",
    category: "diseno-tipografico",
    title: "Huellas",
    description:
      "Exploración tipográfica donde cada letra se construye a partir de huellas dactilares.",
    year: "2024",
    technologies: ["Diseño tipográfico", "Tipografía", "Composición"],
    image: "/proyectos/diseño tipografico/huellas/A.jpg",
    liveUrl: "https://example.com/huellas",
  },
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
    id: "la-ladrona-de-libros",
    category: "diseno-editorial",
    title: "La Ladrona de Libros",
    description:
      "Proyecto de diseño editorial e ilustración para una nueva propuesta de cubierta e interiores inspirada en la novela de Markus Zusak.",
    year: "2024",
    technologies: ["Diseño editorial", "Illustrator", "Photoshop"],
    image: "/proyectos/ladrona/portada-delante.jpg",
    liveUrl: "https://example.com/la-ladrona-de-libros",
  },
  {
    id: "macbeth",
    category: "carteleria",
    title: "Macbeth",
    description:
      "Cartel teatral con enfoque editorial y una dirección visual centrada en tensión, contraste y atmósfera dramática.",
    year: "2024",
    technologies: ["Diseño editorial", "Cartelería", "Photoshop"],
    image: "/proyectos/macbeth/Cartel_Saltó_Mansilla_Amanda.jpg",
    liveUrl: "https://example.com/macbeth",
  },
  {
    id: "lo-que-nos-mueve",
    category: "campaign-designs",
    title: "Lo que nos mueve",
    campaign: "Lo que nos mueve",
    description:
      "Campaña visual enfocada en comunidad, intereses compartidos y acción social.",
    year: "2024",
    technologies: ["Illustrator", "Photoshop"],
    image: "/proyectos/loquenosmueve/Mupi Cartel Rosa 2.jpg",
    mupiImage: "/proyectos/loquenosmueve/Mupi Cartel Rosa 2.jpg",
    gallery: [
      {
        src: "/proyectos/loquenosmueve/Tarjetas def def-01.jpg",
        type: "image",
        objectPosition: "center center",
      },
      { src: "/proyectos/loquenosmueve/Folleto rosa mock up(1).png", type: "image" },
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
    id: "sobre-ruedas",
    category: "ilustracion",
    title: "Sobre Ruedas",
    description:
      "Proyecto de cómic y narrativa visual con composición secuencial, ritmo de lectura y enfoque ilustrativo.",
    year: "2024",
    technologies: ["Ilustración", "Narrativa visual", "Composición"],
    image: "/proyectos/comic/secuencial_c_Saltó_Mansilla_Amanda.jpg",
    liveUrl: "https://example.com/sobre-ruedas",
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
