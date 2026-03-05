<script setup lang="ts">
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { Mail, MessageSquareText, UserRound } from "lucide-vue-next";
import { reactive, ref } from "vue";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const nombre = ref("");
const correo = ref("");
const mensaje = ref("");
const enviado = ref(false);
const enviando = ref(false);
const errorEnvio = ref("");
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

const enviarFormulario = async () => {
  enviado.value = false;
  errorEnvio.value = "";
  if (!validarFormulario()) {
    return;
  }

  try {
    enviando.value = true;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("Falta configurar EmailJS.");
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        nombre: nombre.value,
        correo: correo.value,
        mensaje: mensaje.value,
        from_name: nombre.value,
        from_email: correo.value,
        reply_to: correo.value,
        message: mensaje.value,
      },
      {
        publicKey,
      },
    );

    enviado.value = true;
    nombre.value = "";
    correo.value = "";
    mensaje.value = "";
  } catch {
    errorEnvio.value = "No se pudo enviar el mensaje. Inténtalo de nuevo.";
  } finally {
    enviando.value = false;
  }
};
</script>

<template>
  <section class="contact">
    <h2 class="titulo-editorial">Contacto</h2>
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
        :disabled="enviando"
        class="w-full rounded-xl border-0 bg-[#730E0E] text-white hover:bg-[#5f0c0c] sm:w-fit"
      >
        {{ enviando ? "Enviando..." : "Enviar" }}
      </Button>
    </form>
    <p v-if="enviado" class="success">Mensaje enviado correctamente.</p>
    <p v-if="errorEnvio" class="error-envio">{{ errorEnvio }}</p>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: transparent;
  border-radius: 0;
  padding: 0.85rem;
  color: #730e0e;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 560px;
  margin-top: 0.8rem;
}

.titulo-editorial {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
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
  color: #730e0e;
  border: 1px solid #730e0e;
}

textarea {
  min-height: 170px;
  resize: vertical;
}

.error {
  color: #730e0e;
  font-size: 0.85rem;
}

.success {
  color: #730e0e;
}

.error-envio {
  margin: 0;
  color: #730e0e;
}

@media (min-width: 640px) {
  .contact {
    padding: 1.25rem;
  }
}
</style>
