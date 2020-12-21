<template>
  <div class="imagePreviewBox">
    <img :src="configurationData.color.previewImg" :class="{ hide: future}" alt="">
    <img :src="configurationData.rim.rimPreviewImg" :class="{ hide: future}" class="overlay" alt="">
    <img :src="'./assets/cars/greatScott.png'" :class="{ hide: !future}" class="overlay" alt="">
  </div>
</template>

<script>

export default {
  name: 'CarPreviewSection',
  props: {
    configurationData: Object,
    future: Boolean
  },
}
</script>

<style scoped>
.imagePreviewBox {
  position: relative;
  display: flex;
  margin: auto 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
}
.hide {
  opacity: 0;
}
</style>
