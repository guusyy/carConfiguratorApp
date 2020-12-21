<template>
  <button class="neutralButton">
    <i v-if="icon" :class="`las ${icon}`"></i>
    {{label}}
  </button>
</template>

<script>

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

export default { 
  name: 'neutralButton',
  props: {
    label: String,
    icon: String
  }
}
</script>

<style scoped>
i {
  font-size: 1.25em;
}

.neutralButton {
  padding: 1em 1.25em;
  font-size: 1em;
  cursor: pointer;
  border: 1px solid #E5E7EB;
  background-color: #fff;
  border-radius: 4px;
  font-weight: 600;
  margin: 2em 0;

  transition: all 0.1s ease 0.1s;
}

.neutralButton:hover {
  background-color: #F3F4F6;
}
</style>
