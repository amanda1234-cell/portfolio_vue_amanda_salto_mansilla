<script setup lang="ts">
import { Card } from "@/components/ui/card";
import { projects as proyectos } from "@/data/projects";
import { ArrowRight, CalendarDays, Image, Wrench } from "lucide-vue-next";
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const categoriasValidas = ["branding", "logotipos", "social-media"] as const;
type Categoria = (typeof categoriasValidas)[number];

const categoriaActiva = computed<Categoria | null>(() => {
  const categoria = route.query.categoria;
  if (typeof categoria !== "string") return null;
  return categoriasValidas.includes(categoria as Categoria) ? (categoria as Categoria) : null;
});

const textoCategoriaActiva = computed(() => {
  const etiquetas: Record<Categoria, string> = {
    branding: "Branding",
    logotipos: "Logotipos",
    "social-media": "Social Media",
  };
  return categoriaActiva.value ? etiquetas[categoriaActiva.value] : "";
});

const proyectosFiltrados = computed(() =>
  categoriaActiva.value
    ? proyectos.filter((proyecto) => proyecto.category === categoriaActiva.value)
    : proyectos,
);

const logoHerramienta = (herramienta: string) => {
  const clave = herramienta.toLowerCase();
  const mapa: Record<string, { etiqueta: string; fondo: string; color: string }> = {
    illustrator: { etiqueta: "Ai", fondo: "#2e1100", color: "#ff9a00" },
    photoshop: { etiqueta: "Ps", fondo: "#001d35", color: "#31a8ff" },
    figma: { etiqueta: "Fg", fondo: "#1f1f1f", color: "#ffffff" },
    canva: { etiqueta: "Cv", fondo: "#113b4a", color: "#7de2fc" },
    vue: { etiqueta: "Vu", fondo: "#1e2f2a", color: "#42b883" },
    typescript: { etiqueta: "Ts", fondo: "#10243f", color: "#58a6ff" },
    tailwind: { etiqueta: "Tw", fondo: "#0f2e36", color: "#38bdf8" },
    pinia: { etiqueta: "Pi", fondo: "#2f2510", color: "#ffd859" },
  };

  return (
    mapa[clave] ?? {
      etiqueta: herramienta.slice(0, 2).toUpperCase(),
      fondo: "#f4e9ec",
      color: "#6f1526",
    }
  );
};
</script>

<template>
  <section class="proyectos">
    <div class="encabezado-proyectos">
      <h2 class="titulo-editorial">Proyectos</h2>
      <div class="acciones-encabezado">
        <RouterLink to="/portfolio/proyectos/categorias" class="boton-categorias">
          Ver categorias
        </RouterLink>
        <RouterLink v-if="categoriaActiva" to="/portfolio/proyectos" class="boton-categorias">
          Ver todos
        </RouterLink>
      </div>
    </div>

    <p v-if="categoriaActiva" class="filtro-activo">Filtrando por: {{ textoCategoriaActiva }}</p>

    <div class="lista-proyectos">
      <Card
        v-for="(proyecto, indice) in proyectosFiltrados"
        :key="proyecto.id"
        class="proyecto-editorial"
      >
        <div class="info-proyecto">
          <p class="numero-proyecto">Proyecto {{ String(indice + 1).padStart(2, "0") }}</p>
          <h3 class="titulo-proyecto">{{ proyecto.title }}</h3>
          <p class="descripcion-proyecto">{{ proyecto.description }}</p>

          <p class="meta">
            <CalendarDays :size="18" />
            Año: {{ proyecto.year }}
          </p>

          <div class="herramientas">
            <p class="herramientas-titulo">
              <Wrench :size="18" />
              Herramientas
            </p>
            <ul>
              <li
                v-for="tecnologia in proyecto.technologies"
                :key="tecnologia"
                :title="tecnologia"
                :style="{
                  backgroundColor: logoHerramienta(tecnologia).fondo,
                  color: logoHerramienta(tecnologia).color,
                }"
              >
                {{ logoHerramienta(tecnologia).etiqueta }}
              </li>
            </ul>
          </div>

          <RouterLink :to="`/portfolio/proyectos/${proyecto.id}`" class="enlace-detalle">
            Ver detalle
            <ArrowRight :size="18" />
          </RouterLink>
        </div>

        <div class="placeholder-visual" role="img" aria-label="Espacio reservado para imagen o logo">
          <Image :size="22" />
          <span>(insertar imagen o logo)</span>
        </div>
      </Card>
    </div>

    <p v-if="proyectosFiltrados.length === 0" class="sin-resultados">
      No hay proyectos en esta categoria todavia.
    </p>
  </section>
</template>

<style scoped>
.proyectos {
  color: #5a1a27;
}

.titulo-editorial {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
}

.encabezado-proyectos {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.acciones-encabezado {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
}

.boton-categorias {
  border-radius: 999px;
  background: #efe2e5;
  color: #5a1a27;
  text-decoration: none;
  padding: 0.38rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.boton-categorias:hover {
  background: #e8d7db;
  color: #6f1526;
}

.filtro-activo {
  margin: 0 0 0.9rem;
  font-size: 0.92rem;
}

.lista-proyectos {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.proyecto-editorial {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  background: #f6f1f2;
  min-height: min(82svh, 760px);
}

.info-proyecto {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.numero-proyecto {
  margin: 0;
  font-size: 0.84rem;
  opacity: 0.85;
}

.titulo-proyecto {
  margin: 0;
  font-size: clamp(1.35rem, 4.2vw, 2.1rem);
  line-height: 1;
  font-weight: 700;
}

.descripcion-proyecto {
  margin: 0;
  max-width: 42ch;
  line-height: 1.4;
}

.meta {
  margin: 0.15rem 0 0;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.herramientas {
  margin-top: 0.1rem;
}

.herramientas-titulo {
  margin: 0 0 0.45rem;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 700;
}

.herramientas ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.herramientas li {
  border-radius: 0.4rem;
  border: 1px solid rgba(220, 197, 203, 0.42);
  width: 2.05rem;
  height: 2.05rem;
  font-size: 1rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.enlace-detalle {
  margin-top: 0.55rem;
  width: fit-content;
  text-decoration: none;
  color: #5a1a27;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-bottom: 1px solid rgba(90, 26, 39, 0.35);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.enlace-detalle:hover {
  color: #6f1526;
  border-color: #6f1526;
}

.placeholder-visual {
  min-height: clamp(180px, 34vw, 360px);
  border-radius: 14px;
  border: 1px dashed rgba(111, 21, 38, 0.36);
  background: #fffafb;
  color: #6f1526;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 600;
}

.sin-resultados {
  margin: 1rem 0 0;
}

@media (min-width: 980px) {
  .proyecto-editorial {
    grid-template-columns: minmax(280px, 0.9fr) minmax(380px, 1.3fr);
    gap: 1.3rem;
    align-items: stretch;
  }
}

@media (min-width: 768px) {
  .proyecto-editorial {
    min-height: min(88svh, 900px);
  }
}
</style>
