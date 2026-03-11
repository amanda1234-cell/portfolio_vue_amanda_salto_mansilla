<script setup lang="ts">
import { House } from "lucide-vue-next";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="portfolio-layout">
    <header class="portfolio-header">
      <div class="header-left">
        <RouterLink to="/" class="home-link" aria-label="Volver al inicio">
          <House :size="16" />
        </RouterLink>
        <h1 class="site-title">Mi portfolio</h1>
      </div>
      <nav class="portfolio-nav">
        <RouterLink to="/portfolio/proyectos" class="nav-boton">PROYECTOS</RouterLink>
        <RouterLink to="/portfolio/sobre-mi" class="nav-boton">SOBRE MÍ</RouterLink>
        <RouterLink to="/portfolio/contacto" class="nav-boton">CONTACTO</RouterLink>
      </nav>
    </header>

    <RouterView />
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

.portfolio-layout {
  padding: 1rem;
  color: #ffffff;
  width: 100%;
}

.portfolio-layout :deep(p),
.portfolio-layout :deep(li),
.portfolio-layout :deep(label),
.portfolio-layout :deep(input),
.portfolio-layout :deep(textarea),
.portfolio-layout :deep(small),
.portfolio-layout :deep(.campo-titulo),
.portfolio-layout :deep(.pdf-link),
.portfolio-layout :deep(.pdf-fallback-text),
.portfolio-layout :deep(.filtro-activo),
.portfolio-layout :deep(.descripcion-proyecto),
.portfolio-layout :deep(.meta),
.portfolio-layout :deep(.herramientas-titulo),
.portfolio-layout :deep(.sin-resultados p) {
  font-family: "PoppinsLocal", sans-serif;
}

.portfolio-layout :deep(.nombre-firma) {
  font-family: "above-the-sky-script", "Bickham Script Pro", cursive;
}

.portfolio-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.home-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: #111111;
  border-radius: 999px;
  color: #ffffff;
  transition: all 0.2s ease;
}

.home-link:hover {
  background: #1a1a1a;
  color: #ffffff;
}

.site-title {
  margin: 0;
  font-size: 1.1rem;
}

.portfolio-nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.portfolio-nav a {
  text-decoration: none;
  color: inherit;
  font-family: "MontserratLocal", "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.84rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.nav-boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.42rem 0.82rem;
  border-radius: 999px;
  background: #111111;
  border: 1px solid rgba(255, 10, 138, 0.22);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.nav-boton:hover {
  background: #1a1a1a;
  border-color: rgba(255, 10, 138, 0.34);
}

.portfolio-nav a.router-link-active {
  color: #ffffff;
  background: #ff0a8a;
  border-color: #ffffff;
  color: #fff;
}

@media (min-width: 768px) {
  .portfolio-layout {
    padding: 1.5rem;
  }
}

@media (max-width: 640px) {
  .portfolio-header {
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .portfolio-nav {
    width: 100%;
    gap: 0.75rem;
  }

  .portfolio-nav a {
    font-size: 0.95rem;
  }
}
</style>

