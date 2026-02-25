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
        <RouterLink to="/portfolio/proyectos">Proyectos</RouterLink>
        <RouterLink to="/portfolio/sobre-mi">Sobre mí</RouterLink>
        <RouterLink to="/portfolio/contacto">Contacto</RouterLink>
      </nav>
    </header>

    <RouterView />
  </section>
</template>

<style scoped>
.portfolio-layout {
  padding: 1.5rem;
  max-width: 960px;
  margin: 0 auto;
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
  border: 1px solid #d0d5dd;
  border-radius: 999px;
  color: #344054;
  transition: all 0.2s ease;
}

.home-link:hover {
  background: #eef2ff;
  color: #1239f6;
  border-color: #1239f6;
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
  font-weight: 600;
}

.portfolio-nav a.router-link-active {
  color: #1239f6;
}
</style>
