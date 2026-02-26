<script setup lang="ts">
const irASeccion = (id: string) => {
  const elemento = document.getElementById(id);
  if (!elemento) return;
  elemento.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
  <section class="sobre-mi">
    <article id="inicio-sobre-mi" class="who-am-i">
      <div class="who-contenido">
        <div class="foto-mock" role="img" aria-label="Espacio para foto personal">
          <span>foto personal</span>
        </div>

        <div class="texto-who">
          <p class="etiqueta">Sobre mí</p>
          <h2>ESTO<br />SOY YO</h2>

          <div class="bloque-descripcion">
            <p class="descripcion-grande">
              Joven profesional y creativa, diseñadora web, gráfica y brand
              designer. Violinista profesional con gran sensibilidad estética.
            </p>
            <p class="descripcion-grande">
              Me adapto con facilidad a distintos retos de trabajo y ambientes,
              combinando creatividad, orden visual y enfoque estratégico.
            </p>
          </div>
        </div>
      </div>

      <button
        class="flecha-scroll"
        type="button"
        aria-label="Deslizar hacia habilidades"
        @click="irASeccion('bloque-experiencia')"
      >
        ↓
      </button>
    </article>

    <article id="bloque-experiencia" class="skills">
      <div class="skills-encabezado titulo-derecha">
        <h3>EXPERIENCIA Y SKILLS</h3>
        <p>
          Siempre estoy explorando nuevas herramientas para mejorar procesos y
          elevar la calidad visual de cada proyecto.
        </p>
      </div>

      <div class="skills-grid">
        <section class="skills-columna">
          <h4>Software skills</h4>
          <p>Illustrator, Lightroom, Figma, Canva, Notion, Premiere.</p>

          <h4>Creative skills</h4>
          <p>
            Branding, diseño editorial, diseño para redes sociales, dirección
            de arte, fotografía y edición visual.
          </p>

          <h4>Intereses</h4>
          <p>Arte digital, ilustración, fotografía, moda y música.</p>
        </section>

        <section class="skills-columna">
          <h4>Experiencia</h4>
          <p>
            Completar con proyectos reales, colaboraciones, trabajos freelance
            o prácticas relacionadas con diseño y branding.
          </p>

          <h4>Habilidades</h4>
          <p>Completar con tus habilidades profesionales.</p>

          <h4>Información profesional</h4>
          <p>Completar con experiencia, enfoque o propuesta de valor.</p>
        </section>
      </div>

      <button
        class="flecha-apartado"
        type="button"
        aria-label="Ir a formación"
        @click="irASeccion('bloque-formacion')"
      >
        ↓
      </button>
    </article>

    <article id="bloque-formacion" class="skills formacion">
      <div class="skills-encabezado titulo-izquierda">
        <h3>FORMACIÓN</h3>
        <p>
          Base académica y desarrollo continuo para consolidar mi perfil
          creativo y profesional.
        </p>
      </div>

      <div class="skills-grid">
        <section class="skills-columna">
          <h4>Estudios</h4>
          <p>Completar con tus estudios y cursos principales.</p>
        </section>

        <section class="skills-columna">
          <h4>Idiomas</h4>
          <p>
            Completar con idiomas, nivel y certificaciones si las tienes.
          </p>
        </section>
      </div>

      <button
        class="flecha-apartado"
        type="button"
        aria-label="Volver a sobre mí"
        @click="irASeccion('inicio-sobre-mi')"
      >
        ↑
      </button>
    </article>
  </section>
</template>

<style scoped>
.sobre-mi {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: #5a1a27;
}

.who-am-i {
  background: #f7f1f2;
  border-radius: 24px;
  padding: 1rem 1rem 4.4rem;
  min-height: min(82svh, 760px);
  display: flex;
  flex-direction: column;
  position: relative;
  scroll-margin-top: 1rem;
}

.who-contenido {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-radius: 20px;
  overflow: hidden;
  flex: 1;
}

.foto-mock {
  min-height: 260px;
  background: #6f1526;
  display: flex;
  align-items: end;
  justify-content: start;
  padding: 1rem;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.texto-who {
  padding: 0.9rem 0.8rem 0.7rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fffafb;
}

.etiqueta {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
}

.texto-who h2 {
  margin: 0.25rem 0 1rem;
  font-size: clamp(1.9rem, 8.5vw, 4.2rem);
  line-height: 0.9;
}

.bloque-descripcion {
  margin-top: auto;
}

.descripcion-grande {
  margin: 0 0 0.75rem;
  font-size: clamp(0.82rem, 1.25vw, 0.95rem);
  line-height: 1.34;
  max-width: 44ch;
  text-align: right;
}

.flecha-scroll {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background: #6f1526;
  color: #fff;
  font-size: 1.35rem;
  text-decoration: none;
  z-index: 2;
  cursor: pointer;
}

.skills {
  background: #f7f1f2;
  border-radius: 24px;
  padding: 1rem 1rem 4.4rem;
  min-height: min(82svh, 760px);
  display: flex;
  flex-direction: column;
  position: relative;
  scroll-margin-top: 1rem;
}

.skills-encabezado {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.titulo-derecha {
  text-align: right;
}

.titulo-izquierda {
  text-align: left;
}

.skills-encabezado h3 {
  margin: 0;
  font-size: clamp(2.1rem, 10vw, 5rem);
  line-height: 0.9;
  color: #6f1526;
}

.skills-encabezado p {
  margin: 0;
  font-size: 0.98rem;
  max-width: 52ch;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: auto;
}

.skills-columna {
  background: #fffafb;
  border-radius: 16px;
  padding: 1rem;
}

.skills-columna h4 {
  margin: 0.2rem 0;
  font-size: 1.06rem;
  text-transform: uppercase;
}

.skills-columna p {
  margin: 0 0 0.9rem;
  line-height: 1.45;
}

.flecha-apartado {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background: #6f1526;
  color: #fff;
  font-size: 1.35rem;
  text-decoration: none;
  z-index: 2;
  cursor: pointer;
}

@media (min-width: 900px) {
  .who-am-i,
  .skills {
    padding: 1.25rem;
  }

  .who-contenido {
    grid-template-columns: 42% 58%;
    align-items: stretch;
    position: relative;
    min-height: 100%;
  }

  .who-contenido::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 42%;
    width: 1px;
    background: rgba(255, 255, 255, 0.45);
  }

  .foto-mock {
    min-height: 100%;
  }

  .texto-who {
    min-height: 100%;
  }

  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
