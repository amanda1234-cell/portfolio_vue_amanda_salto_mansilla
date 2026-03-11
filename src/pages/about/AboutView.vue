<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";

const paginaActual = ref(0);

const estudios = [
  {
    fecha: "2025 - presente",
    titulo: "Diseño y Tecnologías Creativas",
    centro: "Universidad Politécnica de Valencia · Facultad de Bellas Artes",
    detalle:
      "Formación universitaria enfocada en diseño, cultura visual y desarrollo de propuestas creativas con enfoque contemporáneo.",
  },
  {
    fecha: "2014 - presente",
    titulo: "Enseñanzas Elementales y Profesionales (Violín)",
    centro: "Conservatorio de Música José Iturbi",
    detalle:
      "Recorrido musical prolongado que ha reforzado disciplina, escucha y sensibilidad estética a través de la música.",
  },
  {
    fecha: "Base académica",
    titulo: "Estudios primarios y secundarios",
    centro: "Liceo Francés de Valencia",
    detalle: "Entorno internacional con base académica sólida y dominio de idiomas.",
  },
  {
    fecha: "Formación complementaria",
    titulo: "Curso en PRL",
    centro: "Prevención de Riesgos Laborales",
    detalle:
      "Formación complementaria orientada a la responsabilidad y la preparación práctica en entornos profesionales.",
  },
];

const idiomas = [
  { nombre: "Español", nivel: "Materno", valor: 5 },
  { nombre: "Francés", nivel: "C1", valor: 4 },
  { nombre: "Inglés", nivel: "C1", valor: 4 },
];

const softwareSkills = [
  { nombre: "Illustrator", logo: "/icons/adobe-illustrator-cc-3.svg" },
  { nombre: "Photoshop", logo: "/icons/adobe-photoshop-2.svg" },
  { nombre: "Premiere", logo: "/icons/premiere-pro-cc.svg" },
  { nombre: "InDesign", logo: "/icons/adobe-indesign-cc-icon.svg" },
  { nombre: "CapCut", logo: "/icons/capcut-3.svg" },
  { nombre: "Procreate", logo: "/icons/Procreate-Logo.png" },
  { nombre: "Visual Studio", logo: "/icons/visual-studio-code-1.svg" },
];

const experiencia = [
  "DEPENDIENTA: atención al público y trato directo.",
  "PROFESORA PARTICULAR: organización y comunicación clara.",
  "CAMARERA: ritmo alto, adaptabilidad y dinamismo.",
  "VIOLINISTA EN ORQUESTAS: coordinación y trabajo colectivo.",
];

const intereses = [
  "Diseño gráfico y branding",
  "Comunicación audiovisual",
  "Diseño web",
  "Interpretación musical",
];

const siguientePagina = () => {
  if (paginaActual.value < 2) paginaActual.value += 1;
};

const paginaAnterior = () => {
  if (paginaActual.value > 0) paginaActual.value -= 1;
};

const volverAlInicio = () => {
  paginaActual.value = 0;
};

const esElementoEditable = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return target.isContentEditable || tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
};

const handleKeydown = (event: KeyboardEvent) => {
  if (esElementoEditable(event.target)) return;

  if (event.key === "ArrowRight") {
    siguientePagina();
    event.preventDefault();
  } else if (event.key === "ArrowLeft") {
    paginaAnterior();
    event.preventDefault();
  }
};

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => window.removeEventListener("keydown", handleKeydown));
</script>

