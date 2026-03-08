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
  <div class="franja-contacto" aria-label="Contacto">
    <div class="franja-pista">
      <span class="franja-texto">@_.amaandaa__ amanda.s.mansilla@gmail.com</span>
      <span class="franja-texto">@_.amaandaa__ amanda.s.mansilla@gmail.com</span>
      <span class="franja-texto">@_.amaandaa__ amanda.s.mansilla@gmail.com</span>
      <span class="franja-texto">@_.amaandaa__ amanda.s.mansilla@gmail.com</span>
    </div>
  </div>

  <main class="contenido-app">
    <RouterView />
    <div
      class="sombra-raton"
      :class="{ visible }"
      :style="{ transform: `translate(${x}px, ${y}px)` }"
    />
  </main>
</template>

<style scoped>
.franja-contacto {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 24px;
  overflow: hidden;
  border-bottom: 1px solid rgba(115, 14, 14, 0.22);
  background: #fff;
  z-index: 10000;
}

.franja-pista {
  display: flex;
  align-items: center;
  width: max-content;
  min-width: 100%;
  height: 100%;
  animation: deslizar-franja 24s linear infinite;
}

.franja-texto {
  flex: 0 0 auto;
  white-space: nowrap;
  margin-right: 2rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #730e0e;
}

.contenido-app {
  padding-top: 24px;
}

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

@keyframes deslizar-franja {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
