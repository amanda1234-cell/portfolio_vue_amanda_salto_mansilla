<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="portfolio-layout">
    <header class="portfolio-header">
      <h1>Mi portfolio</h1>
      <nav class="portfolio-nav">
        <RouterLink to="/portfolio/proyectos">Proyectos</RouterLink>
        <RouterLink to="/portfolio/sobre-mi">Sobre mi</RouterLink>
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
}

.portfolio-nav {
  display: flex;
  gap: 1rem;
}

.portfolio-nav a {
  text-decoration: none;
  color: inherit;
}
</style>
