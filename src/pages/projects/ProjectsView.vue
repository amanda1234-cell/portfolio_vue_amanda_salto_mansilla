<script setup lang="ts">
import { projects as proyectos } from "@/data/projects";
</script>

<template>
  <section>
    <h2>Proyectos</h2>
    <div class="projects-grid">
      <article v-for="proyecto in proyectos" :key="proyecto.id" class="project-card">
        <p><strong>Año:</strong> {{ proyecto.year }}</p>
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
