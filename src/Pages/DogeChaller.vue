<template>
<body>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Dodge Charger 1970</h1>
        <span class="price-tag mb-3">$47,000 USD</span>
        
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-list-alt me-2"></i>Especificaciones</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-tachometer-alt"></i></span>
                <span>Motor: 7.2L V8 Hemi</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-horse"></i></span>
                <span>Potencia: 425 HP</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-bolt"></i></span>
                <span>0-100 km/h: 5.8 segundos</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-paint-brush"></i></span>
                <span>Color: Negro con franjas plateadas</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-cogs"></i></span>
                <span>Transmisión: Manual 4 velocidades</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-road"></i></span>
                <span>Kilometraje: 28,500 millas</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-file-alt me-2"></i>Descripción</h3>
            <p>El icónico Dodge Charger 1970 es el muscle car por excelencia, famoso por su aparición en películas de culto. Este ejemplar en particular ha sido meticulosamente restaurado manteniendo sus características originales.</p>
            <p>Incluye:</p>
            <ul>
              <li>Documentación histórica completa</li>
              <li>Sistema de escape original</li>
              <li>Interior de cuero renovado</li>
              <li>Ruedas Magnum 500 originales</li>
            </ul>
            <button class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </button>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <img src="https://www.musclecarclub.com/musclecars/dodge-charger/dodge-charger-1970-01.jpg" class="img-fluid rounded vehicle-img" alt="Dodge Charger 1970">
        
        <div class="row mt-4">
          <div class="col-md-6 mb-3">
            <img src="https://www.musclecarclub.com/musclecars/dodge-charger/dodge-charger-1970-interior.jpg" class="img-fluid rounded" alt="Interior Dodge Charger">
          </div>
          <div class="col-md-6 mb-3">
            <img src="https://www.musclecarclub.com/musclecars/dodge-charger/dodge-charger-1970-engine.jpg" class="img-fluid rounded" alt="Motor Dodge Charger">
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