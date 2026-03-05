<script setup lang="ts">
import { Card } from "@/components/ui/card";
import { projects as proyectos } from "@/data/projects";
import { ArrowRight, CalendarDays, Image, Wrench } from "lucide-vue-next";
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const categoriasValidas = [
  "branding",
  "campaign-designs",
  "ilustracion-digital",
  "ilustracion-grafica",
] as const;
type Categoria = (typeof categoriasValidas)[number];

const categoriaActiva = computed<Categoria | null>(() => {
  const categoria = route.query.categoria;
  if (typeof categoria !== "string") return null;
  return categoriasValidas.includes(categoria as Categoria) ? (categoria as Categoria) : null;
});

const textoCategoriaActiva = computed(() => {
  const etiquetas: Record<Categoria, string> = {
    branding: "Logo y branding",
    "campaign-designs": "Campañas",
    "ilustracion-digital": "Ilustracion digital",
    "ilustracion-grafica": "Ilustracion grafica",
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
    illustrator: { etiqueta: "Ai", fondo: "#efe2e5", color: "#730E0E" },
    photoshop: { etiqueta: "Ps", fondo: "#efe2e5", color: "#730E0E" },
    figma: { etiqueta: "Fg", fondo: "#efe2e5", color: "#730E0E" },
    canva: { etiqueta: "Cv", fondo: "#efe2e5", color: "#730E0E" },
    vue: { etiqueta: "Vu", fondo: "#efe2e5", color: "#730E0E" },
    typescript: { etiqueta: "Ts", fondo: "#efe2e5", color: "#730E0E" },
    tailwind: { etiqueta: "Tw", fondo: "#efe2e5", color: "#730E0E" },
    pinia: { etiqueta: "Pi", fondo: "#efe2e5", color: "#730E0E" },
  };

  return (
    mapa[clave] ?? {
      etiqueta: herramienta.slice(0, 2).toUpperCase(),
      fondo: "#efe2e5",
      color: "#730E0E",
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
          <div class="descripcion-bloque">
            <p class="descripcion-proyecto">{{ proyecto.description }}</p>
          </div>

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
          <img
            v-if="proyecto.image && !proyecto.image.endsWith('.pdf')"
            :src="proyecto.image"
            :alt="`Visual del proyecto ${proyecto.title}`"
            class="imagen-preview"
          />
          <template v-else>
            <Image :size="22" />
            <span>(insertar imagen o logo)</span>
          </template>
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
  color: #730e0e;
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
  color: #730e0e;
  text-decoration: none;
  padding: 0.38rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.boton-categorias:hover {
  background: #e8d7db;
  color: #730e0e;
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
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  padding: 0 !important;
  min-height: 88svh;
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

.descripcion-bloque {
  display: block;
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
  border: 1px solid rgba(115, 14, 14, 0.45);
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
  color: #730e0e;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-bottom: 1px solid rgba(115, 14, 14, 0.45);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.enlace-detalle:hover {
  color: #730e0e;
  border-color: #730e0e;
}

.placeholder-visual {
  min-height: 0;
  height: 65%;
   width: 80%;
  border-radius: 14px;
  background: transparent;
  color: #730e0e;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 600;
  overflow: hidden;     
  max-width: 3000px;

}

.imagen-preview {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: transparent;
}

.sin-resultados {
  margin: 1rem 0 0;
}

@media (min-width: 980px) {
  .proyecto-editorial {
    grid-template-columns: minmax(280px, 0.9fr) minmax(380px, 1.3fr);
    gap: 1.3rem;
    align-items: stretch;
    min-height: 96svh;
  }

  .placeholder-visual {
    min-height: 0;
  }
}
</style>
