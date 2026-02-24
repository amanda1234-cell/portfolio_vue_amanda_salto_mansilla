<script setup lang="ts">
import { projects } from "@/data/projects";
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <h2>Proyectos</h2>
    <div class="projects-grid">
      <article v-for="project in projects" :key="project.id" class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p><strong>Anio:</strong> {{ project.year }}</p>
        <RouterLink :to="`/portfolio/proyectos/${project.id}`">Ver detalle</RouterLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.project-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
}
</style>
