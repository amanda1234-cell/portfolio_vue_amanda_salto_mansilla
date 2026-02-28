<script setup lang="ts">
import { ArrowRight, Layers3 } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const categorias = [
  {
    id: "branding",
    titulo: "Branding",
    descripcion: "Identidad visual, naming, tono de marca y piezas clave.",
  },
  {
    id: "logotipos",
    titulo: "Logotipos",
    descripcion: "Sistemas de logotipo, versiones y aplicaciones base.",
  },
  {
    id: "social-media",
    titulo: "Social Media",
    descripcion: "Creatividades para redes, campañas y contenido visual.",
  },
];
</script>

<template>
  <section class="categorias">
    <h2 class="titulo-editorial">Categorías de proyectos</h2>

    <div class="categorias-grid">
      <article v-for="categoria in categorias" :key="categoria.id" class="categoria-card">
        <div class="card-cabecera">
          <Layers3 :size="18" />
          <h3>{{ categoria.titulo }}</h3>
        </div>
        <p>{{ categoria.descripcion }}</p>
        <RouterLink :to="`/portfolio/proyectos?categoria=${categoria.id}`" class="enlace-categoria">
          Explorar
          <ArrowRight :size="18" />
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.categorias {
  color: #5a1a27;
}

.titulo-editorial {
  margin: 0 0 0.65rem;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
}

.categorias-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.categoria-card {
  border-radius: 16px;
  padding: 1rem;
  background: #fffafb;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  box-shadow:
    0 8px 20px rgba(111, 21, 38, 0.08),
    0 2px 6px rgba(111, 21, 38, 0.08);
}

.card-cabecera {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.card-cabecera h3 {
  margin: 0;
  font-weight: 700;
}

.categoria-card p {
  margin: 0;
  line-height: 1.4;
}

.enlace-categoria {
  margin-top: auto;
  width: fit-content;
  border-radius: 999px;
  background: #efe2e5;
  color: #5a1a27;
  text-decoration: none;
  padding: 0.45rem 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.enlace-categoria:hover {
  background: #e8d7db;
  color: #6f1526;
}

@media (min-width: 860px) {
  .categorias-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
