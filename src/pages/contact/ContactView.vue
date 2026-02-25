<script setup lang="ts">
import { reactive, ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const sent = ref(false);
const errors = reactive({
  name: "",
  email: "",
  message: "",
});

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validateForm = () => {
  errors.name = name.value.trim() ? "" : "El nombre es obligatorio.";
  errors.email = isValidEmail(email.value)
    ? ""
    : "Introduce un email válido.";
  errors.message =
    message.value.trim().length >= 10
      ? ""
      : "El mensaje debe tener al menos 10 caracteres.";

  return !errors.name && !errors.email && !errors.message;
};

const submitForm = () => {
  sent.value = false;
  if (!validateForm()) {
    return;
  }
  sent.value = true;
  name.value = "";
  email.value = "";
  message.value = "";
};
</script>

<template>
  <section class="contact">
    <h2>Contacto</h2>
    <p>Si quieres colaborar conmigo, envíame un mensaje.</p>
    <form class="contact-form" @submit.prevent="submitForm">
      <label>
        Nombre
        <input v-model="name" type="text" required />
        <small v-if="errors.name" class="error">{{ errors.name }}</small>
      </label>
      <label>
        Email
        <input v-model="email" type="email" required />
        <small v-if="errors.email" class="error">{{ errors.email }}</small>
      </label>
      <label>
        Mensaje
        <textarea v-model="message" rows="4" required />
        <small v-if="errors.message" class="error">{{ errors.message }}</small>
      </label>
      <button type="submit">Enviar</button>
    </form>
    <p v-if="sent" class="success">Mensaje enviado correctamente.</p>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 560px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

input,
textarea {
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
}

button {
  width: fit-content;
  padding: 0.6rem 1rem;
  border: 1px solid #111;
  border-radius: 8px;
  background: #111;
  color: #fff;
  cursor: pointer;
}

.error {
  color: #b42318;
  font-size: 0.85rem;
}

.success {
  color: #067647;
}
</style>
