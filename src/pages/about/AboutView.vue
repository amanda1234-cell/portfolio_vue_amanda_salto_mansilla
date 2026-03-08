<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { ref } from "vue";

const paginaActual = ref(0);

const siguientePagina = () => {
  if (paginaActual.value < 2) {
    paginaActual.value += 1;
  }
};

const paginaAnterior = () => {
  if (paginaActual.value > 0) {
    paginaActual.value -= 1;
  }
};
</script>

<template>
  <section class="sobre-mi">
    <article v-if="paginaActual === 0" class="pagina who">
      <div class="who-contenido">
        <div class="foto-mock">
          <img src="/perfil/quien-soy.png" alt="Foto personal" class="foto-perfil" />
        </div>

        <div class="texto-who">
          <p class="etiqueta">Sobre mí</p>
          <h2>QUIÉN<br />SOY</h2>

          <div class="bloque-descripcion">
            <p class="descripcion-grande">
              Joven profesional y creativa, diseñadora web, gráfica y brand designer.
              Violinista profesional con gran sensibilidad estética.
            </p>
            <p class="descripcion-grande">
              Me adapto con facilidad a distintos retos de trabajo y ambientes,
              combinando creatividad, orden visual y enfoque estratégico.
            </p>
          </div>
        </div>
      </div>

      <button class="flecha-derecha" type="button" aria-label="Ir a formación" @click="siguientePagina">
        <ChevronRight :size="22" />
      </button>
    </article>

    <article v-else-if="paginaActual === 1" class="pagina formacion">
      <button class="flecha-izquierda" type="button" aria-label="Volver a quién soy" @click="paginaAnterior">
        <ChevronLeft :size="22" />
      </button>

      <div class="bloque-pagina">
        <div class="encabezado-pagina izquierda">
          <h3>FORMACIÓN</h3>
        </div>

        <div class="grid-pagina">
          <section class="columna">
            <h4>Estudios</h4>
            <p>Completar con tus estudios y cursos principales.</p>
          </section>

          <section class="columna">
            <h4>Idiomas</h4>
            <p>Completar con idiomas, nivel y certificaciones si las tienes.</p>
          </section>
        </div>
      </div>

      <button
        class="flecha-derecha"
        type="button"
        aria-label="Ir a experiencias y skills"
        @click="siguientePagina"
      >
        <ChevronRight :size="22" />
      </button>
    </article>

    <article v-else class="pagina experiencia">
      <button
        class="flecha-izquierda"
        type="button"
        aria-label="Volver a formación"
        @click="paginaAnterior"
      >
        <ChevronLeft :size="22" />
      </button>

      <div class="bloque-pagina">
        <div class="encabezado-pagina derecha">
          <h3>EXPERIENCIAS<br />Y SKILLS</h3>
        </div>

        <div class="grid-pagina">
          <section class="columna">
            <h4>Software skills</h4>
            <p>Por rellenar</p>

            <h4>Creative skills</h4>
            <p>Por rellenar</p>

            <h4>Intereses</h4>
            <p>Por rellenar</p>
          </section>

          <section class="columna">
            <h4>Experiencia</h4>
            <p>
              Completar con proyectos reales, colaboraciones, trabajos freelance o prácticas
              relacionadas con diseño y branding.
            </p>

            <h4>Habilidades</h4>
            <p>Completar con tus habilidades profesionales.</p>

            <h4>Información profesional</h4>
            <p>Completar con experiencia, enfoque o propuesta de valor.</p>
          </section>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.sobre-mi {
  color: #730e0e;
}

.pagina {
  min-height: calc(100svh - 120px);
  height: calc(100svh - 120px);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.who-contenido {
  min-height: calc(100svh - 120px);
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(160px, 34svh) 1fr;
  gap: 0;
}

.foto-mock {
  min-height: 220px;
  background: #ffffff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.foto-perfil {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
}

.texto-who {
  padding: 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.45rem;
  align-items: flex-end;
  background: #ffffff;
  text-align: right;
  overflow: hidden;
}

.etiqueta {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
}

.texto-who h2 {
  margin: 0.2rem 0 0.6rem;
  font-size: clamp(1.7rem, 7.4vw, 3.3rem);
  line-height: 0.9;
}

.bloque-descripcion {
  margin-top: auto;
  margin-left: auto;
  width: min(100%, 52ch);
  align-self: flex-end;
  text-align: right;
}

.descripcion-grande {
  margin: 0 0 2rem;
  font-size: clamp(0.9rem, 1.15vw, 1.08rem);
  line-height: 1.2;
  width: 100%;
  max-width: none;
  margin-left: auto;
}

.descripcion-grande:last-child {
  margin-bottom: 0rem;
}

.bloque-pagina {
  min-height: calc(100svh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem 1rem 0.9rem;
}

.encabezado-pagina {
  display: grid;
  gap: 0.5rem;
}

.encabezado-pagina.izquierda {
  text-align: left;
}

.encabezado-pagina.derecha {
  text-align: right;
}

.encabezado-pagina h3 {
  margin: 0;
  font-size: clamp(1.45rem, 6.9vw, 3rem);
  line-height: 0.9;
}

.encabezado-pagina p {
  margin: 0;
  font-size: 0.88rem;
  max-width: 52ch;
}

.encabezado-pagina.derecha p {
  margin-left: auto;
}

.grid-pagina {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 0.7rem;
}

.columna {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #730e0e;
  padding: 0.75rem 0.85rem;
}

.columna h4 {
  margin: 0.12rem 0;
  font-size: 0.95rem;
  text-transform: uppercase;
}

.columna p {
  margin: 0 0 0.5rem;
  line-height: 1.3;
  font-size: 0.88rem;
}

.flecha-derecha {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background: #efe2e5;
  color: #730e0e;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.flecha-izquierda {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background: #efe2e5;
  color: #730e0e;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.flecha-derecha:hover {
  background: #e8d7db;
}

.flecha-izquierda:hover {
  background: #e8d7db;
}

@media (min-width: 900px) {
  .pagina,
  .who-contenido,
  .bloque-pagina {
    min-height: calc(100svh - 150px);
    height: calc(100svh - 150px);
  }

  .who-contenido {
    grid-template-columns: 42% 58%;
    grid-template-rows: 1fr;
  }

  .texto-who {
    padding: 1.1rem 1.2rem 0.85rem 1.3rem;
  }

  .bloque-pagina {
    padding: 1.15rem 1.2rem 1rem;
  }

  .grid-pagina {
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem;
  }

  .columna {
    min-height: 0;
    padding: 0.95rem;
  }
}
</style>
