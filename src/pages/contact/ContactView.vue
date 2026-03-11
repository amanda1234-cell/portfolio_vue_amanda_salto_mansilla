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
    <div class="contact-paper">
      <h2 class="titulo-editorial">Contacto</h2>
      <p>¡Colaboremos!</p>
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
          class="w-full rounded-xl border-0 bg-[#ff0a8a] text-white hover:bg-[#c7006d] sm:w-fit"
        >
          {{ enviando ? "Enviando..." : "Enviar" }}
        </Button>
      </form>
      <p v-if="enviado" class="success">Mensaje enviado correctamente.</p>
      <p v-if="errorEnvio" class="error-envio">{{ errorEnvio }}</p>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 0;
  padding: 0.85rem 0;
  color: #ffffff;
  min-height: calc(100svh - 180px);
}

.contact-paper {
  width: min(100%, 620px);
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  padding: 3.25rem 3rem 2.7rem;
  color: #ffffff;
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
  font-size: clamp(2.8rem, 5.5vw, 4.2rem);
  font-family: "MontserratLocal", "Montserrat", sans-serif;
  font-weight: 800;
  line-height: 0.85;
  letter-spacing: 0;
  text-transform: none;
  opacity: 1;
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
  color: #ffffff;
}

input,
textarea {
  border: 0;
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
  background: #000000;
  color: #ffffff;
  border: 1px solid #ff0a8a;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.82);
}

textarea {
  min-height: 170px;
  resize: vertical;
}

.error {
  color: #ffffff;
  font-size: 0.85rem;
}

.success {
  color: #ffffff;
}

.error-envio {
  margin: 0;
  color: #ffffff;
}

@media (min-width: 640px) {
  .contact {
    padding: 1.25rem 0;
  }
}

@media (max-width: 640px) {
  .contact-paper {
    width: min(100%, 520px);
    min-height: 480px;
    padding: 2.6rem 2rem 2.2rem;
  }
}
</style>