<template>
  <section class="sobre-mi">
    <article v-if="paginaActual === 0" class="pagina who creative-layout">
      <div class="collage-container escritorio-collage">
        <img src="/perfil/papel.png" alt="Papel roto de fondo" class="paper-base" loading="lazy" />
        <img src="/perfil/blinder-clip.png" alt="Sujetapapeles de bisagra" class="binder-clip" loading="lazy" />

        <div class="nota-biografica over-paper">
          <h2 class="titulo-collage">ABOUT<br /><span>ME.</span></h2>
          <div class="info-personal-box">
            <p class="nombre-firma">Amanda Salto Mansilla</p>
            <p class="subtitulo-nota">España</p>
            <hr class="linea-decorativa" />
            <p class="descripcion-grande">
              Estudiante universitaria y violinista. Mi formación musical influye directamente en
              mi manera de entender el ritmo visual, la composición y la sensibilidad estética.
            </p>
            <p class="descripcion-grande">
              Me adapto con facilidad a entornos dinámicos y combino creatividad, organización y
              criterio visual en cada proyecto.
            </p>
          </div>
        </div>

        <div class="quien-soy-wrapper instax-wrapper over-paper-edge">
          <div class="instax-frame">
            <img src="/perfil/paper-clip.png" alt="Clip de papel recto" class="paper-clip-recto" loading="lazy" />
            <img src="/perfil/foto perfil 1.jpg" alt="Foto personal" class="foto-instax" loading="lazy" />
          </div>
        </div>
      </div>

      <button class="flecha-derecha" type="button" aria-label="Ir a formación" @click="siguientePagina">
        <ChevronRight :size="22" />
      </button>
    </article>

    <article v-else-if="paginaActual === 1" class="pagina formacion creative-layout">
      <button class="flecha-izquierda" type="button" aria-label="Volver a sobre mí" @click="paginaAnterior">
        <ChevronLeft :size="22" />
      </button>

      <div class="bloque-pagina collage-container paper-texture">
        <h3 class="titulo-seccion-collage">FORMA<span>CIÓN</span></h3>
        <div class="grid-pagina collage-grid">
          <section class="columna">
            <div class="chincheta-digital" />
            <h4>Estudios</h4>
            <div v-for="item in estudios" :key="item.titulo" class="item-estudio">
              <p class="estudio-fecha">{{ item.fecha }}</p>
              <p class="estudio-titulo">{{ item.titulo }}</p>
              <p class="estudio-centro">{{ item.centro }}</p>
              <p class="estudio-detalle">{{ item.detalle }}</p>
            </div>
          </section>

          <section class="columna tarjeta-nota-rosa">
            <h4>Idiomas</h4>
            <div v-for="item in idiomas" :key="item.nombre" class="idioma-item">
              <div class="idioma-header">
                <span>{{ item.nombre }}</span>
                <span class="idioma-nivel">{{ item.nivel }}</span>
              </div>
              <div class="idioma-barra" aria-hidden="true">
                <span v-for="s in 5" :key="`${item.nombre}-${s}`" class="segmento" :class="{ activo: s <= item.valor }" />
              </div>
            </div>
          </section>
        </div>
      </div>

      <button class="flecha-derecha" type="button" aria-label="Ir a skills y experiencia" @click="siguientePagina">
        <ChevronRight :size="22" />
      </button>
    </article>

    <article v-else class="pagina experiencia creative-layout">
      <button class="flecha-izquierda" type="button" aria-label="Volver a formación" @click="paginaAnterior">
        <ChevronLeft :size="22" />
      </button>

      <div class="bloque-pagina-libre collage-container">
        <h3 class="titulo-seccion-collage-libre">SKILLS <span>& EXP</span></h3>
        <div class="grid-pagina-libre">
          <section class="columna columna-skills rotate-left">
            <img src="/perfil/papel.png" alt="Textura papel" class="papel-fondo-img" loading="lazy" />
            <div class="contenido-skills">
              <div class="tape-digital" />
              <h4>Software skills</h4>
              <div class="software-grid">
                <div v-for="item in softwareSkills" :key="item.nombre" class="software-badge" :title="item.nombre">
                  <img :src="item.logo" :alt="item.nombre" class="software-logo" loading="lazy" />
                </div>
              </div>

              <h4 class="mt-seccion">Intereses</h4>
              <ul class="lista-limpia">
                <li v-for="item in intereses" :key="item" class="p-collage">{{ item }}</li>
              </ul>
            </div>
          </section>

          <section class="columna tarjeta-nota-rosa tarjeta-experiencia rotate-right">
            <img
              src="/perfil/paper-clip.png"
              alt="Clip de papel recto"
              class="paper-clip-experiencia"
              loading="lazy"
            />
            <h4>Experiencia</h4>
            <ul class="lista-limpia lista-exp">
              <li v-for="item in experiencia" :key="item" class="p-collage">{{ item }}</li>
            </ul>
            <div class="info-profesional-sticker">
              <p>Perfil creativo en formación, con base artística sólida y gran capacidad de organización.</p>
            </div>
          </section>
        </div>
      </div>

      <button class="flecha-derecha" type="button" aria-label="Volver al inicio" @click="volverAlInicio">
        <ChevronRight :size="22" />
      </button>
    </article>
  </section>
