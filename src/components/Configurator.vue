<template>
  <div>
    <template v-if="selectedCar == null">
      <ul>
        <CarTile v-for="car in carsCatalog.cars" :key="car.model" :carData="car" @selected="selectCar" />
      </ul>
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
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
ul {
  padding:0;
  list-style: none;
}
</style>
 