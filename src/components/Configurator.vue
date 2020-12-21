<template>
  <div>
    <template v-if="(selectedCar == null)">
      <div class="container fade-in">        
        <ul class="tile-grid">
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
ul {
  padding: 2em;
}

.tile-grid {
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}

@media (max-width: 1024px) { 
  .tile-grid {
    grid-template-columns: repeat(2, 1fr);
  }
 }

@media (max-width: 768px) { 
  .tile-grid {
    grid-template-columns: repeat(1, 1fr);
  }
 }

</style>
 