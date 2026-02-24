<script setup lang="ts">
import { RouterLink } from "vue-router";

const sampleProjects = [
  { id: "1", title: "Proyecto 1", description: "Descripcion breve del trabajo." },
  { id: "2", title: "Proyecto 2", description: "Descripcion breve del trabajo." },
  { id: "3", title: "Proyecto 3", description: "Descripcion breve del trabajo." },
];
</script>

<template>
  <section>
    <h2>Proyectos</h2>
    <div class="projects-grid">
      <article v-for="project in sampleProjects" :key="project.id" class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
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
