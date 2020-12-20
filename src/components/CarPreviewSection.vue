<template>
    <div class="imagePreviewBox">
      <!-- <transition name="fade"> -->
        <img :src="configurationData.color.previewImg" alt="">
        <img :src="configurationData.rim.rimPreviewImg" class="rimOverlay" alt="">
      <!-- </transition> -->
    </div>
</template>

<script>

export default {
  name: 'CarPreviewSection',
  components: {
  },
  props: {
    configurationData: Object
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imagePreviewBox {
  position: relative;
  display: inline;
}

.rimOverlay {
  position: absolute;
  bottom: 0;
  right: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
