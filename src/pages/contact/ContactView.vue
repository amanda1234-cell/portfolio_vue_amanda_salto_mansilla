<script setup lang="ts">
import { reactive, ref } from "vue";

const nombre = ref("");
const correo = ref("");
const mensaje = ref("");
const enviado = ref(false);
const errores = reactive({
  nombre: "",
  correo: "",
  mensaje: "",
});

const esCorreoValido = (valor: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

const validarFormulario = () => {
  errores.nombre = nombre.value.trim() ? "" : "El nombre es obligatorio.";
  errores.correo = esCorreoValido(correo.value)
    ? ""
    : "Introduce un email válido.";
  errores.mensaje =
    mensaje.value.trim().length >= 10
      ? ""
      : "El mensaje debe tener al menos 10 caracteres.";

  return !errores.nombre && !errores.correo && !errores.mensaje;
};

const enviarFormulario = () => {
  enviado.value = false;
  if (!validarFormulario()) {
    return;
  }
  enviado.value = true;
  nombre.value = "";
  correo.value = "";
  mensaje.value = "";
};
</script>

<template>
  <section class="contact">
    <h2>Contacto</h2>
    <p>Si quieres colaborar conmigo, envíame un mensaje.</p>
    <form class="contact-form" @submit.prevent="enviarFormulario">
      <label>
        Nombre
        <input v-model="nombre" type="text" required />
        <small v-if="errores.nombre" class="error">{{ errores.nombre }}</small>
      </label>
      <label>
        Email
        <input v-model="correo" type="email" required />
        <small v-if="errores.correo" class="error">{{ errores.correo }}</small>
      </label>
      <label>
        Mensaje
        <textarea v-model="mensaje" rows="4" required />
        <small v-if="errores.mensaje" class="error">{{ errores.mensaje }}</small>
      </label>
      <button type="submit">Enviar</button>
    </form>
    <p v-if="enviado" class="success">Mensaje enviado correctamente.</p>
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
