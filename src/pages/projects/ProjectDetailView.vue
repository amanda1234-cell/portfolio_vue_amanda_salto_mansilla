<script setup lang="ts">
const huecos = [1, 2, 3];
</script>

<template>
  <section class="detalle-galeria">
    <article v-for="hueco in huecos" :key="hueco" class="recuadro-foto">
      <div class="marco-interno">
        <span>INSERTAR FOTO {{ hueco }}</span>
      </div>
    </article>
  </section>
</template>

<style scoped>
.detalle-galeria {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #5a1a27;
}

.recuadro-foto {
  min-height: min(88svh, 900px);
  width: 100%;
  border-radius: 24px;
  background: #f7f1f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.9rem, 2.4vw, 1.6rem);
}

.marco-interno {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px dashed rgba(111, 21, 38, 0.35);
  background: #fffafb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.recuadro-foto span {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #6f1526;
}

@media (max-width: 767px) {
  .recuadro-foto {
    min-height: min(82svh, 760px);
  }
}
</style>
