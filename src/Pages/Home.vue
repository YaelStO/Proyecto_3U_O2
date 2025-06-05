<script setup>
// Puedes agregar lógica aquí si es necesario
</script>

<template>
  <!-- Carrusel -->
  <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/img/banner-lavado-autos-moderno_1426-5432.jpg" class="d-block w-100" alt="Carro 1">
        <div class="carousel-caption d-none d-md-block">
          <h3>Los mejores repuestos</h3>
          <p>Calidad garantizada para tu vehículo</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/img/SV-Banner-catalogo.webp" class="d-block w-100" alt="Carro 2">
        <div class="carousel-caption d-none d-md-block">
          <h3>Gran catálogo</h3>
          <p>Todo lo que necesitas en un solo lugar</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/img/banner2.jpg" class="d-block w-100" alt="Carro 3">
        <div class="carousel-caption d-none d-md-block">
          <h3>Envíos a todo el país</h3>
          <p>Recibe tus partes en tiempo récord</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>

  <!-- SECCIÓN DE DESTACADOS - Agrega esto donde quieras mostrar los destacados -->
  <div class="container mt-5">
    <h2 class="text-center mb-4">Vehículos Destacados</h2>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="(vehicle, index) in featuredVehicles" :key="index">
        <div class="card h-100">
          <img :src="vehicle.image" class="card-img-top" :alt="vehicle.name">
          <div class="card-body">
            <h5 class="card-title">{{ vehicle.name }}</h5>
            <p class="card-text">{{ vehicle.description }}</p>
            <router-link :to="vehicle.route" class="btn btn-primary">Ver detalles</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Llamado a la acción -->
  <div class="bg-dark text-white py-5 mt-5">
    <div class="container text-center">
      <h3>¿Interesado en alguno de nuestros vehículos?</h3>
      <p class="lead">Contáctanos para más información y cotizaciones</p>
      <router-link to="/contacto" class="btn btn-light btn-lg mt-3">Contactar</router-link>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      featuredVehicles: [
        {
          name: "Dodge Challenger",
          description: "Clásico americano con potencia legendaria",
          image: "https://uncrate.com/assets_c/2024/02/speedkore-dodge-charger-1-thumb-960xauto-170509.jpg",
          route: "/dogechaller"
        },
        {
          name: "Shelby GT500",
          description: "El muscle car por excelencia",
          image: "https://revologycars.com/wp-content/uploads/2024/10/1967-revology-shelby-gt500-243-02-1024x683.jpg",
          route: "/shelby"
        },
        {
          name: "Chevrolet Pickup",
          description: "Clásico pickup americano",
          image: "https://www.americanmusclecarmuseum.com/files/cars/thumbs/1972-chevrolet-cheyenne-super-4x4-pickup-c10-1-2-ton_7505.jpg",
          route: "/chebroletpikup"
        }
      ]
    }
  }
}
</script>

<style scoped>
.carousel {
  margin-top: 56px; /* Compensa la navbar fija */
}

.carousel-item img {
  height: 60vh;
  object-fit: cover;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}

.card {
  transition: transform 0.3s;
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>