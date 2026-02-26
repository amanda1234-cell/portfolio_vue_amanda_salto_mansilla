<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="relative mx-auto mt-3 flex min-h-[88svh] w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#f7f1f2] px-4 py-8 pb-20 text-center sm:px-6 md:min-h-[92svh] md:px-12 md:py-10"
  >
    <div class="relative z-10">
      <div class="titulo-wrap">
        <h1 class="portfolio-title text-[15vw] leading-[0.9] tracking-tight text-[#6f1526] sm:text-[5.2rem] md:text-[7rem]">
          <span class="letra-p">P</span><span class="resto">ortfolio</span>
        </h1>
        <p class="subtitulo-profesion">Diseñadora gráfica y Brand Designer</p>
      </div>

      <div class="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center md:mt-[5.25rem]">
        <RouterLink
          to="/portfolio/proyectos"
          class="w-full rounded-full bg-[#6f1526] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#58101e] sm:w-auto"
        >
          Ver proyectos
        </RouterLink>
        <RouterLink
          to="/portfolio/sobre-mi"
          class="w-full rounded-full bg-[#efe2e5] px-5 py-2 text-sm font-semibold text-[#5a1a27] transition hover:bg-[#e8d7db] sm:w-auto"
        >
          Sobre mí
        </RouterLink>
        <RouterLink
          to="/portfolio/contacto"
          class="w-full rounded-full bg-[#efe2e5] px-5 py-2 text-sm font-semibold text-[#5a1a27] transition hover:bg-[#e8d7db] sm:w-auto"
        >
          Contacto
        </RouterLink>
      </div>
    </div>

    <p class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#efe2e5] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f1526]">(insertar logo iniciales)</p>
  </section>
</template>

<style scoped>
.portfolio-title {
  font-family: "MontserratLocal", "Montserrat", sans-serif;
  font-weight: 500;
}

.titulo-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.05rem;
}

.letra-p {
  font-family: "PinyonScriptLocal", "Pinyon Script", "Times New Roman", serif;
  display: inline-block;
  font-size: 1.95em;
  font-style: italic;
  font-weight: 400;
  line-height: 0.8;
  transform: translateY(0.01em);
}

.resto {
  margin-left: 0.02em;
}

.subtitulo-profesion {
  align-self: flex-end;
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
  color: #6f1526;
  margin-top: -0.55rem;
}
</style>
