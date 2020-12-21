<template>
  <button :class="checked ? 'checked checkbox-button':'checkbox-button'" v-on:click="toggleChecked" >
    <i :class="checked ? 'las la-check-square' : 'las la-stop' "></i>
    <span class="label">{{label}}</span>
  </button>
</template>

<script>

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

export default { 
  name: 'CheckboxButton',
  props: {
    label: String
  },
  data(){
    return {
      checked: false
    }
  },
  methods: {
    toggleChecked () {
      this.checked = !this.checked;
      this.$emit('checked')
    }
  }
}
</script>

<style scoped>
i {
  font-size: 2em;
}

.checkbox-button {
  padding: 1em 1.25em;
  font-size: 1em;
  cursor: pointer;
  border: 1px solid #E5E7EB;
  background-color: #fff;
  border-radius: 4px;
  font-weight: 600;
  margin: 2em 0;
  border-radius: 64px;
  display: flex;
  align-items: center;

  transition: all 0.1s ease 0.1s;
}

.label {
  font-weight: 400;
  margin-left: 1em;
}

.checked {
  box-shadow: inset 0 0 0 2px #3B82F6;
}

.checked i {
  color: #3B82F6;
}

.checked .label {
  font-weight:bold;
}

.checkbox-button:hover {
  background-color: #F3F4F6;
}
.checkbox-button:focus {
  outline: none;
}
</style>
