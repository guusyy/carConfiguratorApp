<template>
  <div>
    <template v-if="selectedCar == null">
      <div class="container tile-grid">        
        <ul class="grid">
          <CarTile v-for="car in carsCatalog.cars" :key="car.model" :carData="car" @selected="selectCar" />
        </ul>
      </div>
    </template>
    <template v-else>
      <CarCustomizePage :carData="selectedCar" @unselectCar="unselectCar" />
    </template>
  </div>
</template>

<script>
import carsCatalogJson from '../data/carsCatalog.json'
import CarTile from './CarTile.vue'
import CarCustomizePage from './CarCustomizePage.vue'

export default {
  name: 'Configurator',
  components: {
    CarTile,
    CarCustomizePage
  },
  state: {
    selectedCar: null,
  },
  props: {
  },
  data() {
    return {
      carsCatalog: carsCatalogJson.carsCatalog
    }
  },
  methods: {
    selectCar(carId) {
      this.selectedCar = carId;
      this.$forceUpdate();
    },
    unselectCar(){
      this.selectedCar = null;
      this.$forceUpdate();
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

@media (max-width: 768px) { 
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
 }

ul {
  padding:0;
  list-style: none;
}

.tile-grid {
  padding: 2em 0;
}
</style>
 