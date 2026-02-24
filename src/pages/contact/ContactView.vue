<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const sent = ref(false);

const submitForm = () => {
  sent.value = true;
};
</script>

<template>
  <section>
    <h2>Contacto</h2>
    <form class="contact-form" @submit.prevent="submitForm">
      <label>
        Nombre
        <input v-model="name" type="text" required />
      </label>
      <label>
        Email
        <input v-model="email" type="email" required />
      </label>
      <label>
        Mensaje
        <textarea v-model="message" rows="4" required />
      </label>
      <button type="submit">Enviar</button>
    </form>
    <p v-if="sent">Mensaje enviado (simulado).</p>
  </section>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 420px;
}
</style>
