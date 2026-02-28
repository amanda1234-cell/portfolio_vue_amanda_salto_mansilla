<script setup lang="ts">
import { CalendarDays, FolderKanban, MoveRight } from "lucide-vue-next";
import { projects as proyectos } from "@/data/projects";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="proyectos">
    <h2>Proyectos</h2>
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
.proyectos {
  background: #f7f1f2;
  border-radius: 16px;
  padding: 0.85rem;
  color: #5a1a27;
  min-height: min(82svh, 760px);
  display: flex;
  flex-direction: column;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.project-card {
  border-radius: 10px;
  padding: 0.9rem;
  background: #fffafb;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
  .proyectos {
    padding: 1.25rem;
    min-height: min(88svh, 900px);
  }

  .project-card {
    padding: 1rem;
  }
}
</style>
