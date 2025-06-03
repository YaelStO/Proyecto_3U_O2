<script setup>

</script> 

<template>
  <!-- Barra de navegación fija en la parte superior -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-4">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Mi Sitio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegación">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">INICIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">MODELOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CARROS RECONSTRUIDOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PARTES DE AUTOS</a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
<!-- Carrusel -->
    <div id="mainCarousel" class="carousel slide carousel-full" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://imgs.search.brave.com/9LhnGCNWmq4Zb_If-L_Wfxa-i5T0yD1k0z4NtHJ3qtI/rs:fit:1200:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MzA3NjQ1NS9lcy9m/b3RvLzE5Njctc2hl/bGJ5LWNvYnJhLWd0/NTAwLWZhc3RiYWNr/LWNvdXAlQzMlQTku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUs1WFp6Z3FMOFBS/cmVXUHZST21SSjY5/TWhSaThwVmw1U0ZN/aUVEVGM5Y0E9" class="d-block w-100" alt="Carro 1">
      </div>
      <div class="carousel-item">
        <img src="https://imgs.search.brave.com/a1qLFmINRGNhvNRlKw-YNQp3Zt79Y-a3wSt7g3CNrZ0/rs:fit:1200:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY1LzE5NjhfQ2Ft/YXJvX1JTXzMyNy5q/cGc" class="d-block w-100" alt="Carro 2">
      </div>
      <div class="carousel-item">
        <img src="https://imgs.search.brave.com/52gvmX9Wnz6oUQuxSuakU6DD93Qz5bgjm7Vj4U87kEc/rs:fit:1200:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDg3/NzM5ODA4L2VzL2Zv/dG8vZXN0YWRvdW5p/ZGVuc2UtY2wlQzMl/QTFzaWNhLWF1dG9t/JUMzJUIzdmlsLTE5/NTgtY2hldnJvbGV0/LWNvcnZldHRlLWMx/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1iZUphbVRJamVF/RE5LUlR6V1E4T2pv/SkJ2VDNDZFVaLXp3/aXU2UXA2VWtnPQ" class="d-block w-100" alt="Carro 3">
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



<!-- Primera Card -->
<div class="conteiner">
    <div class="container">
        <div class="row">
            <div class="row">
                <div class="col-md-5">
                    <div class="card mb-4">
                        <div style="background-color: rgb(9, 68, 219); color: #ffff;" class="card-header">
                            <h6 class="text-center">AUTO EN DESCUENTO</h6>
                        </div>
                        <div class="card-body">
                            <img style="border-radius: 50%; width: 150px;"
                                 src="https://imgs.search.brave.com/lDOrCI1AUoZ1cpf1cxbMoAmohO70Oin8V9tfTSqH5fo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU5/MjYxOTA5L2VzL2Zv/dG8vZm9yZC1tdXN0/YW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1Ub3Q0Rk5M/ZnlKNmI0cDUwelA2/NXBhbENWVTRZWm5t/d1FwUmVYbngyaWdR/PQ"
                                 alt="">
                            <p>Ford Mustang Fastback de 1967</p>
                            <p><strong>Diseño Fastback:</strong> La parte trasera inclinada le da un aspecto aerodinámico y agresivo.</p>
                                <p><strong>Parrilla frontal:</strong> Con el emblema del caballo al centro, rodeado por una malla negra.</p>
                                <p><strong>Faros redondos:</strong> Con luces auxiliares en la parte baja del parachoques.</p>
                                <p><strong>Llantas clásicas:</strong> Con rines cromados y neumáticos de alto perfil.</p>
                                <p><strong>Detalles laterales:</strong> Salidas de aire decorativas detrás de las puertas y una franja azul en la parte baja.</p>
                                <p><strong>Color:</strong> Blanco con franjas decorativas en azul.</p>
                                <p><strong>Motor:</strong> 390 V8.</p>
                            
                            <button class="btn btn-primary" type="button">Más información</button>
                        </div>
                    </div>
                </div>
                <!-- Segunda Card -->
                <div class="col-md-2">
                    <div class="card">
                        <div style="background-color: rgb(0, 0, 255); color: #ffffff;" class="card-header">
                            <h6 class="text-center">AUTOS AGREGADOS RECIENTEMENTE</h6>
                        </div>
                        <div class="card-body">
                            <img style="border-radius: 50%; width: 150px;"
                            src="https://imgs.search.brave.com/lDOrCI1AUoZ1cpf1cxbMoAmohO70Oin8V9tfTSqH5fo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU5/MjYxOTA5L2VzL2Zv/dG8vZm9yZC1tdXN0/YW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1Ub3Q0Rk5M/ZnlKNmI0cDUwelA2/NXBhbENWVTRZWm5t/d1FwUmVYbngyaWdR/PQ"
                            alt="">
                       <p>Ford Mustang Fastback de 1967</p>
                       <img style="border-radius: 50%; width: 150px;"
                            src="https://imgs.search.brave.com/mv2qyb0ML3bDnDYOAf81HxXfffQETN0qo3dJU0bW8zc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/MDc1NDc3MS9lcy9m/b3RvLzE5NjgtZm9y/ZC1zaGVsYnktY29i/cmEtbXVzdGFuZy1n/dDUwMC1mYXN0YmFj/ay5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9M2U5Mkx3QWFp/eUs2UHFjM2ZiamJY/dDBxcUJxNFY0STd2/Q01vcDdSNEQ2Yz0"
                            alt="">
                       <p>Shelby GT500 de 1968</p>
                       <button class="btn btn-primary" type="button">Más información</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-5">
                    <div class="card">
                        <div style="background-color: rgb(0, 0, 255); color: #ffffff;" class="card-header">
                            <h6 class="text-center">REGUISTRO</h6>
                        </div>
                        <div class="card-body">
                            <form action="/submit" method="post">
                                <label for="name">Nombre:</label>
                                <input type="text" id="name" name="name" required><br><br>
                    
                                <label for="email">Correo electrónico:</label>
                                <input type="email" id="email" name="email" required><br><br>
                    
                                <label for="city">Ciudad:</label>
                                <select id="city" name="city">
                                    <option value="">Ciudad de México (CDMX)</option>
                                    <option value="">Oaxaca (Oaxaca)</option>
                                    <option value="">Puebla (Puebla)</option>
                                    <option value="">Monterrey (Nuevo León)</option>
                                    <option value="">León (Guanajuato) </option>
                                    <option value="">Morelia (Michoacán)</option>
                                    <option value="">Cancún (Quintana Roo)</option>
                                    <option value="">Tijuana (Baja California)</option>
                                </select><br><br>
                    
                                <button class="btn btn-primary"><i class="fas fa-thumbs-up"></i> Enviar</button>
                                
                            </form>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


</template>


<style scoped>



    

.row{
            padding-top: 30px; /* Altura de la barra de navegación */
        }


        .carousel-inner {
            height: 400px; /* Altura fija para el carrusel */
        }

        .carousel-inner img {
            height: 100%;
            width: 100%;
            object-fit: cover; /* Las imágenes cubrirán el contenedor sin deformarse */
        }


.row  {
        background-image: url('https://imgs.search.brave.com/QLjhNSYGqHTpPE6LOMVamkMF0RsBMLeBP7E9cSGSEM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmlmdHlzb3VuZHMu/Y29tL2ltYWdlcy9n/cmFwaGljcy9ncnVu/Z2UtYmFja2dyb3Vu/ZC1ibGFjay0zMDgz/LmpwZw'); /* URL de tu imagen */
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        padding-top: 56px; /* Altura de la barra de navegación */
    }
  
</style>