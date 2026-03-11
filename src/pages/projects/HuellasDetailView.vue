<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, Maximize2, ChevronLeft, ChevronRight, Fingerprint } from "lucide-vue-next";
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

const navegar = (direccion: number) => {
  if (imagenSeleccionadaIdx.value === null) return;
  const nuevoIdx = imagenSeleccionadaIdx.value + direccion;
  if (nuevoIdx < 0) imagenSeleccionadaIdx.value = listaActual.value.length - 1;
  else if (nuevoIdx >= listaActual.value.length) imagenSeleccionadaIdx.value = 0;
  else imagenSeleccionadaIdx.value = nuevoIdx;
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
  title: "Huellas",
  category: "Diseño tipográfico",
  year: "2024",
  description:
    "Una exploración de la identidad a través de la grafía. Cada letra se construye con huella dactilar como módulo tipográfico.",
  secciones: [
    {
      titulo: "Morfología del abecedario",
      items: [
        { src: "/proyectos/diseño tipografico/huellas/A.jpg", alt: "Letra A - Construcción dactilar" },
        { src: "/proyectos/diseño tipografico/huellas/P.jpg", alt: "Letra P - Detalle de textura" },
        { src: "/proyectos/diseño tipografico/huellas/Q.jpg", alt: "Letra Q - Composición orgánica" },
      ],
    },
  ],
};
</script>

<template>
  <div class="page-wrapper huellas-page">
    <section class="detalle-proyecto">
      <RouterLink :to="rutaVolverAProyectos">
        <Button class="boton-volver">
          <ArrowLeft :size="18" /> Volver a proyectos
        </Button>
      </RouterLink>

      <header class="header-editorial">
        <div class="header-content">
          <span class="categoria-tag">{{ proyecto.category }}</span>
          <h1 class="titulo-huellas">{{ proyecto.title }}</h1>
          <p class="descripcion-huellas">{{ proyecto.description }}</p>
        </div>
      </header>

      <div class="galerias-container">
        <div v-for="(seccion, index) in proyecto.secciones" :key="index" class="bloque-seccion">
          <h2 class="subtitulo-seccion">
            <Fingerprint :size="20" class="icono" />
            {{ seccion.titulo }}
          </h2>

          <div class="grid-ajustado" :class="`items-${seccion.items.length}`">
            <div
              v-for="(img, idx) in seccion.items"
              :key="img.src"
              class="tarjeta-foto"
              @click="abrirImagen(seccion.items, idx)"
            >
              <div class="contenedor-estandar">
                <img :src="img.src" :alt="img.alt" loading="lazy" class="foto-huella" />
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
          <button class="btn-modal cerrar" @click.stop="cerrarImagen"><X :size="30" /></button>
          <button v-if="listaActual.length > 1" class="btn-modal flecha izq" @click.stop="navegar(-1)">
            <ChevronLeft :size="40" />
          </button>

          <div class="contenedor-img-full">
            <img :src="fotoActual.src" :alt="fotoActual.alt" class="imagen-full" @click.stop />
            <p class="caption-modal">
              {{ fotoActual.alt }} ({{ (imagenSeleccionadaIdx ?? 0) + 1 }} / {{ listaActual.length }})
            </p>
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
.huellas-page {
  background-color: #080808;
  color: #efefef;
  min-height: 100vh;
}

.detalle-proyecto {
  padding: clamp(1rem, 5vw, 4rem);
  max-width: 1400px;
  margin: 0 auto;
}

.header-editorial {
  margin: 4rem 0 5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 3rem;
}

.titulo-huellas {
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 900;
  line-height: 0.8;
  margin: 1rem 0;
  color: #ffffff;
  letter-spacing: -2px;
}

.categoria-tag {
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-size: 0.75rem;
  color: #888;
}

.descripcion-huellas {
  max-width: 550px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #aaa;
}

.bloque-seccion {
  margin-bottom: 6rem;
}

.subtitulo-seccion {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
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
  background: #111;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #222;
}

.foto-huella {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 15px;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.tarjeta-foto:hover .foto-huella {
  transform: scale(1.08);
}

.overlay-zoom {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
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
  color: rgba(255, 255, 255, 0.55);
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
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
}

.caption-modal {
  color: #fff;
  margin-top: 20px;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.btn-modal {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  z-index: 10001;
}

.btn-modal:hover {
  color: #888;
  transform: scale(1.1);
}

.cerrar {
  position: absolute;
  top: 30px;
  right: 30px;
}

.flecha {
  position: relative;
  margin: 0 20px;
}

.boton-volver {
  background: transparent;
  color: #888;
  border: 1px solid #333;
  border-radius: 99px;
}

.boton-volver:hover {
  color: #fff;
  border-color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    padding: 10px;
  }

  .izq {
    left: 20px;
  }

  .der {
    right: 20px;
  }
}
</style>



