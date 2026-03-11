<script setup lang="ts">
import { BriefcaseBusiness, Mail, UserRound } from "lucide-vue-next";
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="relative flex min-h-[88svh] w-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-8 pb-20 text-center sm:px-6 md:min-h-[96svh] md:px-12 md:py-10"
  >
    <div class="relative z-10">
      <div class="titulo-wrap">
        <h1 class="portfolio-title text-[15vw] leading-[0.9] tracking-tight text-[#ff0a8a] sm:text-[5.2rem] md:text-[7rem]">
          <span class="letra-p">P</span><span class="resto">ortfolio</span>
        </h1>
        <p class="subtitulo-profesion">Diseñadora gráfica y Brand Designer</p>
      </div>

      <div class="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center md:mt-21">
        <RouterLink
          to="/portfolio/proyectos/categorias"
          class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff0a8a] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#c7006d] sm:w-auto"
        >
          <BriefcaseBusiness :size="18" />
          Ver proyectos
        </RouterLink>
        <RouterLink
          to="/portfolio/sobre-mi"
          class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff0a8a] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#c7006d] sm:w-auto"
        >
          <UserRound :size="18" />
          Sobre mí
        </RouterLink>
        <RouterLink
          to="/portfolio/contacto"
          class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff0a8a] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#c7006d] sm:w-auto"
        >
          <Mail :size="18" />
          Contacto
        </RouterLink>
      </div>
    </div>

    <p class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#111111] px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#ff0a8a]">(insertar logo iniciales)</p>
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
  font-family: "Bickham Script Pro", "PinyonScriptLocal", "Times New Roman", serif;
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
  color: #ffffff;
  margin-top: -0.55rem;
}
</style>

