<template>
  <div class="container py-5 mt-5">
    <h1 class="mb-4">Partes de Autos</h1>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="parte in partes" :key="parte.id">
            <td>{{ parte.id }}</td>
            <td>{{ parte.nombre }}</td>
            <td>{{ parte.marca }}</td>
            <td>${{ parte.precio }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartesAutos',
  data() {
    return {
      partes: [
        { id: 1, nombre: 'Filtro de Aire', marca: 'Bosch', precio: 350 },
        { id: 2, nombre: 'Pastillas de Freno', marca: 'Brembo', precio: 1200 },
        { id: 3, nombre: 'Batería', marca: 'ACDelco', precio: 2200 }
      ]
    }
  }
}
</script>

<style scoped>
/* Estilos básicos */
.container {
  padding-top: 20px;
}
</style>