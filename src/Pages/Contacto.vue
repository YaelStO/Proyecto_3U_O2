<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  interes: '',
  mensaje: ''
});

const router = useRouter();
const submitted = ref(false);

const submitForm = () => {
  // Aquí iría la lógica para enviar el formulario
  console.log('Formulario enviado:', form.value);
  submitted.value = true;
  
  // Redirigir después de 3 segundos
  setTimeout(() => {
    router.push('/');
  }, 3000);
};
</script>

<template>
  <div class="contact-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card shadow">
            <div class="card-header bg-primary text-white">
              <h2 class="mb-0">Formulario de Contacto</h2>
              <p class="mb-0">Complete el formulario y nos pondremos en contacto</p>
            </div>
            
            <div class="card-body" v-if="!submitted">
              <form @submit.prevent="submitForm">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="nombre" class="form-label">Nombre Completo</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="nombre" 
                      v-model="form.nombre" 
                      required
                    >
                  </div>
                  
                  <div class="col-md-6">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="email" 
                      v-model="form.email" 
                      required
                    >
                  </div>
                  
                  <div class="col-md-6">
                    <label for="telefono" class="form-label">Teléfono</label>
                    <input 
                      type="tel" 
                      class="form-control" 
                      id="telefono" 
                      v-model="form.telefono"
                    >
                  </div>
                  
                  <div class="col-md-6">
                    <label for="interes" class="form-label">Interés Principal</label>
                    <select class="form-select" id="interes" v-model="form.interes" required>
                      <option value="" disabled selected>Seleccione una opción</option>
                      <option value="compra">Compra de vehículo</option>
                      <option value="venta">Venta de vehículo</option>
                      <option value="partes">Partes y accesorios</option>
                      <option value="servicio">Servicio mecánico</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  
                  <div class="col-12">
                    <label for="mensaje" class="form-label">Mensaje</label>
                    <textarea 
                      class="form-control" 
                      id="mensaje" 
                      rows="5" 
                      v-model="form.mensaje"
                      required
                    ></textarea>
                  </div>
                  
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-lg">
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
            <div class="card-body text-center" v-else>
              <div class="alert alert-success">
                <h3>¡Gracias por contactarnos!</h3>
                <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
                <i class="fas fa-check-circle fa-4x my-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding-top: 80px;
}

.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
}

.card-header {
  padding: 1.5rem;
}

.form-control, .form-select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}

.form-control:focus, .form-select:focus {
  border-color: #86b7fe;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.btn-primary {
  padding: 10px 30px;
  font-weight: 600;
}

.alert-success {
  background-color: #d1e7dd;
  color: #0f5132;
  border-radius: 8px;
}
</style>