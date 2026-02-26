<template>
  <section class="about">
    <h2>Sobre mí</h2>

    <div class="about-grid">
      <article class="about-card">
        <h3>Estudios</h3>
        <div class="blank-space" />
      </article>

      <article class="about-card">
        <h3>Habilidades</h3>
        <div class="blank-space" />
      </article>
    </div>

    <article class="about-card">
      <h3>Información profesional</h3>
      <div class="blank-space" />
    </article>

    <p>
      Joven profesional y creativa, diseñadora web, gráfica y brand designer.
      Violinista profesional con gran sensibilidad estética. Me adapto con
      facilidad a distintos retos de trabajo y ambientes.
    </p>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f7f1f2;
  border: 1px solid #b88e96;
  border-radius: 16px;
  padding: 0.85rem;
  color: #5a1a27;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.about-card {
  border: 1px solid #b88e96;
  border-radius: 10px;
  padding: 0.85rem;
  background: #fffafb;
}

.blank-space {
  min-height: 72px;
}

@media (min-width: 768px) {
  .about {
    padding: 1rem;
  }

  .about-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-card {
    padding: 1rem;
  }
}
</style>

