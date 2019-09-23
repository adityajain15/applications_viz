<template>
  <div class="w-75 h4 pa4 center">
    <span class="heebo">{{lowlabel}}️</span>️️️
    <svg class="w-90 v-mid" ref="svg">
      <path :d="`M${margin_h},${height / 2}L${width},${height / 2}`"/>
      <template v-for="tick in ticks">
        <path :d="`M${scale(tick)},${height/2}L${scale(tick)},${height/2 + 5}`"/>
        <text class="heebo f7" :x="scale(tick)" y="4em">{{tick}}</text>
      </template>
      <circle v-for="response in responses" r="2" :cx="scale(response.answer)" :cy="height/2 + (Math.random() < 0.5 ? Math.random() * -10 : Math.random() * 10)"/>
    </svg>
    <span class="heebo">{{highlabel}}</span>
  </div>
</template>

<script>

const dummyData = [{"number":1,"question":"What does the landscape of your home look like?","answer":1,"id":1,"createdAt":"2019-09-22T19:26:04.489Z","updatedAt":"2019-09-22T19:26:04.489Z"},{"number":1,"question":"What does the landscape of your home look like?","answer":1,"id":2,"createdAt":"2019-09-22T19:26:04.490Z","updatedAt":"2019-09-22T19:26:04.490Z"},{"number":1,"question":"What does the landscape of your home look like?","answer":2,"id":3,"createdAt":"2019-09-22T19:26:04.492Z","updatedAt":"2019-09-22T19:26:04.492Z"},{"number":1,"question":"What does the landscape of your home look like?","answer":90,"id":4,"createdAt":"2019-09-22T19:26:04.492Z","updatedAt":"2019-09-22T19:26:04.492Z"},{"number":1,"question":"What does the landscape of your home look like?","answer":20,"id":5,"createdAt":"2019-09-22T19:26:04.493Z","updatedAt":"2019-09-22T19:26:04.493Z"}]
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
  props: ['domain', 'lowlabel', 'highlabel', 'url'],
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
        d=dummyData
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
svg{
  height: 100%;
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