</template>

<style scoped>
@font-face {
  font-family: "PoppinsLocal";
  src: url("/fonts/Poppins-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "PoppinsLocal";
  src: url("/fonts/Poppins-Italic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: "PoppinsLocal";
  src: url("/fonts/Poppins-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "PoppinsLocal";
  src: url("/fonts/Poppins-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "PoppinsLocal";
  src: url("/fonts/Poppins-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

.sobre-mi {
  color: #fff;
  background: #000;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  font-family: "PoppinsLocal", sans-serif;
}

.pagina {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.creative-layout {
  padding: 1.2rem 3.6rem;
}

.paper-texture {
  background-color: #fdfaf5 !important;
  background-image:
    radial-gradient(#e5e0d8 1px, transparent 0),
    linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 20px 20px, 100% 2px, 2px 100%;
  color: #1a1a1a;
  border-radius: 2px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}

.collage-container {
  width: min(100%, 1040px);
  margin: 0 auto;
  position: relative;
}

.escritorio-collage {
  position: relative;
  display: flex;
  align-items: center;
  width: min(95%, 1100px);
  min-height: 650px;
  transform: translateY(-45px);
}

.paper-base {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
  pointer-events: none;
}

.binder-clip {
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: auto;
  z-index: 10;
  filter: drop-shadow(0 4px 5px rgba(0, 0, 0, 0.4));
}

.over-paper {
  position: relative;
  z-index: 5;
  color: #1a1a1a;
}

.over-paper span {
  color: #ff0a8a;
}

.nota-biografica.over-paper {
  width: 65%;
  max-width: none;
  padding-left: 290px;
  text-align: left;
}

.over-paper-edge {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-45%);
  z-index: 15;
}

.quien-soy-wrapper {
  display: flex;
  justify-content: center;
}

.instax-frame {
  background: #ffffff;
  padding: 15px 15px 65px;
  box-shadow: 15px 15px 35px rgba(0, 0, 0, 0.2);
  position: relative;
  transform: rotate(4deg);
  width: 290px;
}

.foto-instax {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 1px solid #eee;
  display: block;
}

.paper-clip-recto {
  position: absolute;
  top: -35px;
  left: 30px;
  transform: rotate(-12deg);
  width: 22px;
  height: auto;
  z-index: 20;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
}

.chincheta-digital {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #ff7eb3, #ff0a8a 80%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3);
}

.tape-digital {
  position: absolute;
  top: -8px;
  left: 12%;
  width: 90px;
  height: 25px;
  background: rgba(255, 10, 138, 0.3);
  backdrop-filter: blur(2px);
  transform: rotate(-4deg);
  border-left: 2px dotted rgba(255, 255, 255, 0.3);
}

.titulo-collage {
  margin: 0;
  font-size: clamp(2.8rem, 5.5vw, 4.2rem);
  font-family: "MontserratLocal", "Montserrat", sans-serif;
  font-weight: 800;
  line-height: 0.85;
}

.titulo-collage span {
  color: #ff0a8a;
  font: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
}

.info-personal-box {
  padding-top: 1rem;
  border-radius: 2px;
}

.nombre-firma {
  margin: 0;
  font-family: "above-the-sky-script", "Bickham Script Pro", cursive;
  font-size: clamp(1.8rem, 3.8vw, 2.8rem);
  color: #ff0a8a;
}

.info-personal-box,
.subtitulo-nota,
.descripcion-grande,
.columna p,
.idioma-header,
.idioma-nivel,
.p-collage,
.info-profesional-sticker,
.estudio-centro,
.estudio-detalle {
  font-family: "PoppinsLocal", sans-serif;
}

.subtitulo-nota {
  margin: 5px 0 0;
  font-family: "PoppinsLocal", sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: none;
  letter-spacing: normal;
  font-size: 0.95rem;
  opacity: 1;
}

.linea-decorativa {
  border: none;
  height: 2px;
  background: #1a1a1a;
  width: 75%;
  margin: 18px 0;
}

.descripcion-grande {
  margin-bottom: 0.9rem;
  font-family: "PoppinsLocal", sans-serif;
  font-size: 0.92rem;
  line-height: 1.45;
  max-width: 100%;
}

.descripcion-grande:last-child {
  margin-bottom: 0;
}

.bloque-pagina {
  width: min(100%, 1040px);
}

.formacion .bloque-pagina {
  width: min(100%, 860px);
  transform: translateY(-54px);
}

.grid-pagina {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  align-items: start;
}

.titulo-seccion-collage {
  margin: 0 0 1rem;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-family: "MontserratLocal", "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.04em;
}

.titulo-seccion-collage span {
  color: inherit;
  font: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
}

.formacion .titulo-seccion-collage {
  font-size: clamp(1.85rem, 4.4vw, 2.85rem);
  margin-bottom: 0.55rem;
}

.columna {
  padding: 2rem;
  border-radius: 2px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
}

.formacion .columna {
  padding: 1.45rem;
}

.tarjeta-nota-rosa {
  background-color: #ff0a8a;
  color: #fff;
  border: 0;
  outline: 0;
  background-image: none;
  background-clip: padding-box;
  border-bottom: none;
  transform: rotate(2deg);
}

.paper-clip-experiencia {
  position: absolute;
  top: -34px;
  left: 28px;
  width: 21px;
  height: auto;
  z-index: 20;
  transform: rotate(-10deg);
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.22));
}

.columna h4 {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  font-family: "MontserratLocal", "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.formacion .columna h4 {
  font-size: 0.78rem;
  margin-bottom: 0.65rem;
}

.item-estudio {
  padding: 0.35rem 0 0.85rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin-bottom: 0.6rem;
}

.formacion .item-estudio {
  padding: 0.18rem 0 0.48rem;
  margin-bottom: 0.3rem;
}

.item-estudio:last-child {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

.estudio-fecha {
  margin: 0 0 0.2rem;
  color: #ff0a8a;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.formacion .estudio-fecha {
  font-size: 0.64rem;
}

.estudio-titulo {
  margin: 0 0 0.2rem;
  font-size: 0.98rem;
  font-weight: 700;
}

.formacion .estudio-titulo {
  font-size: 0.8rem;
}

.estudio-centro {
  margin: 0 0 0.2rem;
  font-size: 0.88rem;
  font-weight: 600;
}

.formacion .estudio-centro {
  font-size: 0.74rem;
}

.estudio-detalle {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.35;
}

.formacion .estudio-detalle {
  font-size: 0.74rem;
  line-height: 1.24;
}

.idioma-item {
  margin-bottom: 1rem;
}

.formacion .idioma-item {
  margin-bottom: 0.55rem;
}

.idioma-item:last-child {
  margin-bottom: 0;
}

.idioma-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.35rem;
  font-weight: 700;
}

.formacion .idioma-header {
  margin-bottom: 0.18rem;
  font-size: 0.8rem;
}

.idioma-nivel {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.formacion .idioma-nivel {
  font-size: 0.64rem;
}

.idioma-barra {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.3rem;
}

.segmento {
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.3);
}

.formacion .segmento {
  height: 5px;
}

.segmento.activo {
  background: #ffffff;
}

.software-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 1.2rem 0 1.5rem;
}

.experiencia .software-grid {
  gap: 12px;
  margin: 1.5rem 0;
  grid-template-columns: repeat(4, minmax(0, 52px));
  justify-content: start;
}

.software-badge {
  background: transparent;
  padding: 4px;
  border-radius: 0;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
}

.experiencia .software-badge {
  padding: 0;
  width: 46px;
  height: 46px;
}

.software-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.p-collage {
  margin: 0 0 0.65rem;
  line-height: 1.4;
}

.lista-limpia {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lista-limpia .p-collage {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 0.6rem;
  line-height: 1.2;
}

.lista-limpia .p-collage::before {
  content: "•";
  color: #ff0a8a;
  flex: 0 0 auto;
}

.lista-exp .p-collage::before {
  color: #fff;
}

.mt-seccion {
  margin-top: 1.2rem;
}

.info-profesional-sticker {
  margin-top: 1.6rem;
  padding: 1rem;
  background: #fff;
  color: #000;
  font-size: 0.85rem;
  transform: rotate(-1deg);
  border-radius: 4px;
}

.rotate-left {
  transform: rotate(-1.2deg);
  margin-left: -30px;
}

.rotate-right {
  transform: rotate(1.2deg);
  margin-right: -10px;
}

.tarjeta-experiencia.rotate-right {
  transform: rotate(4deg);
}

.bloque-pagina-libre {
  width: min(100%, 1100px);
  position: relative;
  z-index: 5;
}

.titulo-seccion-collage-libre {
  margin: 0 0 3rem;
  font-size: clamp(2.5rem, 5vw, 3.6rem);
  font-family: "MontserratLocal", "Montserrat", sans-serif;
  font-weight: 800;
  color: #fff;
  line-height: 0.9;
}

.titulo-seccion-collage-libre span {
  color: #ff0a8a;
}

.grid-pagina-libre {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.2rem;
  align-items: start;
}

.columna-skills {
  position: relative;
  background: transparent;
  padding: 3rem 4rem;
  color: #1a1a1a;
  margin-left: -50px;
  margin-top: -18px;
  display: flex;
  flex-direction: column;
  z-index: 5;
}

.papel-fondo-img {
  position: absolute;
  top: -28px;
  left: -70px;
  width: 115%;
  height: 110%;
  object-fit: fill;
  z-index: -1;
  pointer-events: none;
  filter: drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.3));
}

.contenido-skills {
  position: relative;
  z-index: 2;
  color: #1a1a1a;
}

.columna-skills h4 {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-bottom: 1.1rem;
  letter-spacing: 0.05em;
}

.columna-skills .tape-digital {
  top: -34px;
  left: 24%;
}

.tarjeta-experiencia {
  padding: 2.5rem;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.4);
  margin-left: -55px;
}

.columna-skills .software-grid {
  gap: 15px;
  margin: 1.5rem 0 2rem;
}

.columna-skills .software-badge {
  background: transparent;
  padding: 0;
}

.columna-skills .software-logo {
  width: 100%;
  height: auto;
  max-height: 40px;
  object-fit: contain;
}

.experiencia .p-collage {
  margin-bottom: 0.8rem;
  line-height: 1.4;
  font-size: 1rem;
}

.experiencia .mt-seccion {
  margin-top: 1.4rem;
}

.experiencia .info-profesional-sticker {
  margin-top: 1.2rem;
}

.flecha-derecha,
.flecha-izquierda {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: #ff0a8a;
  border: 0;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.flecha-derecha {
  right: 2rem;
}

.flecha-izquierda {
  left: 2rem;
}

.flecha-derecha:hover {
  transform: translateY(-50%) scale(1.1);
}

.flecha-izquierda:hover {
  transform: translateY(-50%) scale(1.1);
}

@media (max-width: 768px) {
  .pagina {
    padding: 1.5rem 3.25rem;
    align-items: flex-start;
  }

  .escritorio-collage {
    display: block;
    width: 100%;
    height: auto;
    padding: 1.5rem 0;
    transform: none;
  }

  .paper-base,
  .binder-clip,
  .paper-clip-recto,
  .instax-wrapper {
    position: static;
    transform: none;
    width: 100%;
    height: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    filter: none;
  }

  .over-paper {
    position: static;
  }

  .nota-biografica.over-paper {
    max-width: 100%;
    padding-left: 0;
    margin-right: 0;
  }

  .instax-frame {
    transform: none;
    width: fit-content;
    margin: 0 auto;
  }

  .grid-pagina {
    grid-template-columns: 1fr;
  }

  .grid-pagina-libre {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .titulo-collage {
    font-size: 3.5rem;
  }

  .tarjeta-nota-rosa,
  .rotate-left,
  .rotate-right {
    transform: none;
  }

  .paper-clip-experiencia {
    top: -22px;
    left: 18px;
    width: 17px;
    transform: rotate(-8deg);
  }


  .software-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .columna-skills {
    margin-left: 0;
    padding: 1.5rem;
  }

  .papel-fondo-img {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 992px) {
  .escritorio-collage {
    flex-direction: column;
    height: auto;
    min-height: 900px;
    padding-top: 80px;
    transform: none;
  }

  .nota-biografica.over-paper {
    width: 85%;
    padding-left: 0;
    text-align: center;
  }

  .formacion .bloque-pagina {
    transform: none;
  }

  .linea-decorativa {
    margin: 18px auto;
  }

  .over-paper-edge {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 30px;
  }
}
</style>

