<script setup>
import { ref } from 'vue';

const partes = ref([
  { id: 1, nombre: 'Filtro de Aire', marca: 'Bosch', precio: 350, stock: 15, categoria: 'Motor' },
  { id: 2, nombre: 'Pastillas de Freno', marca: 'Brembo', precio: 1200, stock: 8, categoria: 'Frenos' },
  { id: 3, nombre: 'Amortiguador Delantero', marca: 'KYB', precio: 1800, stock: 5, categoria: 'Suspensión' },
  { id: 4, nombre: 'Batería 12V', marca: 'ACDelco', precio: 2200, stock: 12, categoria: 'Eléctrico' },
  { id: 5, nombre: 'Aceite Sintético 5W-30', marca: 'Mobil 1', precio: 450, stock: 25, categoria: 'Lubricantes' },
  { id: 6, nombre: 'Bujías de Encendido', marca: 'NGK', precio: 280, stock: 30, categoria: 'Motor' },
  { id: 7, nombre: 'Correa de Distribución', marca: 'Gates', precio: 950, stock: 7, categoria: 'Motor' },
  { id: 8, nombre: 'Lámpara H4', marca: 'Osram', precio: 320, stock: 18, categoria: 'Eléctrico' }
]);

const searchQuery = ref('');
const currentSort = ref('nombre');
const sortDirection = ref('asc');

const filteredPartes = computed(() => {
  return partes.value.filter(parte => {
    return (
      parte.nombre.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      parte.marca.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      parte.categoria.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

const sortTable = (column) => {
  if (currentSort.value === column) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    currentSort.value = column;
    sortDirection.value = 'asc';
  }
  
  partes.value.sort((a, b) => {
    let modifier = 1;
    if (sortDirection.value === 'desc') modifier = -1;
    
    if (a[column] < b[column]) return -1 * modifier;
    if (a[column] > b[column]) return 1 * modifier;
    return 0;
  });
};
</script>

<template>
  <div class="partes-page">
    <div class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1>Catálogo de Partes para Autos</h1>
        <router-link to="/contacto" class="btn btn-primary">
          <i class="fas fa-envelope me-2"></i>Solicitar Cotización
        </router-link>
      </div>
      
      <div class="card shadow">
        <div class="card-header bg-dark text-white">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="input-group">
                <span class="input-group-text">
                  <i class="fas fa-search"></i>
                </span>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Buscar partes..." 
                  v-model="searchQuery"
                >
              </div>
            </div>
            <div class="col-md-6 text-end">
              Mostrando {{ filteredPartes.length }} de {{ partes.length }} partes
            </div>
          </div>
        </div>
        
        <div class="table-responsive">
          <table class="table table-striped table-hover mb-0">
            <thead>
              <tr>
                <th @click="sortTable('id')" class="sortable">
                  ID <i class="fas fa-sort"></i>
                </th>
                <th @click="sortTable('nombre')" class="sortable">
                  Nombre <i class="fas fa-sort"></i>
                </th>
                <th @click="sortTable('marca')" class="sortable">
                  Marca <i class="fas fa-sort"></i>
                </th>
                <th @click="sortTable('precio')" class="sortable text-end">
                  Precio (MXN) <i class="fas fa-sort"></i>
                </th>
                <th @click="sortTable('stock')" class="sortable text-center">
                  Stock <i class="fas fa-sort"></i>
                </th>
                <th @click="sortTable('categoria')" class="sortable">
                  Categoría <i class="fas fa-sort"></i>
                </th>
                <th class="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="parte in filteredPartes" :key="parte.id">
                <td>{{ parte.id }}</td>
                <td>{{ parte.nombre }}</td>
                <td>{{ parte.marca }}</td>
                <td class="text-end">${{ parte.precio.toLocaleString() }}</td>
                <td class="text-center">
                  <span :class="{
                    'badge bg-success': parte.stock > 10,
                    'badge bg-warning': parte.stock <= 10 && parte.stock > 0,
                    'badge bg-danger': parte.stock === 0
                  }">
                    {{ parte.stock }}
                  </span>
                </td>
                <td>{{ parte.categoria }}</td>
                <td class="text-center">
                  <button class="btn btn-sm btn-outline-primary me-2">
                    <i class="fas fa-info-circle"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-success">
                    <i class="fas fa-cart-plus"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="card-footer bg-light">
          <small class="text-muted">Última actualización: {{ new Date().toLocaleDateString() }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.partes-page {
  padding-top: 80px;
}

.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
}

.sortable {
  cursor: pointer;
  transition: background-color 0.2s;
}

.sortable:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.table th {
  font-weight: 600;
  white-space: nowrap;
}

.table td, .table th {
  vertical-align: middle;
}

.input-group-text {
  background-color: #f8f9fa;
}
</style>