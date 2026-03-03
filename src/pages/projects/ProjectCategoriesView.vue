<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const categorias = [
  { id: "branding", titulo: "BRANDING & LOGO" },
  { id: "social-media", titulo: "SOCIAL MEDIA DESIGN" },
  { id: "logotipos", titulo: "CLIENT TESTIMONIALS" },
];
</script>

<template>
  <section class="indice">
    <p class="titulo-editorial">Indice de contenido</p>

    <div class="lienzo-indice">
      <div class="bloque-centro">
        <div class="marca-indice">
          <p class="firma"><span class="letra-t">T</span><span class="resto-firma">abla</span></p>
          <p class="subfirma">de contenido</p>
        </div>

        <nav class="lista-indice" aria-label="Categorias de proyectos">
          <RouterLink
            v-for="categoria in categorias"
            :key="categoria.id"
            :to="`/portfolio/proyectos?categoria=${categoria.id}`"
            class="linea-indice"
          >
            <span>{{ categoria.titulo }}</span>
            <ArrowRight :size="18" />
          </RouterLink>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.indice {
  color: #5a1a27;
}

.titulo-editorial {
  margin: 0 0 0.65rem;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
}

.lienzo-indice {
  min-height: min(82svh, 760px);
  border-radius: 24px;
  background: #f4f1f2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bloque-centro {
  width: min(92%, 1080px);
}

.marca-indice {
  margin-left: auto;
  margin-right: clamp(0.5rem, 4vw, 2rem);
  margin-bottom: clamp(0.75rem, 2.5vh, 1.35rem);
  text-align: right;
  color: #6f1526;
}

.firma {
  margin: 0;
  font-size: clamp(2.4rem, 8vw, 5.1rem);
  line-height: 0.9;
}

.letra-t {
  font-family: "PinyonScriptLocal", "Pinyon Script", "Times New Roman", serif;
  display: inline-block;
  font-size: 1.95em;
  font-style: italic;
  font-weight: 400;
  line-height: 0.8;
  transform: translateY(0.01em);
}

.resto-firma {
  font-family: "MontserratLocal", "Montserrat", sans-serif;
  font-weight: 500;
  margin-left: 0.13em;
}

.subfirma {
  margin: -0.18rem 0 0;
  font-size: clamp(0.82rem, 2.05vw, 1.35rem);
  font-weight: 500;
  font-family: "MontserratLocal", "Montserrat", sans-serif;
}

.lista-indice {
  border-top: 1px solid rgba(111, 21, 38, 0.25);
  border-bottom: 1px solid rgba(111, 21, 38, 0.25);
}

.linea-indice {
  text-decoration: none;
  color: #6f1526;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  border-top: 1px solid rgba(111, 21, 38, 0.25);
  padding: 0.55rem 1rem;
  font-size: clamp(1.05rem, 2.6vw, 1.85rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.01em;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.linea-indice:first-child {
  border-top: 0;
}

.linea-indice:hover {
  background: #efe2e5;
  color: #5a1a27;
}

@media (min-width: 900px) {
  .lienzo-indice {
    min-height: min(88svh, 980px);
  }

  .linea-indice {
    padding: 0.62rem 1.45rem;
  }
}
</style>
