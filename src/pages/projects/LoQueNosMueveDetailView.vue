<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Video,
  Megaphone,
  LayoutGrid,
  Layers3,
  Play,
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
  if (typeof window !== "undefined") document.body.style.overflow = "";
};

const fotoActual = computed(() =>
  imagenSeleccionadaIdx.value !== null ? listaActual.value[imagenSeleccionadaIdx.value] : null,
);

const navegar = (dir: number) => {
  if (imagenSeleccionadaIdx.value === null) return;
  const total = listaActual.value.length;
  imagenSeleccionadaIdx.value = (imagenSeleccionadaIdx.value + dir + total) % total;
};

const abrirReelExterno = () => {
  window.open("https://youtu.be/6_T2nH3VmfI", "_blank", "noopener,noreferrer");
};

const esElementoEditable = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return target.isContentEditable || tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
};

const handleKeydown = (event: KeyboardEvent) => {
  if (esElementoEditable(event.target)) return;

  if (event.key === "Escape") {
    if (fotoActual.value) {
      cerrarImagen();
      event.preventDefault();
      return;
    }
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

const mockups: MediaItem[] = [
  { src: "/proyectos/loquenosmueve/Mupi Cartel Amarillo 2(1).jpg", alt: "Mockup exterior amarillo" },
  { src: "/proyectos/loquenosmueve/Mupi Cartel Naranja 2.jpg", alt: "Mockup exterior naranja" },
  { src: "/proyectos/loquenosmueve/Mupi Cartel Rosa 2.jpg", alt: "Mockup exterior rosa" },
];

const folletos: MediaItem[] = [
  {
    src: "/proyectos/loquenosmueve/Folleto rosa mock up(1).jpg",
    alt: "Folleto Rosa - Interior y Exterior",
  },
  {
    src: "/proyectos/loquenosmueve/Folleto naranja mock up.jpg",
    alt: "Folleto Naranja - Interior y Exterior",
  },
  {
    src: "/proyectos/loquenosmueve/Folleto amarillo mock up.jpg",
    alt: "Folleto Amarillo - Interior y Exterior",
  },
];

const baraja: MediaItem[] = Array.from({ length: 6 }, (_, i) => ({
  src: `/proyectos/loquenosmueve/Tarjetas def def-0${i + 1}.jpg`,
  alt: `Carta de conexión ${i + 1}`,
}));
</script>

<template>
  <div class="page-wrapper loquenosmueve-view">
    <section class="detalle-proyecto">
      <RouterLink :to="rutaVolverAProyectos">
        <Button class="boton-volver"><ArrowLeft :size="18" /> Volver</Button>
      </RouterLink>

      <header class="header-editorial">
        <span class="categoria-tag">Campaña de Conexión Social</span>
        <h1 class="titulo-proyecto">Lo que nos mueve</h1>
        <p class="descripcion-proyecto">
          Una propuesta que nace para <strong>unir a personas de generaciones diferentes</strong>
          a través de aquello que les apasiona. Buscamos romper el aislamiento creando sinergias
          donde jóvenes y mayores compartan aficiones, aprendan unos de otros y construyan una red
          de apoyo basada en intereses comunes.
          <span class="hashtag">#LoQueNosMueve</span>
        </p>
      </header>

      <div class="galerias-container">
        <div class="bloque-seccion">
          <h2 class="subtitulo-seccion"><Megaphone :size="20" /> Exterior</h2>
          <div class="grid-flex">
            <div
              v-for="(img, idx) in mockups"
              :key="img.src"
              class="tarjeta-foto"
              @click="abrirImagen(mockups, idx)"
            >
              <div class="contenedor-estandar">
                <img :src="img.src" :alt="img.alt" class="foto-proyecto" />
                <div class="overlay-zoom"><Maximize2 :size="24" color="white" /></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bloque-seccion social-media-section">
          <h2 class="subtitulo-seccion"><Video :size="20" /> Proyección Digital</h2>
          <div class="flex-social">
            <div class="mockup-phone-container" @click="abrirReelExterno">
              <div class="iphone-frame">
                <img
                  src="/proyectos/loquenosmueve/poster-reel.jpg"
                  class="foto-congelada"
                  alt="Miniatura del reel"
                />
                <div class="play-overlay">
                  <div class="circle-play"><Play :size="30" fill="white" /></div>
                </div>
              </div>
              <div class="phone-shadow" />
              <p class="instruccion-video">Haz clic para ver el reel en YouTube</p>
            </div>
          </div>
        </div>

        <div class="bloque-seccion">
          <h2 class="subtitulo-seccion"><LayoutGrid :size="20" /> Editorial</h2>
          <div class="grid-flex">
            <div
              v-for="(img, idx) in folletos"
              :key="img.src"
              class="tarjeta-foto"
              @click="abrirImagen(folletos, idx)"
            >
              <div class="contenedor-estandar editorial-box">
                <img :src="img.src" :alt="img.alt" class="foto-proyecto" />
                <div class="overlay-zoom"><Maximize2 :size="24" color="white" /></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bloque-seccion">
          <h2 class="subtitulo-seccion"><Layers3 :size="20" /> Baraja de Conexión</h2>
          <div class="grid-baraja-cuatro">
            <div
              v-for="(img, idx) in baraja"
              :key="img.src"
              class="tarjeta-foto card-item"
              @click="abrirImagen(baraja, idx)"
            >
              <div class="contenedor-estandar card-box">
                <img :src="img.src" :alt="img.alt" class="foto-proyecto" />
                <div class="overlay-zoom"><Maximize2 :size="16" color="white" /></div>
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
          <button
            v-if="listaActual.length > 1"
            class="btn-modal flecha izq"
            @click.stop="navegar(-1)"
          >
            <ChevronLeft :size="40" />
          </button>
          <div class="contenedor-img-full">
            <img :src="fotoActual.src" :alt="fotoActual.alt" class="imagen-full" @click.stop />
            <p class="caption-modal">{{ fotoActual.alt }}</p>
          </div>
          <button
            v-if="listaActual.length > 1"
            class="btn-modal flecha der"
            @click.stop="navegar(1)"
          >
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
  background-color: #000;
  color: #fff;
}

.detalle-proyecto {
  padding: clamp(1rem, 5vw, 4rem);
  max-width: 1400px;
  margin: 0 auto;
}

.header-editorial {
  margin: 4rem 0 5rem;
  border-bottom: 1px solid rgba(255, 10, 138, 0.3);
  padding-bottom: 3rem;
}

.titulo-proyecto {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  color: #ff0a8a;
  margin: 1rem 0;
}

.descripcion-proyecto {
  max-width: 650px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;
}

.hashtag {
  color: #ff0a8a;
  font-weight: 700;
  display: block;
  margin-top: 10px;
}

.subtitulo-seccion {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-left: 4px solid #ff0a8a;
  padding-left: 1rem;
  color: #ff0a8a;
}

.bloque-seccion {
  margin-bottom: 6rem;
}

/* --- AJUSTE DE TAMAÑO DE GRIDS --- */
.grid-flex {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tarjeta-foto {
  /* Limitamos el ancho para que no sean enormes cuando hay pocas */
  flex: 0 1 350px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.tarjeta-foto:hover {
  transform: translateY(-5px);
}

.contenedor-estandar {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #111;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 10, 138, 0.2);
  border-radius: 8px;
}

/* Ajuste específico para folletos para que no se corten */
.editorial-box .foto-proyecto {
  object-fit: contain;
  padding: 15px;
}

.foto-proyecto {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-zoom {
  position: absolute;
  inset: 0;
  background: rgba(255, 10, 138, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s;
}

.tarjeta-foto:hover .overlay-zoom {
  opacity: 1;
}

/* GRID BARAJA: 4 columnas */
.grid-baraja-cuatro {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.grid-baraja-cuatro .tarjeta-foto {
  flex: none;
  width: 100%;
}

.grid-baraja-cuatro .foto-proyecto {
  object-fit: contain;
  padding: 12px;
}

/* SMARTPHONE MOCKUP */
.flex-social {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  text-align: center;
}

.mockup-phone-container {
  position: relative;
  display: inline-block;
  width: 250px;
  cursor: pointer;
  transition: 0.4s;
}

.instruccion-video {
  margin-top: 0.8rem;
  color: #ff0a8a;
  font-size: 0.82rem;
  font-weight: 700;
}

.iphone-frame {
  width: 100%;
  border: 8px solid #222;
  border-radius: 30px;
  overflow: hidden;
  height: 500px;
  position: relative;
  background: #000;
}

.foto-congelada {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.18);
  transition: background-color 0.2s ease;
}

.circle-play {
  width: 72px;
  height: 72px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
}

.mockup-phone-container:hover .play-overlay {
  background: rgba(0, 0, 0, 0.1);
}

.phone-shadow {
  position: absolute;
  inset: 10px;
  background: #ff007a;
  filter: blur(30px);
  opacity: 0.2;
  z-index: -1;
}

/* MODALES */
.modal-overlay,
.video-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  padding: 1rem;
}

.imagen-full {
  max-height: 85vh;
  max-width: 90vw;
  object-fit: contain;
  border-radius: 4px;
}

.caption-modal {
  margin-top: 1rem;
  color: #ff0a8a;
  font-weight: 600;
  text-align: center;
}

.btn-modal {
  position: absolute;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  z-index: 10001;
}

.cerrar {
  top: 24px;
  right: 24px;
}

.izq {
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
}

.der {
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .grid-baraja-cuatro {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-baraja-cuatro {
    grid-template-columns: repeat(2, 1fr);
  }
  .tarjeta-foto {
    flex: 1 1 100%;
  }
}
</style>


