export type Project = {
  id: string;
  title: string;
  description: string;
  year: string;
  technologies: string[];
  image: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: "branding-cafe",
    title: "Branding para cafeteria local",
    description:
      "Identidad visual completa con piezas para redes sociales, cartel y carta de productos.",
    year: "2025",
    technologies: ["Figma", "Illustrator", "Photoshop"],
    image: "https://via.placeholder.com/960x540?text=Branding+Cafe",
    liveUrl: "https://example.com/branding-cafe",
  },
  {
    id: "web-evento-cultural",
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
    title: "App de recetas interactivas",
    description:
      "Proyecto academico con filtros por ingredientes y guardado de favoritos.",
    year: "2024",
    technologies: ["Vue", "Pinia", "CSS Grid"],
    image: "https://via.placeholder.com/960x540?text=App+Recetas",
    liveUrl: "https://example.com/app-recetas",
  },
];
