<template>
  <div id="app">
    <!-- <Landscape/> -->
    <!-- <Map /> -->
    <DotFrequency />
    <!--<ImageSearch/>-->
    <!-- <Temperature/> -->
    <!-- <RestaurantsMap /> -->
  </div>
</template>

<script>
import Landscape from './components/Landscape.vue'
import Map from './components/Map.vue'
import DotFrequency from './components/DotFrequency.vue'
import ImageSearch from './components/ImageSearch.vue'
import Temperature from './components/Temperature.vue'
import RestaurantsMap from './components/RestaurantsMap'
export default {
  name: 'app',
  components: {
    ImageSearch,
    Landscape,
    Map,
    DotFrequency,
    Temperature,
    RestaurantsMap   
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
