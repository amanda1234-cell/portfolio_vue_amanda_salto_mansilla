<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Mail, MessageSquareText, UserRound } from "lucide-vue-next";
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
        <span class="campo-titulo"><UserRound :size="18" />Nombre</span>
        <input v-model="nombre" type="text" required />
        <small v-if="errores.nombre" class="error">{{ errores.nombre }}</small>
      </label>
      <label>
        <span class="campo-titulo"><Mail :size="18" />Email</span>
        <input v-model="correo" type="email" required />
        <small v-if="errores.correo" class="error">{{ errores.correo }}</small>
      </label>
      <label>
        <span class="campo-titulo"><MessageSquareText :size="18" />Mensaje</span>
        <textarea v-model="mensaje" rows="4" required />
        <small v-if="errores.mensaje" class="error">{{ errores.mensaje }}</small>
      </label>
      <Button
        type="submit"
        class="w-full rounded-xl border-0 bg-[#6f1526] text-white hover:bg-[#58101e] sm:w-fit"
      >
        Enviar
      </Button>
    </form>
    <p v-if="enviado" class="success">Mensaje enviado correctamente.</p>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #f7f1f2;
  border-radius: 16px;
  padding: 0.85rem;
  color: #5a1a27;
  min-height: min(82svh, 760px);
  justify-content: space-between;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 560px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.campo-titulo {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

input,
textarea {
  border: 0;
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
  background: #fffafb;
  color: #5a1a27;
}

.error {
  color: #8e263a;
  font-size: 0.85rem;
}

.success {
  color: #6f1526;
}

@media (min-width: 640px) {
  .contact {
    padding: 1.25rem;
    min-height: min(88svh, 900px);
  }
}
</style>
