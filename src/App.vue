<template>
  <div id="app">
    <!-- <Map /> -->
    <DotFrequency />
    <ImageSearch :endpoint="4"/>
    <ImageSearch :endpoint="1"/>
    <ScaleViz lowlabel="️⛄" highlabel="🌞️" :domain="[0,120]" url="11" heading="What is your ideal temperature?"/>
    <ScaleViz :domain="[1,15]" url="10" heading="How many languages do you speak?"/>
    <AstroSigns/>
    <Brunch/>
  </div>
</template>

<script>
import Landscape from './components/Landscape.vue'
import Map from './components/Map.vue'
import DotFrequency from './components/DotFrequency.vue'
import ImageSearch from './components/ImageSearch.vue'
import Temperature from './components/Temperature.vue'
import SingleText from './components/SingleText.vue'
import AstroSigns from './components/AstroSigns.vue'
import ScaleViz from './components/ScaleViz.vue'
import Brunch from './components/Brunch.vue'
export default {
  name: 'app',
  components: {
    ImageSearch,
    Landscape,
    Map,
    AstroSigns,
    DotFrequency,
    Temperature,
    SingleText
    ScaleViz,
    Brunch
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
