<script setup lang="ts">
import { Card } from "@/components/ui/card";
import {
  categoryLabels,
  type ProjectCategory,
  projects as proyectos,
} from "@/data/projects";
import { ArrowRight, CalendarDays, Image, Wrench } from "lucide-vue-next";
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const categoriaActiva = computed<ProjectCategory | null>(() => {
  const categoria = route.query.categoria;
  if (typeof categoria !== "string") return null;
  return categoria in categoryLabels ? (categoria as ProjectCategory) : null;
});

const textoCategoriaActiva = computed(() =>
  categoriaActiva.value ? categoryLabels[categoriaActiva.value] : "",
);

const proyectosFiltrados = computed(() =>
  categoriaActiva.value
    ? proyectos.filter((proyecto) => proyecto.category === categoriaActiva.value)
    : proyectos,
);

const logoHerramienta = (herramienta: string) => {
  const clave = herramienta.toLowerCase();
  const mapa: Record<string, { etiqueta: string; fondo: string; color: string }> = {
    illustrator: { etiqueta: "Ai", fondo: "#111111", color: "#ff0a8a" },
    photoshop: { etiqueta: "Ps", fondo: "#111111", color: "#ff0a8a" },
    figma: { etiqueta: "Fg", fondo: "#111111", color: "#ff0a8a" },
    canva: { etiqueta: "Cv", fondo: "#111111", color: "#ff0a8a" },
    vue: { etiqueta: "Vu", fondo: "#111111", color: "#ff0a8a" },
    typescript: { etiqueta: "Ts", fondo: "#111111", color: "#ff0a8a" },
    tailwind: { etiqueta: "Tw", fondo: "#111111", color: "#ff0a8a" },
    pinia: { etiqueta: "Pi", fondo: "#111111", color: "#ff0a8a" },
  };

  return (
    mapa[clave] ?? {
      etiqueta: herramienta.slice(0, 2).toUpperCase(),
      fondo: "#111111",
      color: "#ff0a8a",
    }
  );
};
</script>

<template>
  <section class="proyectos">
    <div class="encabezado-proyectos">
      <h2 class="titulo-editorial">Proyectos</h2>
      <div class="acciones-encabezado">
        <RouterLink v-if="!categoriaActiva" to="/portfolio/proyectos/categorias" class="boton-categorias">
          Ver categorÃ­as
        </RouterLink>
        <RouterLink
          v-if="categoriaActiva"
          to="/portfolio/proyectos/categorias"
          class="boton-categorias"
        >
          Volver a categorÃ­as
        </RouterLink>
      </div>
    </div>

    <p v-if="categoriaActiva" class="filtro-activo">Filtrando por: {{ textoCategoriaActiva }}</p>

    <TransitionGroup name="fade-proyectos" tag="div" class="lista-proyectos">
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
            AÃ±o: {{ proyecto.year }}
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

          <RouterLink :to="categoriaActiva ? { path: `/portfolio/proyectos/${proyecto.id}`, query: { categoria: categoriaActiva } } : `/portfolio/proyectos/${proyecto.id}`" class="enlace-detalle">
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
            
          </template>
        </div>
      </Card>
    </TransitionGroup>

    <div v-if="proyectosFiltrados.length === 0" class="sin-resultados">
      <p>No hay proyectos en esta categorÃ­a todavÃ­a.</p>
      <RouterLink
        v-if="categoriaActiva"
        to="/portfolio/proyectos/categorias"
        class="boton-categorias"
      >
        Volver a categorÃ­as
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.proyectos {
  color: #ffffff;
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
  background: #111111;
  color: #ffffff;
  text-decoration: none;
  padding: 0.38rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.boton-categorias:hover {
  background: #1a1a1a;
  color: #ffffff;
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
  border: 1px solid rgba(255, 10, 138, 0.45);
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
  color: #ffffff;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-bottom: 1px solid rgba(255, 10, 138, 0.45);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.enlace-detalle:hover {
  color: #ffffff;
  border-color: #ffffff;
}

.placeholder-visual {
  min-height: 0;
  height: 65%;
  width: 80%;
  border-radius: 14px;
  background: transparent;
  color: #ffffff;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
}

.sin-resultados p {
  margin: 0;
}

.fade-proyectos-enter-active,
.fade-proyectos-leave-active {
  transition: opacity 0.22s ease;
}

.fade-proyectos-enter-from,
.fade-proyectos-leave-to {
  opacity: 0;
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



