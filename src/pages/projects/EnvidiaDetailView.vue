<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, Maximize2, ChevronLeft, ChevronRight, Palette } from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const rutaVolverAProyectos = computed(() => {
  const categoria = route.query.categoria;
  return typeof categoria === "string"
    ? { path: "/portfolio/proyectos", query: { categoria } }
    : "/portfolio/proyectos/categorias";
});

type MediaItem = { src: string; alt: string };

const imagenSeleccionadaIdx = ref<number | null>(null);
const listaActual = ref<MediaItem[]>([]);

const abrirImagen = (lista: MediaItem[], index: number) => {
  listaActual.value = lista;
  imagenSeleccionadaIdx.value = index;
  if (typeof window !== "undefined") {
    document.body.style.overflow = "hidden";
  }
};

const cerrarImagen = () => {
  imagenSeleccionadaIdx.value = null;
  listaActual.value = [];
  if (typeof window !== "undefined") {
    document.body.style.overflow = "";
  }
};

const fotoActual = computed(() => {
  if (imagenSeleccionadaIdx.value !== null) {
    return listaActual.value[imagenSeleccionadaIdx.value];
  }
  return null;
});

const siguienteFoto = () => {
  if (imagenSeleccionadaIdx.value !== null && imagenSeleccionadaIdx.value < listaActual.value.length - 1) {
    imagenSeleccionadaIdx.value += 1;
  } else {
    imagenSeleccionadaIdx.value = 0;
  }
};

const anteriorFoto = () => {
  if (imagenSeleccionadaIdx.value !== null && imagenSeleccionadaIdx.value > 0) {
    imagenSeleccionadaIdx.value -= 1;
  } else {
    imagenSeleccionadaIdx.value = listaActual.value.length - 1;
  }
};

const esElementoEditable = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return target.isContentEditable || tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
};

const handleKeydown = (event: KeyboardEvent) => {
  if (esElementoEditable(event.target)) return;

  if (event.key === "Escape" && fotoActual.value) {
    cerrarImagen();
    event.preventDefault();
    return;
  }

  if (!fotoActual.value || listaActual.value.length <= 1) return;

  if (event.key === "ArrowRight") {
    siguienteFoto();
    event.preventDefault();
  } else if (event.key === "ArrowLeft") {
    anteriorFoto();
    event.preventDefault();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handleKeydown);
    document.body.style.overflow = "";
  }
});

const proyecto = {
  title: "Envidia - Cartelería teatral 'Siete'",
  category: "Cartelería",
  year: "2025-2026",
  description:
    "Diseño de cartelería para la obra teatral 'Siete', con tres enfoques gráficos: minimalista, fotográfico-collage y textura orgánica.",
  technologies: ["Cartelería", "Diseño gráfico", "Fotografía", "Tipografía"],
  secciones: [
    {
      titulo: "Propuestas de carteles",
      icono: Palette,
      items: [
        { src: "/proyectos/envidia/poster-minimalista.jpg", alt: "Póster minimalista" },
        {
          src: "/proyectos/envidia/poster-fotografico-collage.jpg",
          alt: "Póster fotográfico",
        },
        {
          src: "/proyectos/envidia/poster-textura-serpiente.jpg",
          alt: "Póster de textura orgánica",
        },
      ],
    },
  ],
};
</script>

