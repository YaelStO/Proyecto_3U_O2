<script setup>
// Puedes agregar lógica aquí si es necesario
</script>

<template>
  <!-- Carrusel (original - puedes editar) -->
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

  <!-- SECCIÓN DE DESTACADOS (original + nuevas filas) -->
  <div class="container mt-5">
    <h2 class="text-center mb-4">Vehículos Destacados</h2>
    <div class="row">
      <!-- Fila 1 (original - puedes editar) -->
      <div class="col-md-4 mb-4" v-for="(vehicle, index) in featuredVehicles.slice(0, 3)" :key="index">
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
    
    <!-- Fila 2 (nueva) -->
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="(vehicle, index) in featuredVehicles.slice(3, 6)" :key="index + 3">
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
    
    <!-- Fila 3 (nueva) -->
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="(vehicle, index) in featuredVehicles.slice(6, 9)" :key="index + 6">
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
    
    <!-- Botón Ver Más (nuevo) -->
    <div class="text-center mt-4">
      <router-link to="/vehiculos" class="btn btn-outline-primary btn-lg">Ver más vehículos</router-link>
    </div>
  </div>

  <!-- Llamado a la acción (original - puedes editar) -->
  <div class="bg-dark text-white py-5 mt-5">
    <div class="container text-center">
      <h3>¿Interesado en alguno de nuestros vehículos?</h3>
      <p class="lead">Contáctanos para más información y cotizaciones</p>
      <router-link to="/contacto" class="btn btn-light btn-lg mt-3">Contactar</router-link>
    </div>
  </div>

  <!-- Sección de Reseñas (nueva) -->
  <div class="container my-5 py-4">
    <h2 class="text-center mb-5">Opiniones de nuestros clientes</h2>
    
    <div class="row">
      <!-- Reseña 1 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <div class="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                <span class="h5 mb-0">J</span>
              </div>
              <div>
                <h5 class="mb-0">Juan Pérez</h5>
                <div class="text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p class="card-text">"Excelente servicio y atención. Encontré exactamente lo que necesitaba para mi auto clásico."</p>
          </div>
        </div>
      </div>
      
      <!-- Reseña 2 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <div class="avatar bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                <span class="h5 mb-0">M</span>
              </div>
              <div>
                <h5 class="mb-0">María Gómez</h5>
                <div class="text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>
            <p class="card-text">"Buena calidad en los repuestos, aunque el envío tardó un poco más de lo esperado."</p>
          </div>
        </div>
      </div>
      
      <!-- Reseña 3 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <div class="avatar bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                <span class="h5 mb-0">C</span>
              </div>
              <div>
                <h5 class="mb-0">Carlos Ruiz</h5>
                <div class="text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p class="card-text">"Asesoramiento profesional y repuestos originales. Volveré a comprar aquí sin duda."</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Formulario de Calificación (nuevo) -->
    <div class="card mt-5">
      <div class="card-body">
        <h3 class="card-title text-center mb-4">Deja tu reseña</h3>
        <form @submit.prevent="submitReview">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="name" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="email" class="form-label">Correo electrónico</label>
              <input type="email" class="form-control" id="email" required>
            </div>
          </div>
          
          <div class="mb-3">
            <label class="form-label">Calificación</label>
            <div class="rating">
              <input type="radio" id="star5" name="rating" value="5"><label for="star5" title="Excelente">★</label>
              <input type="radio" id="star4" name="rating" value="4"><label for="star4" title="Muy bueno">★</label>
              <input type="radio" id="star3" name="rating" value="3"><label for="star3" title="Bueno">★</label>
              <input type="radio" id="star2" name="rating" value="2"><label for="star2" title="Regular">★</label>
              <input type="radio" id="star1" name="rating" value="1"><label for="star1" title="Malo">★</label>
            </div>
          </div>
          
          <div class="mb-3">
            <label for="review" class="form-label">Tu reseña</label>
            <textarea class="form-control" id="review" rows="4" required></textarea>
          </div>
          
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Enviar reseña</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredVehicles: [
        // Vehículos originales (puedes editar)
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
        },
        // Nuevos vehículos - Fila 2
        {
          name: "Nissan MP300",
          description: "Pickup mexicana con gran capacidad",
          image: "https://www.nissanoaxaca.com.mx/static/agency-go-virtual/Nissan/NP300/2023/Exterior/1.jpg",
          route: "/npnissan"
        },
        {
          name: "Chevrolet Chevy",
          description: "Compacto icónico de México",
          image: "https://acnews.blob.core.windows.net/imgnews/extralarge/NAZ_6e6d17069f684066a2c971af16e88f51.webp",
          route: "/chevy"
        },
        {
          name: "Hyundai Atos",
          description: "Pequeño y ágil para la ciudad",
          image: "https://autolab.com.co/wp-content/uploads/2022/07/atos-hyundai.png",
          route: "/atos"

        },
        // Nuevos vehículos - Fila 3
        {
          name: "MTX Mastretta",
          description: "Rareza y potencia en un paquete único",
          image:"https://runrunes.org/wp-content/uploads/2011/02/1_1-647x432.jpg",
          route: "/mtx"
        },
        {
          name: "BMW",
          description: "Deportivo Aleman por excelencia",
          image: "data:image/jpeg;base64,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",
          route: "/bmw"
        },
        {
          name: "Porsche 911",
          description: "El ícono de la velocidad y el lujo",
          image: "https://hips.hearstapps.com/hmg-prod/images/img-5-6655e9bb8e066.jpg?crop=1xw:1xh;center,top&resize=980:*",

          route: "/porche"
        }
      ]
    }
  },
  methods: {
    submitReview() {
      // Aquí puedes agregar la lógica para enviar la reseña
      alert('Gracias por tu reseña!');
      // Limpiar el formulario después de enviar
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.querySelector('input[name="rating"]:checked').checked = false;
      document.getElementById('review').value = '';
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

/* Estilos para la sección de reseñas */
.avatar {
  font-weight: bold;
}

.rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.rating input {
  display: none;
}

.rating label {
  color: #ddd;
  font-size: 2rem;
  padding: 0 5px;
  cursor: pointer;
}

.rating input:checked ~ label,
.rating input:hover ~ label {
  color: #ffc107;
}

.rating label:hover,
.rating label:hover ~ label {
  color: #ffc107;
}

/* Estilo para el botón Ver Más */
.btn-outline-primary {
  transition: all 0.3s;
}

.btn-outline-primary:hover {
  background-color: #0d6efd;
  color: white;
}
</style>