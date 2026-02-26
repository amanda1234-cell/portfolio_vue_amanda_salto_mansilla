<script setup lang="ts">
import { projects as proyectos } from "@/data/projects";
</script>

<template>
  <section class="proyectos">
    <h2>Proyectos</h2>
    <div class="projects-grid">
      <article v-for="proyecto in proyectos" :key="proyecto.id" class="project-card">
        <p><strong>Año:</strong> {{ proyecto.year }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.proyectos {
  background: #f7f1f2;
  border: 1px solid #b88e96;
  border-radius: 16px;
  padding: 0.85rem;
  color: #5a1a27;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.project-card {
  border: 1px solid #b88e96;
  border-radius: 10px;
  padding: 0.85rem;
  background: #fffafb;
}

@media (min-width: 768px) {
  .proyectos {
    padding: 1rem;
  }

  .project-card {
    padding: 1rem;
  }
}
</style>
