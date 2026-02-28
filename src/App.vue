<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const x = ref(0);
const y = ref(0);
const visible = ref(false);

const moverSombra = (evento: MouseEvent) => {
  x.value = evento.clientX - 20;
  y.value = evento.clientY + 10;
  visible.value = true;
};

const ocultarSombra = () => {
  visible.value = false;
};

onMounted(() => {
  window.addEventListener("mousemove", moverSombra);
  window.addEventListener("mouseleave", ocultarSombra);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", moverSombra);
  window.removeEventListener("mouseleave", ocultarSombra);
});
</script>

<template>
  <main>
    <RouterView />
    <div
      class="sombra-raton"
      :class="{ visible }"
      :style="{ transform: `translate(${x}px, ${y}px)` }"
    />
  </main>
</template>

<style scoped>
.sombra-raton {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 22px;
  border-radius: 999px;
  background: rgba(40, 0, 8, 0.14);
  filter: blur(8px);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.14s ease;
  z-index: 9999;
}

.sombra-raton.visible {
  opacity: 1;
}

@media (hover: none), (pointer: coarse) {
  .sombra-raton {
    display: none;
  }
}
</style>
