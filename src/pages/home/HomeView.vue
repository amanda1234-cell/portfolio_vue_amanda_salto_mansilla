<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="relative mx-auto mt-3 flex min-h-[92svh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-300 bg-[#eceff5] px-6 py-8 md:px-12 md:py-10"
  >
    <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
      Portfolio personal · Diseño web y apps interactivas
    </p>

    <span
      class="pointer-events-none absolute left-4 top-[29%] text-[20vw] font-medium italic leading-none text-blue-200/55 md:left-10 md:text-[11rem]"
      aria-hidden="true"
    >
      Portfolio
    </span>

    <div class="relative z-10 my-auto">
      <h1
        class="text-[19vw] font-black leading-[0.86] tracking-tight text-[#1239f6] sm:text-[7rem] md:text-[9.2rem]"
      >
        Portfolio
      </h1>

      <div class="mt-4 flex flex-wrap items-center gap-3">
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

      <div class="mt-6 flex flex-wrap gap-3">
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

    <p
      class="mx-auto mt-auto rounded-full border border-slate-400 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700"
    >
      (insertar logo iniciales)
    </p>
  </section>
</template>

