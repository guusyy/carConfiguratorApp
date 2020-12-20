<template>
  <li>
    <a href="#car" v-on:click="onClickButton" >
        <div>
            <div>
                <img :src="carData.img" width="300" height="225" alt="">
            </div>
            <div>
                <h2>{{carData.model}}</h2>
                <h3>{{carData.brand}}</h3>
                <p>{{carData.price}}</p>
            </div>
        </div>
    </a>
  </li>
</template>

<script>

export default {
  name: 'CarTile',
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
  padding:24px;
}

li:hover {
  background-color: lightgrey;
}
</style>
