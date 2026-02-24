<script setup lang="ts">
import { projects } from "@/data/projects";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";

const route = useRoute();
const projectId = computed(() => String(route.params.id ?? ""));
const project = computed(() =>
  projects.find((item) => item.id === projectId.value),
);
</script>

<template>
  <section v-if="project">
    <h2>Detalle del proyecto</h2>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <p><strong>Anio:</strong> {{ project.year }}</p>
    <p><strong>Tecnologias:</strong> {{ project.technologies.join(", ") }}</p>
    <a :href="project.liveUrl" target="_blank" rel="noreferrer">Ver proyecto</a>
    <p>
      <RouterLink to="/portfolio/proyectos">Volver a proyectos</RouterLink>
    </p>
  </section>

  <section v-else>
    <h2>Proyecto no encontrado</h2>
    <p>No existe un proyecto con el id: {{ projectId }}</p>
    <RouterLink to="/portfolio/proyectos">Volver a proyectos</RouterLink>
  </section>
</template>
