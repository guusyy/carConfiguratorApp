<template>
  <Configurator />
</template>

<script>
import Configurator from './components/Configurator.vue'

export default {
  name: 'App',
  components: {
    Configurator
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

.container {
  max-width: 1200px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1F2937;
  transition: all 0.2s;
}

a {
  color: #2563EB;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
}

h1 {
  margin: 0 0 0.75em 0;
  font-size: 3em;
  font-weight: 700;
}

h2 {
  margin: 0.3em 0 0.3em 0;
  font-size: 2.25em;
  font-weight: 300;
}

h3 {
  font-weight: 700;
}

h4 {
  font-size: 1.333em;
  font-weight: 300;
}

img {
  max-width: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}

.slide-in {
  animation-duration: 0.5s;
  animation-name: slidein;
}

.fade-in {
  animation-duration: 1s;
  animation-name: fadein;
}

.fade-in-later {
  animation-duration: 1s;
  animation-name: fadeinlater;
}

@keyframes slidein {
  from {
    transform: translate(150px, 0);
    opacity: 0.3;
  }

  to {
    transform: translate(0,0);
    opacity: 1;
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeinlater {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
