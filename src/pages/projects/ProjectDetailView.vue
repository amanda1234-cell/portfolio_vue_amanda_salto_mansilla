<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-vue-next";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { projects as proyectos } from "@/data/projects";

const ruta = useRoute();
const idProyecto = computed(() => String(ruta.params.id ?? ""));
const proyecto = computed(() => proyectos.find((item) => item.id === idProyecto.value));

const slots = computed(() => {
  if (proyecto.value?.gallery?.length) {
    return proyecto.value.gallery.slice(0, 3);
  }
  return [{}, {}, {}];
});
</script>

<template>
  <section class="detalle-galeria">
    <RouterLink to="/portfolio/proyectos" class="volver">
      <Button class="boton-volver">
        <ArrowLeft :size="18" />
        Volver a proyectos
      </Button>
    </RouterLink>

    <article v-for="(slot, indice) in slots" :key="`${idProyecto}-${indice}`" class="recuadro-foto">
      <div class="marco-interno">
        <template v-if="'src' in slot && slot.src">
          <iframe
            v-if="slot.type === 'pdf'"
            :src="slot.src"
            title="Portfolio campaign"
            class="media-insertada"
          />
          <img
            v-else
            :src="slot.src"
            :alt="`Pieza ${indice + 1} del proyecto`"
            class="media-insertada"
            :style="{ objectPosition: slot.objectPosition ?? 'center center' }"
          />
        </template>
        <span v-else>INSERTAR FOTO {{ indice + 1 }}</span>
      </div>
    </article>

    <RouterLink to="/portfolio/proyectos" class="volver">
      <Button class="boton-volver">
        <ArrowLeft :size="18" />
        Volver a proyectos
      </Button>
    </RouterLink>
  </section>
</template>

<style scoped>
.detalle-galeria {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #730e0e;
}

.volver {
  text-decoration: none;
}

.boton-volver {
  border-radius: 12px;
  border: 1px solid #dcc5cb;
  background: #ffffff;
  color: #730e0e;
}

.boton-volver:hover {
  background: #efe2e5;
  color: #730e0e;
}

.recuadro-foto {
  min-height: min(88svh, 900px);
  width: 100%;
  border-radius: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.9rem, 2.4vw, 1.6rem);
}

.marco-interno {
  width: 100%;
  height: 100%;
  border-radius: 0;
  border: 1px dashed rgba(115, 14, 14, 0.45);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.media-insertada {
  width: 100%;
  height: 100%;
  border: 0;
  object-fit: cover;
}

.recuadro-foto span {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #730e0e;
}

@media (max-width: 767px) {
  .recuadro-foto {
    min-height: min(82svh, 760px);
  }
}
</style>
