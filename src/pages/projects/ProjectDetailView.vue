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
  <section v-if="proyecto" class="detalle">
    <h2>Detalle del proyecto</h2>
    <h3>{{ proyecto.title }}</h3>
    <p>{{ proyecto.description }}</p>
    <p><strong>Año:</strong> {{ proyecto.year }}</p>
    <p><strong>Tecnologías:</strong> {{ proyecto.technologies.join(", ") }}</p>
    <a class="enlace" :href="proyecto.liveUrl" target="_blank" rel="noreferrer">Ver proyecto</a>
    <p>
      <RouterLink to="/portfolio/proyectos">Volver a proyectos</RouterLink>
    </p>
  </section>

  <section v-else class="detalle">
    <h2>Proyecto no encontrado</h2>
    <p>No existe un proyecto con el id: {{ idProyecto }}</p>
    <RouterLink to="/portfolio/proyectos">Volver a proyectos</RouterLink>
  </section>
</template>

<style scoped>
.detalle {
  background: #f7f1f2;
  border-radius: 16px;
  padding: 0.85rem;
  color: #5a1a27;
  min-height: min(82svh, 760px);
  display: flex;
  flex-direction: column;
}

.detalle a {
  color: #6f1526;
  font-weight: 600;
}

.enlace {
  text-decoration: underline;
}

@media (min-width: 768px) {
  .detalle {
    padding: 1.25rem;
    min-height: min(88svh, 900px);
  }
}
</style>
