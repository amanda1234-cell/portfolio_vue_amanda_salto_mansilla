<script setup lang="ts">
import { CalendarDays, FolderKanban, MoveRight } from "lucide-vue-next";
import { projects as proyectos } from "@/data/projects";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="proyectos">
    <h2 class="titulo-editorial">Proyectos</h2>
    <div class="projects-grid">
      <article v-for="proyecto in proyectos" :key="proyecto.id" class="project-card">
        <div class="card-cabecera">
          <span class="icono-cabecera"><FolderKanban :size="18" /></span>
          <h3>{{ proyecto.title }}</h3>
        </div>

        <p class="card-texto">{{ proyecto.description }}</p>

        <p class="meta"><CalendarDays :size="18" /><strong>Año:</strong> {{ proyecto.year }}</p>

        <RouterLink :to="`/portfolio/proyectos/${proyecto.id}`" class="enlace-detalle">
          Ver detalle
          <MoveRight :size="18" />
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.titulo-editorial {
  margin: 0 0 0.65rem;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
}

.proyectos {
  padding: 0;
  color: #5a1a27;
  display: flex;
  flex-direction: column;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
}

.project-card {
  border-radius: 16px;
  padding: 1rem;
  background: #fffafb;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow:
    0 8px 20px rgba(111, 21, 38, 0.08),
    0 2px 6px rgba(111, 21, 38, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 14px 28px rgba(111, 21, 38, 0.12),
    0 4px 10px rgba(111, 21, 38, 0.1);
}

.card-cabecera {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.card-cabecera h3 {
  margin: 0;
  font-size: 1.05rem;
}

.icono-cabecera {
  display: inline-flex;
  color: #6f1526;
}

.card-texto {
  margin: 0;
  line-height: 1.4;
}

.meta {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.enlace-detalle {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  width: fit-content;
  border-radius: 999px;
  background: #efe2e5;
  color: #5a1a27;
  padding: 0.48rem 0.85rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.enlace-detalle:hover {
  background: #e8d7db;
  color: #6f1526;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1100px) {
  .projects-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
