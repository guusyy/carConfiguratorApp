<template>
  <div class="container-fluid">
    <div class="container">
      <transition class="fade-in">
        <CarPreviewSection :configurationData="configurationData" :future="future" />
      </transition>
      <section class="info-section">
        <NeutralButton class="back-button" v-on:click="onClickButton" :label="'Go Back'" :icon="'la-arrow-left'" />
        <h2>{{future ? "Great Scott!" : configurationData.brand}}</h2>
        <h1>{{future ? "DeLorean DMC-12" : configurationData.model}}</h1>
        <span class="delivery-time-label" style="text-decoration: underline">Estimated delivery time: 1-2 weeks</span>
        <span class="model-cost-label">Base price: {{future ? "100000" : configurationData.price}}$</span>
        <ul v-if="!future" class="price-list">
          <li>- Year of release: {{configurationData.year}}</li>
          <li>- {{configurationData.rim.name}} <span style="font-weight: bold;"> {{configurationData.rim.price == 0 ? `(Included)` : `(${configurationData.rim.price}$)`}}</span></li>
          <li>- {{configurationData.color.name}} <span style="font-weight: bold;"> {{configurationData.color.price == 0 ? `(Included)` : `(${configurationData.color.price}$)`}}</span></li>
        </ul>
        <ul v-if="!future">
          <li>- Completely new model</li>
          <li>- Largest luggage space in its class</li>
          <li>- Unique and stadard with 7 years warranty</li>
        </ul>
        <CheckboxButton :label="'Include insurance for the distant future'" @checked="toggleFuture" />
        <h3 class="total-cost">{{future ? "100000" : configurationData.totalcost}}$</h3>
        <transition class="fade-in-later" >
          <PrimaryButton class="place-order-button" :label="'Place order'" />
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import CarPreviewSection from './CarPreviewSection.vue'
import NeutralButton from './NeutralButton.vue'
import PrimaryButton from './PrimaryButton.vue'
import CheckboxButton from './CheckboxButton.vue'

export default { 
  name: 'ConfigSummary',
  components: {
    CarPreviewSection,
    NeutralButton,
    PrimaryButton,
    CheckboxButton
  },
  props: {
    configurationData: Object
  },
  data(){
    return {
      future: false
    }
  },
  methods: {
    onClickButton() {
      this.$emit('goBack')
    },
    toggleFuture() {
      this.future = !this.future;
      
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
  
}
</script>

<style scoped>
li {
  margin-bottom: 0.75em;
}

.model-cost-label {
  font-size: 1.25em;
  margin: 1em 0;
  display: block;
}

.total-cost {
  font-size: 2em;
  margin: 1.5em 0;
}
.container-fluid{
  background-color:#F3F4F6;
}
.info-section {
  border-radius:16px;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 -10px 10px #c3c3c367;
  padding: 1.5em;
}
.delivery-time-label {
  margin: 1em 0;
  display: block;
}

.place-order-button {
  position: -webkit-sticky;
  position: sticky;
  bottom: 16px;
}

@media (max-width: 1024px) { 
  .back-button{
    position: absolute;
    top: 0px;
    margin: 1.25em 0;
    box-shadow: 0 10px 10px #c3c3c367;
  }
}
</style>
