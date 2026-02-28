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
  padding: 1rem;
  max-width: 1320px;
  margin: 0 auto;
  color: #5a1a27;
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
  background: #efe2e5;
  border-radius: 999px;
  color: #5a1a27;
  transition: all 0.2s ease;
}

.home-link:hover {
  background: #efe2e5;
  color: #6f1526;
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
  color: #6f1526;
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
