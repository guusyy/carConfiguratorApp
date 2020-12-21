<template>
  <ConfigSummary v-if="showSummary" :configurationData="configuration" @goBack="toggleSummary" />
  <div class="grid container-full" v-else>
    <div class="decorative-background"></div>
    <section class="section-left">
      <transition class="slide-in" name="slide-in" >
        <CarPreviewSection :configurationData="configuration" />
      </transition>
    </section>
    <section class="section-right">
      <NeutralButton class="back-button" v-on:click="onClickButton" :label="'Go Back'" :icon="'la-arrow-left'" />
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
        <h4>Choose rims:</h4>
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
      <transition class="fade-in" >
        <PrimaryButton v-on:click="toggleSummary" :label="`See your configuration`" :label2="`(${totalCost}$)`"/>
      </transition>
    </section>
  </div>
</template>

<script>
import ConfigSummary from './ConfigSummary.vue'
import ConfigRadioButton from './ConfigRadioButton.vue'
import CarPreviewSection from './CarPreviewSection.vue'
import NeutralButton from './NeutralButton.vue'
import PrimaryButton from './PrimaryButton.vue'

export default {
  name: 'CarCustomizePage',
  components: {
    ConfigSummary,
    ConfigRadioButton,
    CarPreviewSection,
    NeutralButton,
    PrimaryButton
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

<style scoped>
.container-full {
  min-height: 100vh;
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
  padding: 1.5em;
}

.config-group {
  margin: 2em 0;
}

.radio-button-group {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 1024px) { 
  .section-left {
    grid-column-start: 1 ;
    grid-column-end: 1 ;
    grid-row-start: 1 ;
  }

  .section-right {
    grid-column-start: 1 ;
    grid-column-end: 1 ;
    grid-row-start: 2 ;
  }

  .decorative-background{
    grid-column-start: 1 ;
    grid-column-end: 1 ;
    grid-row-start: 1 ;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .back-button{
    position: absolute;
    top: 0px;
    margin: 1.25em 0;
    box-shadow: 0 10px 10px #c3c3c367;
  }
}

</style>
