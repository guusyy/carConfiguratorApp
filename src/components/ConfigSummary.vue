<template>
  <div class="container-fluid">
    <div class="container">
      <transition class="fade-in">
        <CarPreviewSection :configurationData="configurationData" />
      </transition>
      <section class="info-section">
        <neutralButton class="back-button" v-on:click="onClickButton" :label="'Go Back'" :icon="'la-arrow-left'" />
        <h2>{{configurationData.brand}}</h2>
        <h1>{{configurationData.model}}</h1>
        <span class="delivery-time-label" style="text-decoration: underline">Estimated delivery time: 1-2 weeks</span>
        <ul>
          <li>{{configurationData.rim.name}}</li>
          <li>{{configurationData.color.name}}</li>
          <li>{{configurationData.year}}</li>
        </ul>
        <ul>
          <li>- Completely new model</li>
          <li>- Largest luggage space in its class</li>
          <li>- Unique and stadard with 7 years warranty</li>
        </ul>
        <transition class="fade-in-later" >
          <primaryButton class="place-order-button" :label="'Place order'" />
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import CarPreviewSection from './CarPreviewSection.vue'
import neutralButton from './neutralButton.vue'
import primaryButton from './primaryButton.vue'

export default {
  name: 'ConfigSummary',
  components: {
    CarPreviewSection,
    neutralButton,
    primaryButton
  },
  props: {
    configurationData: Object
  },
  methods: {
    onClickButton() {
      this.$emit('goBack')
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid{
  background-color:#F3F4F6;
}

.container {
  display: grid;
}
.info-section {
  border-radius:16px;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 -10px 10px #c3c3c367;
  padding: 2em;
}
.delivery-time-label {
  margin: 1em 0;
  display: block;
}

li {
  margin-bottom: 0.75em;
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
