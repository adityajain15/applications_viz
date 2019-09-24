<template>
  <div id="app">
    <img src="./assets/map.jpg" class="db center vh-100" v-if="index == -1"/>
    <Slide v-if="index == 0" text="https://laser-leotard.glitch.me" background="#ffcc00" textcolor="black"/>
    <Slide v-if="index == 1" text="Where are you from?"/>
    <Map v-if="index == 2"/>
    <Slide v-if="index == 3" text="What is the dish that best represents your hometown or family?" background="tomato" textcolor="white"/>
    <ImageSearch :endpoint="1"  v-if="index == 4"/>
    <Slide v-if="index == 5" text="Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)"/>
    <RestaurantsMap v-if="index==6"/>
    <Slide v-if="index == 7" text="What are your favorite smells/sounds from your hometown?"/>
    <SingleText v-if="index == 8" url="3"/>
    <Slide v-if="index == 9" text="What is the landscape of your hometown?"/>
    <ImageSearch :endpoint="4" v-if="index == 10"/>
    <Slide v-if="index == 11" text="Which one of your objects best describes you?"/>
    <ImageSearch :endpoint="5" v-if="index == 12"/>
    <Slide v-if="index == 13" text="What do you value most?"/>
    <SingleText v-if="index == 14" url="6"/>
    <Slide v-if="index == 15" text="What is your astrological sign?"/>
    <AstroSigns v-if="index == 16"/>
    <Slide v-if="index == 17" text="Where do you go to find peace, calm, and relaxation?"/>
    <SingleText v-if="index == 18" url="8"/>
    <Slide v-if="index == 19" text="Who/what is your inspiration?"/>
    <SingleText v-if="index == 20" url="9"/>
    <Slide v-if="index == 21" text="How many languages do you speak?"/>
    <Language v-if="index == 22"/>
    <Slide v-if="index == 23" text="What is your ideal temperature?"/>
    <ScaleViz v-if="index == 24" lowlabel="️⛄" highlabel="🌞️" :domain="[0,120]" url="11"/>
    <Slide v-if="index == 25" text="How many siblings do you have?"/>
    <Sibling v-if="index == 26"/>
    <Slide v-if="index == 27" text="Where do you go to have fun?"/>
    <SingleText v-if="index == 28" url="13"/>
    <Slide v-if="index == 29" text="Which meal do you like most: breakfast, brunch, lunch, or dinner?"/>
    <Brunch v-if="index == 30"/>
    <Slide v-if="index == 31" text="How long have you been in NYC?"/>
    <NYC v-if="index == 32"/>
    <Slide v-if="index == 33" text="What is your favorite place in NYC?"/>
    <SingleText v-if="index == 34" url="16"/>
    <DotFrequency v-if="index == 35"/>
  </div>
</template>

<script>
import Landscape from './components/Landscape.vue'
import Map from './components/Map.vue'
import Slide from './components/Slide.vue'
import DotFrequency from './components/DotFrequency.vue'
import ImageSearch from './components/ImageSearch.vue'
import RestaurantsMap from './components/RestaurantsMap'
import SingleText from './components/SingleText.vue'
import AstroSigns from './components/AstroSigns.vue'
import ScaleViz from './components/ScaleViz.vue'
import Brunch from './components/Brunch.vue'
import Sibling from './components/Sibling.vue'
import Language from './components/Language.vue'
import NYC from './components/NYC.vue'
export default {
  name: 'app',
  components: {
    ImageSearch,
    Landscape,
    Language,
    Sibling,
    Slide,
    Map,
    NYC,
    AstroSigns,
    DotFrequency,
    RestaurantsMap, 
    SingleText,
    ScaleViz,
    Brunch
  },
  data(){
    return {
      index: -1
    }
  },
  mounted(){
    window.addEventListener('keydown', ev => {
      // console.log(ev.which)
      if (ev.which === 39) {
        if (this.index == 35) {
          return
        } else {
          this.index += 1
        }
      }
      else if (ev.which === 37) {
        if (this.index == -1) {
          return
        } else {
          this.index -=1
        }
      }
      // // console.log(ev.which)
      // this.index = ev.which === 37 ? this.index == -1 ? -1 : this.index - 1 : this.index == 35 ? 35 : this.index + 1
      // console.log(this.index)
    })
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
