<template>
  <div id="app">
    <Landscape/>
  </div>
</template>

<script>
import Landscape from './components/Landscape.vue'
import { clearInterval } from 'timers';

export default {
  name: 'app',
  components: {
    Landscape
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
}

.heebo {
  font-family: 'Heebo', sans-serif;
}

.playfair{
  font-family: 'Playfair Display', serif;
}
</style>
