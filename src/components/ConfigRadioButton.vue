<template>
  <label class="custom-radio" :for="object.name">
    <input type="radio" :id="object.name" :value="object.name" :checked="selected" /> 
    <span class="radio-btn">
      <div class="radio-icon">
        <img :src="object.selectionImg" alt="">
      </div>
      <i class="las la-check"></i>
    </span>
  </label>
</template>

<script>
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

export default { 
  name: 'ConfigRadioButton',
  props: {
    selected: Boolean,
    object: Object
  }
}
</script>

<style scoped>

.radio-buttons {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.custom-radio input {
  display: none;
}

.radio-btn {
  margin: 10px;
  width: 5em;
  height: 5em;
  border: 3px solid transparent;
  display: inline-block;
  border-radius: 12px;
  position: relative;
  text-align: center;
  box-shadow: 0 0 20px #c3c3c367;
  cursor: pointer;

  transition: 0.3s ease;
}

.radio-btn:hover {
  transform: scale(1.05);
}

.radio-btn img {
  max-width:100%;
  max-height: 100%;
}

.radio-btn > i {
  color: #ffffff;
  background-color: #3B82F6;
  font-size: 20px;
  position: absolute;
  top: -10px;
  left: 100%;
  transform: translateX(-50%) scale(2);
  border-radius: 50px;
  padding: 3px;
  transition: 0.2s;
  pointer-events: none;
  opacity: 0;
}

.radio-btn .radio-icon {
  width: 90%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.radio-btn .radio-icon i {
  color: #3B82F6;
  line-height: 80px;
  font-size: 60px;
}

.radio-btn .radio-icon h3 {
  color: #3B82F6;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
}

.custom-radio input:checked + .radio-btn {
  border: 3px solid #3B82F6;
}

.custom-radio input:checked + .radio-btn > i {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
</style>
