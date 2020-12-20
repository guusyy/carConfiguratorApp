<template>
    <div class="imagePreviewBox">
      <img :src="configurationData.color.previewImg" alt="">
      <img :src="configurationData.rim.rimPreviewImg" class="rimOverlay" alt="">
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
  display: flex;
  margin: auto 0;
}

.rimOverlay {
  position: absolute;
  top: 0;
  left: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
