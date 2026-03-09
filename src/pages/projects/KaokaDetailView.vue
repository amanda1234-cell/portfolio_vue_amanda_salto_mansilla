<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, Maximize2 } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const imagenSeleccionada = ref<string | null>(null);

const abrirImagen = (src: string) => {
  imagenSeleccionada.value = src;
  document.body.style.overflow = "hidden";
};

const cerrarImagen = () => {
  imagenSeleccionada.value = null;
  document.body.style.overflow = "auto";
};

onBeforeUnmount(() => {
  document.body.style.overflow = "auto";
});

const proyecto = {
  title: "Kaoka - Identidad Visual",
  category: "Logo y Branding",
  year: "2024",
  description:
    "Desarrollo de branding integral para marca de chocolate artesanal. Estetica retro-funk con una paleta vibrante y sistema de empaques ilustrados.",
  secciones: [
    {
      titulo: "Gama de Chocolates + Color",
      items: [
        { src: "/proyectos/kaoka/gama-leche-canela-rosa.png", alt: "Leche y Canela" },
        { src: "/proyectos/kaoka/gama-naranja-almendras-menta.png", alt: "Naranja y Almendras" },
        { src: "/proyectos/kaoka/gama-cacao-clasico-marron.png", alt: "Chocolate Puro 90%" },
        { src: "/proyectos/kaoka/gama-miel-avellanas-amarillo.png", alt: "Te Chai y Jengibre" },
      ],
    },
    {
      titulo: "Tarjetas y Papeleria",
      items: [
        { src: "/proyectos/kaoka/tarjeta-presentacion-delante.png", alt: "Tarjeta - Delante" },
        { src: "/proyectos/kaoka/tarjeta-presentacion-detras.png", alt: "Tarjeta - Detras" },
        { src: "/proyectos/kaoka/tarjeta-informativa.png", alt: "Tarjeta Informativa" },
      ],
    },
    {
      titulo: "Poster Promocional",
      items: [{ src: "/proyectos/kaoka/poster-kaoka.png", alt: "Poster Promocional" }],
    },
    {
      titulo: "Mockups",
      items: [
        { src: "/proyectos/kaoka/box-mockup.png", alt: "Chocolates Box" },
        { src: "/proyectos/kaoka/chocolates-mockup.png", alt: "Mockup Chocolates" },
        { src: "/proyectos/kaoka/flyers-mockup.png", alt: "Presentacion Flyers" },
      ],
    },
    {
      titulo: "Merchandising",
      items: [{ src: "/proyectos/kaoka/tote-bag.png", alt: "Tote Bag Kaoka" }],
    },
    {
      titulo: "Poster de Presentacion",
      items: [{ src: "/proyectos/kaoka/poster-kaoka.png", alt: "Poster de Presentacion" }],
    },
  ],
};
</script>

<template>
  <section class="detalle-kaoka">
    <RouterLink to="/portfolio/proyectos" class="volver-link">
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
      <div class="header-meta">
        <p><strong>Anio:</strong> {{ proyecto.year }}</p>
        <p><strong>Cliente:</strong> Kaoka Chocolates</p>
      </div>
    </header>

    <div class="galerias-container">
      <div v-for="(seccion, index) in proyecto.secciones" :key="index" class="bloque-seccion">
        <h2 class="subtitulo-seccion">{{ seccion.titulo }}</h2>

        <div class="carrusel-horizontal">
          <div
            v-for="img in seccion.items"
            :key="img.src"
            class="tarjeta-foto"
            @click="abrirImagen(img.src)"
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

    <Transition name="fade">
      <div v-if="imagenSeleccionada" class="modal-overlay" @click="cerrarImagen">
        <button class="boton-cerrar" @click="cerrarImagen">
          <X :size="32" />
        </button>
        <img :src="imagenSeleccionada" class="imagen-full" @click.stop />
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.detalle-kaoka {
  padding: clamp(1rem, 5vw, 4rem);
  color: #730e0e;
  max-width: 1400px;
  margin: 0 auto;
}

.header-editorial {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin: 4rem 0;
  border-bottom: 1px solid rgba(115, 14, 14, 0.2);
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
  border-left: 4px solid #730e0e;
}

.carrusel-horizontal {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1.5rem;
  scrollbar-width: none;
}

.carrusel-horizontal::-webkit-scrollbar {
  display: none;
}

.tarjeta-foto {
  flex: 0 0 320px;
  cursor: pointer;
}

.contenedor-estandar {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  background: #efe2e5;
  border: 1px solid rgba(115, 14, 14, 0.1);
}

.foto-kaoka {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.overlay-zoom {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(115, 14, 14, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tarjeta-foto:hover .overlay-zoom {
  opacity: 1;
}

.tarjeta-foto:hover .foto-kaoka {
  transform: scale(1.08);
}

.pie-foto {
  margin-top: 0.8rem;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: right;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
  cursor: zoom-out;
}

.imagen-full {
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}

.boton-cerrar {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 10000;
  transition: transform 0.2s ease;
}

.boton-cerrar:hover {
  transform: scale(1.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.boton-volver {
  background: white;
  border: 1px solid #dcc5cb;
  color: #730e0e;
  border-radius: 99px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .tarjeta-foto {
    flex: 0 0 85%;
  }
}
</style>
