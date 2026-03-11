<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, Maximize2 } from "lucide-vue-next";
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
  }
};

onMounted(() => window.addEventListener("keydown", handleKeydown));

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handleKeydown);
    document.body.style.overflow = "";
  }
});

const proyecto = {
  title: "Macbeth - Cartel Teatral",
  category: "Diseño editorial",
  description:
    "Propuesta gráfica inspirada en Macbeth, con una composición visual centrada en oscuridad, tensión dramática y presencia escénica.",
  secciones: [
    {
      titulo: "Pieza final",
      items: [
        {
          src: "/proyectos/macbeth/Cartel_Saltó_Mansilla_Amanda.jpg",
          alt: "Cartel Macbeth",
        },
      ],
    },
  ],
};
</script>

<template>
  <div class="page-wrapper">
    <section class="detalle-proyecto">
      <RouterLink :to="rutaVolverAProyectos">
        <Button class="boton-volver">
          <ArrowLeft :size="18" /> Volver a proyectos
        </Button>
      </RouterLink>

      <header class="header-editorial">
        <span class="categoria-tag">{{ proyecto.category }}</span>
        <h1 class="titulo-proyecto">{{ proyecto.title }}</h1>
        <p class="descripcion-proyecto">{{ proyecto.description }}</p>
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
          <button class="btn-modal cerrar" @click.stop="cerrarImagen"><X :size="30" /></button>
          <div class="contenedor-img-full">
            <img :src="fotoActual.src" :alt="fotoActual.alt" class="imagen-full" @click.stop />
            <p class="caption-modal">{{ fotoActual.alt }}</p>
          </div>
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
  color: #ff0a8a;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
}

.descripcion-proyecto {
  max-width: 600px;
  font-size: 1.1rem;
  opacity: 0.8;
  margin-top: 1rem;
}

.bloque-seccion {
  margin-bottom: 4rem;
}

.subtitulo-seccion {
  font-size: 0.9rem;
  text-transform: uppercase;
  border-left: 3px solid #ff0a8a;
  padding-left: 1rem;
  margin-bottom: 2rem;
}

.grid-unificado {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 450px));
  gap: 2rem;
}

.contenedor-estandar {
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #111;
  border-radius: 4px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.foto-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.tarjeta-foto:hover .foto-img {
  transform: scale(1.05);
}

.overlay-zoom {
  position: absolute;
  inset: 0;
  background: rgba(255, 10, 138, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.tarjeta-foto:hover .overlay-zoom {
  opacity: 1;
}

.pie-foto {
  margin-top: 0.7rem;
  font-size: 0.8rem;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.imagen-full {
  max-width: 85vw;
  max-height: 90vh;
  object-fit: contain;
}

.caption-modal {
  color: white;
  margin-top: 1rem;
  opacity: 0.8;
}

.btn-modal {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 20px;
  z-index: 10000;
}

.cerrar {
  position: absolute;
  top: 20px;
  right: 20px;
}

.boton-volver {
  background: #1a1a1a;
  color: #fff;
  border-radius: 99px;
}

@media (max-width: 768px) {
  .grid-unificado {
    grid-template-columns: 1fr;
  }
}
</style>
