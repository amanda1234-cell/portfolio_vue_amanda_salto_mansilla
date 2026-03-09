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
.portfolio-layout {
  padding: 1rem;
  color: #730e0e;
  width: 100%;
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
  color: #730e0e;
  transition: all 0.2s ease;
}

.home-link:hover {
  background: #e8d7db;
  color: #730e0e;
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
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.nav-boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.95rem;
  border-radius: 999px;
  background: #efe2e5;
  border: 1px solid rgba(115, 14, 14, 0.22);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.nav-boton:hover {
  background: #e8d7db;
  border-color: rgba(115, 14, 14, 0.34);
}

.portfolio-nav a.router-link-active {
  color: #730e0e;
  background: #730e0e;
  border-color: #730e0e;
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
