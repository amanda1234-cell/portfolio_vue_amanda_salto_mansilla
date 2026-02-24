<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const projectId = computed(() => String(route.params.id ?? ""));
</script>

<template>
  <section>
    <h2>Detalle del proyecto</h2>
    <p>Has abierto el proyecto con id: {{ projectId }}</p>
  </section>
</template>
