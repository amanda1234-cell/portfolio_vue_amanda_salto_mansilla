<template>
  <section class="about">
    <h2>Sobre mí</h2>
    <p>
      Soy una diseñadora y desarrolladora web en formación, enfocada en crear
      interfaces limpias, útiles y adaptadas a distintos dispositivos.
    </p>

    <div class="about-grid">
      <article class="about-card">
        <h3>Estudios</h3>
        <ul>
          <li>Grado en Diseño Web y Apps Interactivas (en curso)</li>
          <li>Curso de UX/UI y prototipado en Figma</li>
          <li>Formación en maquetación responsive con HTML y CSS</li>
        </ul>
      </article>

      <article class="about-card">
        <h3>Habilidades</h3>
        <ul>
          <li>Vue 3 con TypeScript</li>
          <li>Maquetación con Flexbox y Grid</li>
          <li>Diseño de interfaces y sistemas visuales</li>
          <li>Organización de proyectos con Git y GitHub</li>
        </ul>
      </article>
    </div>

    <article class="about-card">
      <h3>Información profesional</h3>
      <p>
        Me interesa combinar diseño y desarrollo frontend para construir
        experiencias visuales consistentes y funcionales.
      </p>
    </article>
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

ul {
  padding-left: 1.2rem;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
