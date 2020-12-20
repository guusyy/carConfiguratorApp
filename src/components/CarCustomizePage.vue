<template>
  <div>
    <ConfigSummary v-if="showSummary" :configurationData="configuration" @goBack="toggleSummary" />
    <div class="grid container-full" v-else>
      <div class="decorative-background"></div>
      <section class="section-left">
          <CarPreviewSection  :configurationData="configuration" />
      </section>
      <section class="section-right">
          <neutralButton v-on:click="onClickButton" :label="'Go Back'" :icon="'la-arrow-left'" />
          <h2>{{carData.brand}}</h2>
          <h1>{{carData.model}}</h1>
          <div class="config-group">
              <h4>Choose color:</h4>
              <div class="radio-button-group">
                  <ConfigRadioButton 
                      v-for="color in carData.colors" 
                      v-bind:key="color.name" 
                      v-on:click="updateColorConfig(color)" 
                      :object="color" 
                      :selected="color == pickedColor" />
              </div>
              <p>{{pickedColor.name}} - {{pickedColor.price == 0 ? `(Included)` : `(${pickedColor.price}$)`}}</p>
          </div>
          <div class="config-group">
              <h4>Choose rim:</h4>
              <div class="radio-button-group">
                  <ConfigRadioButton 
                      v-for="rim in carData.rims" 
                      v-bind:key="rim.name" 
                      v-on:click="updateRimConfig(rim)" 
                      :object="rim" 
                      :selected="rim == pickedRim" 
                    />
              </div>
              <p>{{pickedRim.name}} - {{pickedRim.price == 0 ? `(Included)` : `(${pickedRim.price}$)`}}</p>
          </div>
          <primaryButton v-on:click="toggleSummary" :label="`See your configuration`" :label2="`(${totalCost}$)`"/>
      </section>
    </div>
  </div>
</template>

<script>
import ConfigSummary from './ConfigSummary.vue'
import ConfigRadioButton from './ConfigRadioButton.vue'
import CarPreviewSection from './CarPreviewSection.vue'
import neutralButton from './neutralButton.vue'
import primaryButton from './primaryButton.vue'

export default {
  name: 'CarCustomizePage',
  components: {
      ConfigSummary,
      ConfigRadioButton,
      CarPreviewSection,
      neutralButton,
      primaryButton
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
.container-full {
  width: 100vw;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}
.decorative-background {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  background-color: #E5E7EB;
}

.section-left{
  grid-column-start: 1;
  grid-column-end: 9;
  grid-row-start: 1;
  display: flex;
}

.section-right {
  grid-column-start: 9;
  grid-column-end: 13;
  grid-row-start: 1;
  padding: 2em;
}

.config-group {
  margin: 2em 0;
}

.radio-button-group {
  display: flex;
  flex-wrap: wrap;
}
</style>
