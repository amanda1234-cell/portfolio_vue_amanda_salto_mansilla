<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-vue-next";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const rutaVolverAProyectos = computed(() => {
  const categoria = route.query.categoria;
  return typeof categoria === "string"
    ? { path: "/portfolio/proyectos", query: { categoria } }
    : "/portfolio/proyectos/categorias";
});

const imagenSeleccionadaIdx = ref<number | null>(null);
const listaActual = ref<{ src: string; alt: string }[]>([]);

const abrirImagen = (lista: { src: string; alt: string }[], index: number) => {
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
  title: "Kaoka - Identidad Visual",
  category: "Logo y Branding",
  year: "2024",
  description:
    "Desarrollo de branding integral para marca de chocolate artesanal. Estética retro-funk con una paleta vibrante y sistema de empaques ilustrados.",
  secciones: [
    {
      titulo: "Gama de Chocolates",
      items: [
        { src: "/proyectos/kaoka/gama-leche-canela-rosa.png", alt: "Leche y Canela" },
        { src: "/proyectos/kaoka/gama-naranja-almendras-menta.png", alt: "Naranja y Almendras" },
        { src: "/proyectos/kaoka/gama-cacao-clasico-marron.png", alt: "Chocolate Puro 90%" },
        { src: "/proyectos/kaoka/gama-miel-avellanas-amarillo.png", alt: "Té Chai y Jengibre" },
      ],
    },
    {
      titulo: "Tarjetas y Papelería",
      items: [
        { src: "/proyectos/kaoka/tarjeta-presentacion-delante.png", alt: "Tarjeta - Delante" },
        { src: "/proyectos/kaoka/tarjeta-presentacion-detras.png", alt: "Tarjeta - Detrás" },
        { src: "/proyectos/kaoka/tarjeta-informativa.png", alt: "Tarjeta Informativa" },
      ],
    },
    {
      titulo: "Póster Promocional",
      items: [{ src: "/proyectos/kaoka/poster-kaoka.png", alt: "Póster Promocional" }],
    },
    {
      titulo: "Mockups",
      items: [
        { src: "/proyectos/kaoka/box-mockup.png", alt: "Chocolates Box" },
        { src: "/proyectos/kaoka/chocolates-mockup.png", alt: "Mockup Chocolates" },
        { src: "/proyectos/kaoka/flyers-mockup.png", alt: "Presentación Flyers" },
      ],
    },
    {
      titulo: "Merchandising",
      items: [{ src: "/proyectos/kaoka/tote-bag.png", alt: "Tote Bag Kaoka" }],
    },
    {
      titulo: "Póster de Presentación",
      items: [{ src: "/proyectos/kaoka/poster-kaoka.png", alt: "Póster de Presentación" }],
    },
  ],
};
</script>

<template>
  <div class="page-wrapper">
    <section class="detalle-kaoka">
      <RouterLink :to="rutaVolverAProyectos" class="volver-link">
        <Button class="boton-volver">
          <ArrowLeft :size="18" /> Volver a proyectos
        </Button>
      </RouterLink>

      <header class="header-editorial">
        <div class="header-content">
          <span class="categoria-tag">{{ proyecto.category }}</span>
          <h1 class="titulo-kaoka">{{ proyecto.title }}</h1>
          <p class="descripcion-kaoka">{{ proyecto.description }}</p>
        </div>
      </header>

      <div class="galerias-container">
        <div v-for="(seccion, index) in proyecto.secciones" :key="index" class="bloque-seccion">
          <h2 class="subtitulo-seccion">{{ seccion.titulo }}</h2>
          <div class="grid-ajustado" :class="`items-${seccion.items.length}`">
            <div
              v-for="(img, idx) in seccion.items"
              :key="img.src"
              class="tarjeta-foto"
              @click="abrirImagen(seccion.items, idx)"
            >
              <div class="contenedor-estandar">
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
  margin: 4rem 0;
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
  margin-bottom: 5rem;
}

.subtitulo-seccion {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 4px solid #ff0a8a;
}

.grid-ajustado {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tarjeta-foto {
  flex: 0 0 100%;
  cursor: pointer;
}

@media (min-width: 640px) {
  .tarjeta-foto {
    flex: 0 0 calc(50% - 0.75rem);
  }
}

@media (min-width: 1024px) {
  .items-4 .tarjeta-foto,
  .items-5 .tarjeta-foto {
    flex: 0 0 calc(25% - 1.15rem);
  }

  .items-3 .tarjeta-foto {
    flex: 0 0 calc(33.333% - 1rem);
  }

  .items-1 .tarjeta-foto,
  .items-2 .tarjeta-foto {
    flex: 0 0 450px;
  }
}

.contenedor-estandar {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  background: #111111;
  border: 1px solid rgba(255, 10, 138, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.foto-kaoka {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
  transition: transform 0.4s ease;
}

.overlay-zoom {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 10, 138, 0.3);
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
}

.caption-modal {
  color: white;
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.05em;
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
  background: #111111;
  border: 1px solid rgba(255, 10, 138, 0.22);
  color: #ffffff;
  border-radius: 99px;
}

.boton-volver:hover {
  background: #1a1a1a;
  border-color: rgba(255, 10, 138, 0.34);
}

@media (max-width: 768px) {
  .tarjeta-foto {
    flex: 0 0 85%;
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
  }
}
</style>

