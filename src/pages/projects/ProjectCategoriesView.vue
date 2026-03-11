<script setup lang="ts">
import { categoryLabels, type ProjectCategory } from "@/data/projects";
import { ArrowRight } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const categoriasOcultas: ProjectCategory[] = ["ilustracion-digital", "ilustracion-grafica"];

const categorias = (Object.entries(categoryLabels) as [ProjectCategory, string][]).map(
  ([id, titulo]) => ({
    id,
    titulo: titulo.toUpperCase(),
  }),
).filter((categoria) => !categoriasOcultas.includes(categoria.id));

const totalCategorias = categorias.length;
</script>

<template>
  <section class="indice">
    <p class="titulo-editorial">Índice de contenido</p>

    <div class="lienzo-indice">
      <div class="bloque-centro">
        <div class="marca-indice">
          <p class="firma"><span class="letra-t">T</span><span class="resto-firma">abla</span></p>
          <p class="subfirma">de contenido</p>
        </div>

        <nav
          class="lista-indice"
          :style="{ '--n-categorias': totalCategorias }"
          aria-label="Categorías de proyectos"
        >
          <RouterLink
            v-for="categoria in categorias"
            :key="categoria.id"
            :to="`/portfolio/proyectos?categoria=${categoria.id}`"
            class="linea-indice"
          >
            <span>{{ categoria.titulo }}</span>
            <ArrowRight :size="21" />
          </RouterLink>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.indice {
  color: #ffffff;
}

.titulo-editorial {
  margin: 0 0 0.3rem;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 1;
  font-weight: 700;
  color: #ff0a8a;
}

.lienzo-indice {
  min-height: calc(100svh - 165px);
  border-radius: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bloque-centro {
  width: min(92%, 1080px);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0.25rem;
}

.marca-indice {
  margin-left: auto;
  margin-right: clamp(0.5rem, 4vw, 2rem);
  margin-bottom: clamp(0.3rem, 1.2vh, 0.7rem);
  text-align: right;
  color: #ff0a8a;
}

.firma {
  margin: 0;
  font-size: clamp(2.4rem, 8vw, 5.1rem);
  line-height: 0.9;
}

.letra-t {
  font-family: "Bickham Script Pro", "PinyonScriptLocal", "Times New Roman", serif;
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
  font-weight: 700;
  font-family: "MontserratLocal", "Montserrat", sans-serif;
}

.lista-indice {
  --n-categorias: 5;
  border-top: 1px solid rgba(255, 10, 138, 0.45);
  border-bottom: 1px solid rgba(255, 10, 138, 0.45);
  height: 100%;
  display: grid;
  grid-template-rows: repeat(var(--n-categorias), minmax(0, 1fr));
  align-items: stretch;
  min-height: 0;
}

.linea-indice {
  text-decoration: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  border-top: 1px solid rgba(255, 10, 138, 0.45);
  min-height: clamp(2.45rem, 6.1vh, 3.7rem);
  padding: clamp(0.28rem, 0.72vh, 0.45rem) clamp(0.9rem, 1.7vw, 1.35rem);
  font-size: clamp(0.96rem, calc(4.7svh / var(--n-categorias) + 0.36rem), 1.45rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.02em;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.linea-indice span {
  font-family: "MontserratLocal", "Montserrat", sans-serif;
  font-weight: 700;
}

.linea-indice:first-child {
  border-top: 0;
}

.linea-indice:hover {
  background: #111111;
  color: #ffffff;
}

@media (min-width: 900px) {
  .lienzo-indice {
    min-height: calc(100svh - 180px);
  }

  .linea-indice {
    min-height: clamp(2.8rem, 6.6vh, 4rem);
    padding: clamp(0.35rem, 0.8vh, 0.55rem) clamp(1.05rem, 2vw, 1.6rem);
  }
}
</style>

