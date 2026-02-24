<template>
  <section class="about">
    <h2>Sobre mi</h2>

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
      <h3>Informacion profesional</h3>
      <div class="blank-space" />
    </article>

    <p>
      Joven profesional y creativa, disenadora web, grafica y brand designer.
      Violinista profesional con gran sensibilidad estetica. Me adapto con
      facilidad a distintos retos de trabajo y ambientes.
    </p>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.about-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
}

.blank-space {
  min-height: 72px;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
