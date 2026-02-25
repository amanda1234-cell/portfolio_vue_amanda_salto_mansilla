<script setup lang="ts">
import { projects as proyectos } from "@/data/projects";
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const ruta = useRoute();
const idProyecto = computed(() => String(ruta.params.id ?? ""));
const proyecto = computed(() =>
  proyectos.find((item) => item.id === idProyecto.value),
);
</script>

<template>
  <section v-if="proyecto">
    <h2>Detalle del proyecto</h2>
    <h3>{{ proyecto.title }}</h3>
    <p>{{ proyecto.description }}</p>
    <p><strong>Año:</strong> {{ proyecto.year }}</p>
    <p><strong>Tecnologías:</strong> {{ proyecto.technologies.join(", ") }}</p>
    <a :href="proyecto.liveUrl" target="_blank" rel="noreferrer">Ver proyecto</a>
    <p>
      <RouterLink to="/portfolio/proyectos">Volver a proyectos</RouterLink>
    </p>
  </section>

  <section v-else>
    <h2>Proyecto no encontrado</h2>
    <p>No existe un proyecto con el id: {{ idProyecto }}</p>
    <RouterLink to="/portfolio/proyectos">Volver a proyectos</RouterLink>
  </section>
</template>
