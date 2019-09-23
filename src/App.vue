<template>
  <div id="app">
    <!--<ImageSearch/>-->
    <Landscape/>
    <Temperature lowlabel="️⛄" highlabel="🌞️" :domain="[0,120]" url="1"/>
    <Temperature lowlabel="1" highlabel="20" :domain="[1,20]" url="1"/>
    <!--<Map />-->
  </div>
</template>

<script>
import Landscape from './components/Landscape.vue'
import Map from './components/Map.vue'
import ImageSearch from './components/ImageSearch.vue'
import Temperature from './components/Temperature.vue'
export default {
  name: 'app',
  components: {
    ImageSearch,
    Landscape,
    Temperature,
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
