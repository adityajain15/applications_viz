<template>
  <div id="app">
    <Landscape v-show="activeIdx == 0"/>
  </div>
</template>

<script>
import Landscape from './components/Landscape.vue'
import {Questions} from './constants.js'

export default {
  name: 'app',
  data() {
    return {
      activeIdx: 0 // Active question that is visualized
    }
  },
  components: {
    Landscape
  },
  mounted() {
    window.addEventListener('keydown', ev => {
      if (ev.which === 37) { // Left arrow key
        if (this.activeIdx != 0) {
          this.activeIdx -= 1
        }
      } else if (ev.which === 39) { // Right arrow key
        if (this.activeIdx != Questions.length - 1) {
          this.activeIdx += 1
        }
      }
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
