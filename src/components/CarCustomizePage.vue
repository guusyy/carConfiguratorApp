<template>
  <div class="container">
    <ConfigSummary v-if="showSummary" :configurationData="configuration" @goBack="toggleSummary" />
    <div class="grid" v-else>
      <CarPreviewSection class="sectionLeft" :configurationData="configuration" />
      <div class="sectionRight">
          <button v-on:click="onClickButton">Back</button>
          <p>You selected <strong>{{carData.model}}</strong> </p>
          <div class="radioButtonGroup">
              <ConfigRadioButton 
                  v-for="color in carData.colors" 
                  v-bind:key="color.name" 
                  v-on:click="updateColorConfig(color)" 
                  :object="color" 
                  :selected="color == pickedColor" />
          </div>
          <p>{{pickedColor.name}} - {{pickedColor.price == 0 ? `(Included)` : `(${pickedColor.price}$)`}}</p>
          <div class="radioButtonGroup">
              <ConfigRadioButton 
                  v-for="rim in carData.rims" 
                  v-bind:key="rim.name" 
                  v-on:click="updateRimConfig(rim)" 
                  :object="rim" 
                  :selected="rim == pickedRim" 
                />
          </div>
          <p>{{pickedRim.name}} - {{pickedRim.price == 0 ? `(Included)` : `(${pickedRim.price}$)`}}</p>
          <button v-on:click="toggleSummary" >See configuration ({{totalCost}}$)</button>
      </div>
    </div>
  </div>
</template>

<script>
import ConfigSummary from './ConfigSummary.vue'
import ConfigRadioButton from './ConfigRadioButton.vue'
import CarPreviewSection from './CarPreviewSection.vue'

export default {
  name: 'CarCustomizePage',
  components: {
      ConfigSummary,
      ConfigRadioButton,
      CarPreviewSection
  },
  props: {
      carData: Object
  },
  data(){
      return {
          pickedColor: this.carData.colors[0],
          pickedRim: this.carData.rims[0],
          showSummary: false
      }
  },
  computed: {
      totalCost: function () {
          return this.carData.price + this.pickedColor.price + this.pickedRim.price;
      },
      configuration: function () {
          const filtered = (({ brand, model, year, price }) => ({ brand, model, year, price }))(this.carData);
          return { 
              ...filtered, 
              totalcost: this.totalCost,
              color: { ...this.pickedColor }, 
              rim: { ...this.pickedRim },
            };
      }
  },
  methods: {
    onClickButton () {
      this.$emit('unselectCar')
    },
    updateColorConfig (color) {
        this.pickedColor = color;
    },
    updateRimConfig (rim) {
        this.pickedRim = rim;
    },
    toggleSummary () {
      this.showSummary = !this.showSummary;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.radioButtonGroup {
  display: flex;
}

ul {
    list-style: none;
    padding: 0;
}
</style>