<template>
  <div class="page-wrapper Envidia-editorial">
    <section class="detalle-kaoka">
      <RouterLink :to="rutaVolverAProyectos" class="volver-link">
        <Button class="boton-volver">
          <ArrowLeft :size="18" /> Volver a proyectos
        </Button>
      </RouterLink>

      <header class="header-editorial Envidia-header">
        <div class="header-content">
          <span class="categoria-tag">{{ proyecto.category }}</span>
          <h1 class="titulo-kaoka Envidia-titulo">{{ proyecto.title }}</h1>
          <p class="descripcion-kaoka">{{ proyecto.description }}</p>
        </div>
        <div class="header-meta">
          <p><strong>Temporada:</strong> {{ proyecto.year }}</p>
          <p><strong>Ubicación:</strong> Naves del Español en Matadero (Sala Max Aub)</p>
          <p><strong>Dirección:</strong> Alejandra Winkler</p>
        </div>
      </header>

      <div class="galerias-container">
        <div v-for="(seccion, index) in proyecto.secciones" :key="index" class="bloque-seccion">
          <h2 class="subtitulo-seccion">
            <component :is="seccion.icono" :size="20" class="icono-seccion" />
            {{ seccion.titulo }}
          </h2>
          <div class="grid-ajustado Envidia-grid" :class="`items-${seccion.items.length}`">
            <div
              v-for="(img, idx) in seccion.items"
              :key="img.src"
              class="tarjeta-foto"
              @click="abrirImagen(seccion.items, idx)"
            >
              <div class="contenedor-estandar Envidia-contenedor">
                <img :src="img.src" :alt="img.alt" loading="lazy" class="foto-kaoka" />
                <div class="overlay-zoom">
                  <Maximize2 :size="24" color="white" />
                </div>
              </div>
              <p class="pie-foto">{{ img.alt }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="fotoActual" class="modal-overlay" @click="cerrarImagen">
          <button class="btn-modal cerrar" @click.stop="cerrarImagen">
            <X :size="30" />
          </button>

          <button v-if="listaActual.length > 1" class="btn-modal flecha izq" @click.stop="anteriorFoto">
            <ChevronLeft :size="40" />
          </button>

          <div class="contenedor-img-full">
            <img :src="fotoActual.src" :alt="fotoActual.alt" class="imagen-full" @click.stop />
            <p class="caption-modal">
              {{ fotoActual.alt }} ({{ (imagenSeleccionadaIdx ?? 0) + 1 }} / {{ listaActual.length }})
            </p>
          </div>

          <button v-if="listaActual.length > 1" class="btn-modal flecha der" @click.stop="siguienteFoto">
            <ChevronRight :size="40" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.page-wrapper {
  width: 100%;
  min-height: 100vh;
}

.detalle-kaoka {
  padding: clamp(1rem, 5vw, 4rem);
  color: #ffffff;
  max-width: 1400px;
  margin: 0 auto;
}

.header-editorial {
  margin: 4rem 0 5rem;
  border-bottom: 1px solid rgba(255, 10, 138, 0.2);
  padding-bottom: 3rem;
}

.titulo-kaoka {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 0.9;
  margin: 0.5rem 0 1.5rem;
}

.categoria-tag {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  font-weight: 700;
}

.descripcion-kaoka {
  max-width: 550px;
  font-size: 1.15rem;
  line-height: 1.6;
}

.bloque-seccion {
  margin-bottom: 6rem;
}

.subtitulo-seccion {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  padding-left: 1rem;
  border-left: 4px solid #ff0a8a;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icono-seccion {
  opacity: 0.8;
}

.grid-ajustado {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  align-items: flex-start;
}

.tarjeta-foto {
  flex: 1;
  min-width: 0;
  cursor: pointer;
}

.items-1 .tarjeta-foto {
  max-width: 450px;
  margin: 0 auto;
}

.items-2 .tarjeta-foto {
  max-width: 500px;
}

.contenedor-estandar {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #111111;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 10, 138, 0.1);
}

.foto-kaoka {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 15px;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.tarjeta-foto:hover .foto-kaoka {
  transform: scale(1.08);
}

.overlay-zoom {
  position: absolute;
  inset: 0;
  background: rgba(255, 10, 138, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tarjeta-foto:hover .overlay-zoom {
  opacity: 1;
}

.pie-foto {
  margin-top: 0.8rem;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: right;
  color: rgba(255, 10, 138, 0.7);
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.96);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10000;
  cursor: zoom-out;
  padding: 20px;
}

.contenedor-img-full {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.imagen-full {
  max-width: 85vw;
  max-height: 80vh;
  object-fit: contain;
  pointer-events: auto;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}

.caption-modal {
  color: white;
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  opacity: 0.8;
}

.btn-modal {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10001;
  pointer-events: auto;
}

.btn-modal:hover {
  background: rgba(255, 10, 138, 0.8);
  transform: scale(1.1);
}

.cerrar {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.flecha {
  height: 80px;
  width: 50px;
  border-radius: 8px;
  margin: 0 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.boton-volver {
  background: white;
  border: 1px solid #2a2a2a;
  color: #ffffff;
  border-radius: 99px;
}

@media (max-width: 768px) {
  .grid-ajustado {
    flex-wrap: wrap;
  }

  .tarjeta-foto {
    flex: 0 0 calc(50% - 0.75rem);
  }

  .items-1 .tarjeta-foto,
  .items-2 .tarjeta-foto {
    max-width: 100%;
  }

  .flecha {
    position: absolute;
    bottom: 40px;
    height: 60px;
    margin: 0;
    background: rgba(255, 10, 138, 0.6);
  }

  .izq {
    left: 20px;
  }

  .der {
    right: 20px;
  }

  .imagen-full {
    max-width: 95vw;
    max-height: 75vh;
  }
}
</style>



