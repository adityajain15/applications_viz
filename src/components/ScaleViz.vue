<template>
  <div class="dt vh-100 w-80 center">
    <div class="dtc v-mid">
      <span class="">{{lowlabel}}️</span>️️️
      <svg class="w-90 h4" ref="svg">
        <path :d="`M${margin_h},${height / 2}L${width},${height / 2}`"/>
        <template v-for="tick in ticks">
          <path :d="`M${scale(tick)},${height/2}L${scale(tick)},${height/2 + 5}`"/>
          <text class="heebo v-btm" :x="scale(tick)" y="1em">{{tick}}</text>
        </template>
        <circle v-for="response in responses" r="10" :cx="scale(response.answer)" :cy="height/2 - Math.random() * 10"/>
      </svg>
      <span class="">{{highlabel}}</span>
    </div>
  </div>
</template>

<script>
import { scaleLinear } from 'd3-scale'
export default {
  name: 'ScaleViz',
  data(){
    return {
      responses: [],
      ids: [],
      interval: null,
      width: 0,
      height: 0,
      scale: null,
      ticks: [],
      margin_h: 10
    }
  },
  props: ['domain', 'lowlabel', 'highlabel', 'url', 'heading'],
  mounted() {
    this.windowResize()
    this.getResponses()
    window.addEventListener('resize', this.windowResize)
    this.interval = setInterval(this.getResponses, 3000)
  },
  methods: {
    windowResize() {
      this.height = this.$refs.svg.getBoundingClientRect().height
      this.width = this.$refs.svg.getBoundingClientRect().width - (2 * this.margin_h)
      this.scale = scaleLinear().domain(this.domain).range([this.margin_h, this.width])
      this.ticks = this.scale.ticks()
    },
    getResponses() {
      fetch(`https://laser-leotard.glitch.me/questions/${this.url}`)
      .then(d=>d.json())
      .then(d => {
        for(let i = 0; i < d.length; i++) {
          if(!this.ids.includes(d[i].id)){
            this.ids.push(d[i].id)
            this.responses.push(d[i])
          }
        }
      })
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
#app {
background-color: #f3f3f3;
}
svg{
}
path{
  stroke:black;
  stroke-width: 1px;
}
text{
  text-anchor: middle;
}
circle{
  fill:deeppink;
  opacity: .5;
}
</style>
