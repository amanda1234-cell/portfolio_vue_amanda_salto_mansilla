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
  title: "La Ladrona de Libros",
  category: "Diseño editorial",
  year: "2024",
  description:
    "Rediseño editorial e ilustrado para la novela de Markus Zusak, con una propuesta visual centrada en textura, narrativa y atmósfera.",
  secciones: [
    {
      titulo: "Cubierta y Contracubierta",
      items: [
        { src: "/proyectos/ladrona/portada-delante.jpg", alt: "Portada principal" },
        { src: "/proyectos/ladrona/portada-detras.jpg", alt: "Contracubierta" },
      ],
    },
    {
      titulo: "Páginas interiores",
      items: [
        { src: "/proyectos/ladrona/pagina-abierta-1.jpg", alt: "Ilustración Interior I" },
        { src: "/proyectos/ladrona/pagina-abierta-2.jpg", alt: "Ilustración Interior II" },
        { src: "/proyectos/ladrona/pagina-abierta-3.jpg", alt: "Ilustración Interior III" },
      ],
    },
  ],
};
</script>

<template>
  <div class="page-wrapper">
    <section class="detalle-proyecto">
      <RouterLink :to="rutaVolverAProyectos" class="volver-link">
        <Button class="boton-volver">
          <ArrowLeft :size="18" /> Volver a proyectos
        </Button>
      </RouterLink>

      <header class="header-editorial">
        <div class="header-content">
          <span class="categoria-tag">{{ proyecto.category }}</span>
          <h1 class="titulo-proyecto">{{ proyecto.title }}</h1>
          <p class="descripcion-proyecto">{{ proyecto.description }}</p>
        </div>
      </header>

      <div class="galerias-container">
        <div v-for="(seccion, index) in proyecto.secciones" :key="index" class="bloque-seccion">
          <h2 class="subtitulo-seccion">{{ seccion.titulo }}</h2>
          <div class="grid-unificado">
            <div
              v-for="(img, idx) in seccion.items"
              :key="img.src"
              class="tarjeta-foto"
              @click="abrirImagen(seccion.items, idx)"
            >
              <div class="contenedor-estandar">
                <img :src="img.src" :alt="img.alt" loading="lazy" class="foto-img" />
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
  background: #000;
  color: #fff;
}

.detalle-proyecto {
  padding: clamp(1rem, 5vw, 4rem);
  color: #ffffff;
  max-width: 1400px;
  margin: 0 auto;
}

.header-editorial {
  margin: 4rem 0;
  border-bottom: 1px solid rgba(255, 10, 138, 0.2);
  padding-bottom: 2rem;
}

.titulo-proyecto {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 0.9;
  margin: 0.5rem 0;
}

.categoria-tag {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  font-weight: 700;
  color: #ff0a8a;
}

.descripcion-proyecto {
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-top: 1rem;
}

.bloque-seccion {
  margin-bottom: 4rem;
}

.subtitulo-seccion {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9rem;
  font-weight: 800;
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 3px solid #ff0a8a;
}

.grid-unificado {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.tarjeta-foto {
  cursor: pointer;
}

.contenedor-estandar {
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.foto-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.tarjeta-foto:hover .foto-img {
  transform: scale(1.05);
}

.overlay-zoom {
  position: absolute;
  inset: 0;
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
  margin-top: 0.7rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: right;
  opacity: 0.6;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
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
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
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
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 10000;
}

.btn-modal:hover {
  background: #ff0a8a;
}

.cerrar {
  position: absolute;
  top: 30px;
  right: 30px;
}

.flecha {
  position: absolute;
}

.izq {
  left: 20px;
}

.der {
  right: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.boton-volver {
  background: #1a1a1a;
  color: #fff;
  border-radius: 99px;
}

.boton-volver:hover {
  background: white;
  color: black;
}

@media (max-width: 768px) {
  .grid-unificado {
    grid-template-columns: 1fr;
  }
}
</style>
