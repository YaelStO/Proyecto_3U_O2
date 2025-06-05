<script></script>
<template>
    
<body>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Chevrolet Corvette 1963</h1>
        <span class="price-tag mb-3">$60,000 USD</span>
        
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-list-alt me-2"></i>Especificaciones</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-tachometer-alt"></i></span>
                <span>Motor: 5.4L V8</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-horse"></i></span>
                <span>Potencia: 360 HP</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-bolt"></i></span>
                <span>0-100 km/h: 5.4 segundos</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-paint-brush"></i></span>
                <span>Color: Riverside Red</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-cogs"></i></span>
                <span>Transmisión: Manual 4 velocidades</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-star"></i></span>
                <span>Edición especial: Split Window Coupe</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-road"></i></span>
                <span>Kilometraje: 18,750 millas</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-file-alt me-2"></i>Descripción</h3>
            <p>La legendaria Corvette "Split Window" 1963 es considerada por muchos coleccionistas como el Corvette más hermoso jamás fabricado, siendo el único año con la ventana trasera dividida.</p>
            <p>Este ejemplar incluye:</p>
            <ul>
              <li>Números de motor y transmisión coincidentes</li>
              <li>Interior de cuero rojo original</li>
              <li>Ruedas Knock-off originales</li>
              <li>Documentación completa desde nuevo</li>
              <li>Premios en concursos de autos clásicos</li>
            </ul>
            <button class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </button>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <img src="https://www.corvsport.com/wp-content/uploads/2020/12/1963-Corvette-Sting-Ray-Split-Window-Coupe.jpg" class="img-fluid rounded vehicle-img" alt="Chevrolet Corvette 1963">
        
        <div class="row mt-4">
          <div class="col-md-6 mb-3">
            <img src="https://www.corvsport.com/wp-content/uploads/2020/12/1963-Corvette-interior.jpg" class="img-fluid rounded" alt="Interior Corvette">
          </div>
          <div class="col-md-6 mb-3">
            <img src="https://www.corvsport.com/wp-content/uploads/2020/12/1963-Corvette-engine.jpg" class="img-fluid rounded" alt="Motor Corvette">
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="bg-dark text-white py-4 mt-auto">
    <div class="container text-center">
      <p class="mb-0">© 2023 Clásicos Americanos - Todos los derechos reservados</p>
    </div>
  </footer>

</body>

</template>
<style>
    body {
      background-color: #f8f9fa;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      flex: 1;
    }
    .price-tag {
      background-color: #d4af37;
      color: black;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 1.1rem;
      font-weight: bold;
      display: inline-block;
    }
    .vehicle-img {
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      transition: transform 0.3s ease;
    }
    .vehicle-img:hover {
      transform: scale(1.02);
    }
    .specs-icon {
      color: #d4af37;
      width: 25px;
      text-align: center;
      margin-right: 10px;
    }
    .btn-inquiry {
      background-color: #d4af37;
      color: black;
      font-weight: bold;
      border: none;
      padding: 10px 25px;
    }
    .btn-inquiry:hover {
      background-color: #c9a227;
      color: black;
    }
  </style>