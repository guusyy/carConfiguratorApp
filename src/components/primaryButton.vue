<template>
  <div role="button" :class="'primary-button ' + (label2 ? 'two-labels' : '' ) ">
    <span>{{label}}</span>
    <span>{{label2}}</span>
  </div>
</template>

<script>

export default { 
  name: 'PrimaryButton',
  props: {
    label: String,
    label2: String
  }
}
</script>

<style scoped>
.two-labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.primary-button {
  text-align: center;
  width: 100%;
  padding: 1em 1.25em;
  font-size: 1.25em;
  cursor: pointer;
  border: none;
  color: #fff;
  background-color: #2563EB;
  border-radius: 8px;
  font-weight: 600;
  margin: 1em 0;
  box-shadow: 0 10px 10px #c3c3c367;

  transition: all 0.3s ease 0s;
}

.primary-button:hover {
  background-color: #1D4ED8;
}
</style>
