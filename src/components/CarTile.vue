<template>
  <li class="car-tile">
    <a href="#car" v-on:click="onClickButton" >
        <div>
            <div>
                <img :src="carData.img" width="300" height="225" alt="">
            </div>
            <div>
                <h2>{{carData.model}}</h2>
                <h3>{{carData.brand}}</h3>
                <div class="price-section">
                  <span>From: </span>
                  <span class="price">{{carData.price}}$</span>
                </div>
            </div>
        </div>
        <primaryButton :label="'Configure'" />
    </a>
  </li>
</template>

<script>
import primaryButton from './primaryButton.vue'

export default {
  name: 'CarTile',
  components: {
      primaryButton
  },
  props: {
      carData: Object
  },
  methods: {
    onClickButton () {
      this.$emit('selected', this.carData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  object-fit: contain;
}

li {  
  text-align: center;
  padding:24px;
  transition: 0.3s ease;
  box-shadow: 0 0 10px #c3c3c367;
}

a {
  color: #1F2937;
}

h2 {
  font-weight: 600;
}
h3  {
  font-weight: 400;
}

li:hover {
  transform: scale(1.05);
}
.car-tile {
  border-radius: 16px;
  border: 1px solid #F3F4F6;
}

.price-section {
  margin: 1em auto 0;
  width:70%;
  display: flex;
  justify-content: space-between;
}

.price {
  font-weight: 700;
}
</style>
