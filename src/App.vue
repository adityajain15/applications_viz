<template>
  <div id="app">
    <ImageSearch/>
    <Landscape/>
    <!--<Map />-->
  </div>
</template>

<script>
import Landscape from './components/Landscape.vue'
import Map from './components/Map.vue'
import ImageSearch from './components/ImageSearch.vue'
export default {
  name: 'app',
  components: {
    ImageSearch,
    Landscape,
    Map
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
