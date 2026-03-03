<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CalendarDays, ExternalLink, Layers } from "lucide-vue-next";
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { projects as proyectos } from "@/data/projects";

const ruta = useRoute();
const idProyecto = computed(() => String(ruta.params.id ?? ""));
const proyecto = computed(() => proyectos.find((item) => item.id === idProyecto.value));
</script>

<template>
  <section class="detalle">
    <Card v-if="proyecto" class="detalle-card">
      <p class="titulo-editorial">Proyecto</p>
      <h2 class="titulo-proyecto">{{ proyecto.title }}</h2>
      <p class="descripcion">{{ proyecto.description }}</p>

      <div class="metadatos">
        <p class="meta-item"><CalendarDays :size="18" />Año: {{ proyecto.year }}</p>
        <p class="meta-item"><Layers :size="18" />Tecnologías: {{ proyecto.technologies.join(", ") }}</p>
      </div>

      <div class="acciones">
        <a :href="proyecto.liveUrl" target="_blank" rel="noreferrer" class="enlace-externo">
          <Button class="boton-accion">
            Ver proyecto
            <ExternalLink :size="18" />
          </Button>
        </a>

        <RouterLink to="/portfolio/proyectos">
          <Button class="boton-secundario">
            <ArrowLeft :size="18" />
            Volver a proyectos
          </Button>
        </RouterLink>
      </div>
    </Card>

    <Card v-else class="detalle-card">
      <p class="titulo-editorial">Proyecto</p>
      <h2 class="titulo-proyecto">Proyecto no encontrado</h2>
      <p class="descripcion">No existe un proyecto con el id: {{ idProyecto }}</p>
      <RouterLink to="/portfolio/proyectos">
        <Button class="boton-secundario">
          <ArrowLeft :size="18" />
          Volver a proyectos
        </Button>
      </RouterLink>
    </Card>
  </section>
</template>

<style scoped>
.detalle {
  color: #5a1a27;
  min-height: min(82svh, 760px);
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: 0 auto;
}

.detalle-card {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.titulo-editorial {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
}

.titulo-proyecto {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.1;
}

.descripcion {
  margin: 0;
  line-height: 1.5;
}

.metadatos {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.meta-item {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 0.25rem;
}

.enlace-externo {
  text-decoration: none;
}

.acciones :deep(button) {
  width: 100%;
  justify-content: center;
}

.boton-accion {
  border-radius: 12px;
  border: 0;
  background: #6f1526;
  color: #fff;
}

.boton-accion:hover {
  background: #58101e;
}

.boton-secundario {
  border-radius: 12px;
  border: 1px solid #dcc5cb;
  background: #fffafb;
  color: #5a1a27;
}

.boton-secundario:hover {
  background: #efe2e5;
}

@media (min-width: 768px) {
  .detalle {
    min-height: min(88svh, 900px);
  }

  .detalle-card {
    padding: 1.25rem;
  }

  .titulo-proyecto {
    font-size: 1.85rem;
  }

  .acciones :deep(button) {
    width: auto;
  }
}
</style>
