<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="relative mx-auto mt-3 flex min-h-[92svh] w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-300 bg-[#eceff5] px-6 py-8 text-center md:px-12 md:py-10"
  >
    <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
      Portfolio personal · Diseño Gráfico y Brand Designer
    </p>

    <div class="relative z-10">
      <h1
        class="portfolio-title text-[15vw] leading-[0.9] tracking-tight text-[#1239f6] sm:text-[5.2rem] md:text-[7rem]"
      >
        Portfolio
      </h1>

      <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
        <span
          class="rounded-full border border-[#1239f6] px-4 py-1 text-sm font-semibold uppercase tracking-wide text-[#1239f6]"
        >
          Diseño gráfico y digital
        </span>
        <span
          class="rounded-full border border-[#1239f6] px-4 py-1 text-sm font-semibold uppercase tracking-wide text-[#1239f6]"
        >
          2026
        </span>
      </div>

      <div class="mt-10 flex flex-wrap justify-center gap-3">
        <RouterLink
          to="/portfolio/proyectos"
          class="rounded-full bg-[#1239f6] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0e2fd0]"
        >
          Ver proyectos
        </RouterLink>
        <RouterLink
          to="/portfolio/sobre-mi"
          class="rounded-full border border-slate-400 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
        >
          Sobre mí
        </RouterLink>
        <RouterLink
          to="/portfolio/contacto"
          class="rounded-full border border-slate-400 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
        >
          Contacto
        </RouterLink>
      </div>
    </div>

    <p class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-slate-400 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">(insertar logo iniciales)</p>
  </section>
</template>

<style scoped>
.portfolio-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
</style>

