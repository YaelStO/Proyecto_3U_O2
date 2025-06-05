<script></script>
<template>

<body>
  <main class="container my-5">
    <div class="row">
      <div class="col-lg-6">
        <h1 class="mb-4">Chevrolet Camaro 1969</h1>
        <span class="price-tag mb-3">$40,000 USD</span>
        
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-list-alt me-2"></i>Especificaciones</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-tachometer-alt"></i></span>
                <span>Motor: 6.5L V8</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-horse"></i></span>
                <span>Potencia: 375 HP</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-bolt"></i></span>
                <span>0-100 km/h: 6.2 segundos</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-paint-brush"></i></span>
                <span>Color: Hugger Orange</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-cogs"></i></span>
                <span>Transmisión: Automática 3 velocidades</span>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <span class="specs-icon"><i class="fas fa-road"></i></span>
                <span>Kilometraje: 32,100 millas</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h3 class="card-title"><i class="fas fa-file-alt me-2"></i>Descripción</h3>
            <p>El Chevrolet Camaro 1969 es el eterno rival del Mustang, con líneas agresivas y un rendimiento que sigue impresionando décadas después de su fabricación.</p>
            <p>Características destacadas:</p>
            <ul>
              <li>Paquete RS/SS</li>
              <li>Franjas negras originales</li>
              <li>Asientos bucket originales</li>
              <li>Sistema de audio AM/FM vintage</li>
              <li>Certificado de autenticidad GM</li>
            </ul>
            <router-link to="/contacto" class="btn btn-inquiry mt-3">
              <i class="fas fa-envelope me-2"></i>Solicitar información
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
        <img src="https://p.turbosquid.com/ts-thumb/Wj/2KDSQi/7U/chevrolet_camaro_z28_1969_convertible_0000/jpg/1687447780/2500x1406/fit_q99/f82c8e6685ad19cd8d1be2d984738a7755508420/chevrolet_camaro_z28_1969_convertible_0000.jpg" class="img-fluid rounded vehicle-img" alt="Chevrolet Camaro 1969">
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