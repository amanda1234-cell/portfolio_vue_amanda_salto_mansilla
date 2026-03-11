<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Package,
  LayoutGrid,
  Brush,
  Dices,
  Box,
} from "lucide-vue-next";
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
  if (typeof window !== "undefined") document.body.style.overflow = "hidden";
};

const cerrarImagen = () => {
  imagenSeleccionadaIdx.value = null;
  listaActual.value = [];
  if (typeof window !== "undefined") document.body.style.overflow = "";
};

const fotoActual = computed(() =>
  imagenSeleccionadaIdx.value !== null ? listaActual.value[imagenSeleccionadaIdx.value] : null,
);

const navegar = (dir: number) => {
  if (imagenSeleccionadaIdx.value === null) return;
  let nuevoIdx = imagenSeleccionadaIdx.value + dir;
  if (nuevoIdx < 0) nuevoIdx = listaActual.value.length - 1;
  else if (nuevoIdx >= listaActual.value.length) nuevoIdx = 0;
  imagenSeleccionadaIdx.value = nuevoIdx;
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
    navegar(1);
    event.preventDefault();
  } else if (event.key === "ArrowLeft") {
    navegar(-1);
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
  title: "Mentecatos",
  category: "Logo y Branding",
  year: "2024",
  description:
    "Mentecatos es un proyecto de branding integral para un juego de mesa que combina estrategia y psicología. La identidad visual se traslada desde el packaging hasta cada componente del tablero.",
  cajaPrincipal: [
    { src: "/proyectos/mentecatos/caja-frontal.jpg", alt: "Packaging - vista frontal de la caja" },
  ],
  tarjetas: [
    { src: "/proyectos/mentecatos/carta-reverso.jpg", alt: "Diseño del reverso de cartas" },
    { src: "/proyectos/mentecatos/carta-tipo-1.jpg", alt: "Carta de acción - detalle" },
    { src: "/proyectos/mentecatos/carta-tipo-2.jpg", alt: "Carta de personaje - detalle" },
    { src: "/proyectos/mentecatos/mazo-completo.jpg", alt: "Conjunto de la baraja" },
  ],
  mockups: [
    { src: "/proyectos/mentecatos/mockup-mesa.jpg", alt: "Mockup del juego en uso" },
    { src: "/proyectos/mentecatos/mockup-detalle.jpg", alt: "Detalle de materiales" },
  ],
  cajaMaqueta: [
    { src: "/proyectos/mentecatos/caja-maqueta.jpg", alt: "Maqueta física del packaging" },
  ],
  tablero: [
    { src: "/proyectos/mentecatos/tablero-completo.jpg", alt: "Diseño final del tablero de Mentecatos" },
  ],
};
</script>

<template>
  <div class="page-wrapper mentecatos-view">
    <section class="detalle-proyecto">
      <RouterLink :to="rutaVolverAProyectos">
        <Button class="boton-volver"><ArrowLeft :size="18" /> Volver a proyectos</Button>
      </RouterLink>

      <header class="header-editorial">
        <span class="categoria-tag">{{ proyecto.category }}</span>
        <h1 class="titulo-proyecto">{{ proyecto.title }}</h1>
        <p class="descripcion-proyecto">{{ proyecto.description }}</p>
      </header>

      <div class="galerias-container">
        <div class="bloque-seccion">
          <h2 class="subtitulo-seccion"><Box :size="20" /> Presentación</h2>
          <div class="grid-ajustado items-1">
            <div class="tarjeta-foto" @click="abrirImagen(proyecto.cajaPrincipal, 0)">
              <div class="contenedor-estandar">
                <img :src="proyecto.cajaPrincipal[0]!.src" :alt="proyecto.cajaPrincipal[0]!.alt" class="foto-kaoka" />
                <div class="overlay-zoom"><Maximize2 :size="24" color="white" /></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bloque-seccion">
          <h2 class="subtitulo-seccion"><LayoutGrid :size="20" /> Baraja de cartas</h2>
          <div class="grid-ajustado items-4">
            <div
              v-for="(img, idx) in proyecto.tarjetas"
              :key="idx"
              class="tarjeta-foto"
              @click="abrirImagen(proyecto.tarjetas, idx)"
            >
              <div class="contenedor-estandar">
                <img :src="img.src" :alt="img.alt" class="foto-kaoka" />
                <div class="overlay-zoom"><Maximize2 :size="24" color="white" /></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bloque-seccion">
          <h2 class="subtitulo-seccion"><Brush :size="20" /> Visualización de producto</h2>
          <div class="grid-ajustado items-2">
            <div
              v-for="(img, idx) in proyecto.mockups"
              :key="idx"
              class="tarjeta-foto"
              @click="abrirImagen(proyecto.mockups, idx)"
            >
              <div class="contenedor-estandar">
                <img :src="img.src" :alt="img.alt" class="foto-kaoka" />
                <div class="overlay-zoom"><Maximize2 :size="24" color="white" /></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bloque-seccion">
          <h2 class="subtitulo-seccion"><Package :size="20" /> Prototipo de caja</h2>
          <div class="grid-ajustado items-1">
            <div class="tarjeta-foto" @click="abrirImagen(proyecto.cajaMaqueta, 0)">
              <div class="contenedor-estandar">
                <img :src="proyecto.cajaMaqueta[0]!.src" :alt="proyecto.cajaMaqueta[0]!.alt" class="foto-kaoka" />
                <div class="overlay-zoom"><Maximize2 :size="24" color="white" /></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bloque-seccion">
          <h2 class="subtitulo-seccion"><Dices :size="20" /> El tablero</h2>
          <div class="grid-ajustado items-1">
            <div class="tarjeta-foto" @click="abrirImagen(proyecto.tablero, 0)">
              <div class="contenedor-estandar">
                <img :src="proyecto.tablero[0]!.src" :alt="proyecto.tablero[0]!.alt" class="foto-kaoka" />
                <div class="overlay-zoom"><Maximize2 :size="24" color="white" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="fotoActual" class="modal-overlay" @click="cerrarImagen">
          <button class="btn-modal cerrar" @click.stop="cerrarImagen"><X :size="32" /></button>
          <button v-if="listaActual.length > 1" class="btn-modal flecha izq" @click.stop="navegar(-1)">
            <ChevronLeft :size="40" />
          </button>
          <div class="contenedor-img-full">
            <img :src="fotoActual.src" class="imagen-full" @click.stop />
            <p class="caption-modal">{{ fotoActual.alt }}</p>
          </div>
          <button v-if="listaActual.length > 1" class="btn-modal flecha der" @click.stop="navegar(1)">
            <ChevronRight :size="40" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.mentecatos-view {
  background-color: #000000;
  color: #ffffff;
  min-height: 100vh;
}

.detalle-proyecto {
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

.titulo-proyecto {
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

.descripcion-proyecto {
  max-width: 550px;
  font-size: 1.15rem;
  line-height: 1.6;
}

.subtitulo-seccion {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  padding-left: 1rem;
  border-left: 4px solid #ff0a8a;
}

.bloque-seccion {
  margin-bottom: 6rem;
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

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.imagen-full {
  max-height: 85vh;
  max-width: 90vw;
  object-fit: contain;
}

.btn-modal {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  position: absolute;
}

.cerrar {
  top: 30px;
  right: 30px;
}

.izq {
  left: 20px;
}

.der {
  right: 20px;
}

.boton-volver {
  background: #1a1a1a;
  color: white;
  border-radius: 50px;
  margin-bottom: 2rem;
}

.boton-volver:hover {
  background: #ff0a8a;
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
}
</style>



