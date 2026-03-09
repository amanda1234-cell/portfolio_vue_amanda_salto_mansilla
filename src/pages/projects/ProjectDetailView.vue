<script setup lang="ts">
import { projects as proyectos } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-vue-next";
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{
  id: string;
}>();

const idProyecto = computed(() => props.id ?? "");
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
          <template v-if="slot.type === 'pdf'">
            <div class="pdf-wrapper">
              <object :data="slot.src" type="application/pdf" class="media-insertada">
                <p class="pdf-fallback-text">
                  No se pudo previsualizar el PDF.
                  <a :href="slot.src" target="_blank" rel="noopener noreferrer">Abrir PDF</a>
                </p>
              </object>
              <a :href="slot.src" target="_blank" rel="noopener noreferrer" class="pdf-link">
                Abrir PDF en otra pestana
              </a>
            </div>
          </template>
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

.pdf-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pdf-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.8rem;
  border-top: 1px solid rgba(115, 14, 14, 0.25);
  color: #730e0e;
  background: #fff;
  text-decoration: none;
  font-weight: 700;
}

.pdf-fallback-text {
  margin: 0;
  padding: 0.9rem;
  text-align: center;
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
