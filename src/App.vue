<template>
  <div id="app">
    <!-- <Landscape/> -->
    <!-- <Map /> -->
    <DotFrequency />
  </div>
</template>

<script>
import Landscape from './components/Landscape.vue'
import Map from './components/Map.vue'
import DotFrequency from './components/DotFrequency.vue'

export default {
  name: 'app',
  components: {
    Landscape,
    Map,
    DotFrequency
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
