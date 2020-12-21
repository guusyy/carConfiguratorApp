<template>
  <div class="imagePreviewBox">
    <img :src="configurationData.color.previewImg" alt="">
    <img :src="configurationData.rim.rimPreviewImg" class="rimOverlay" alt="">
  </div>
</template>

<script>

export default {
  name: 'CarPreviewSection',
  props: {
    configurationData: Object
  },
}
</script>

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
</style>
