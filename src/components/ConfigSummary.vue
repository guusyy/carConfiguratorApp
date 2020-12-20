<template>
    <div>
      <button v-on:click="onClickButton">Go back</button>
      <h2>{{configurationData.model}}</h2>
      <span style="text-decoration: underline">Estimated delivery time: 1-2 weeks</span>
      <h3>{{configurationData.brand}}</h3>
      <ul>
        <li>{{configurationData.rim.name}}</li>
        <li>{{configurationData.color.name}}</li>
        <li>{{configurationData.year}}</li>
      </ul>
      <h3>Total cost: {{configurationData.totalcost}}</h3>
      <button>Place order</button>
      <CarPreviewSection :configurationData="configurationData" />
    </div>
</template>

<script>
import CarPreviewSection from './CarPreviewSection.vue'

export default {
  name: 'ConfigSummary',
  components: {
    CarPreviewSection
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
</style>
