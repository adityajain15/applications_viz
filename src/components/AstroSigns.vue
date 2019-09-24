<template>
  <div class="mv5 dt vh-50 w-100">
    <div class="v-mid dtc tc">
      <template v-for="(sign, index) in map">
        <div class="db mv3 heebo f3" :key="`astro-${index}`">
          <span class="">{{sign.symbol}}</span>
          <span class="red">{{sign.sign}}</span>
          <span class="pl3">{{counts.map(d=>d===sign.sign?1:0).reduce((a,b)=>a+b,0)}}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import starsigns from '../../public/starsigns.json'
export default {
  name: 'AstroSigns',
  data(){
    return {
      responses: [],
      map: [],
      counts: [],
      ids: [],
      interval: null
    }
  },
  mounted() {
    this.map = starsigns
    this.map.forEach(sign => {
      this.counts[sign.sign] = 0
    })
    this.getResponses()
    this.interval = setInterval(this.getResponses, 3000)
  },
  methods: {
    getResponses() {
      fetch("https://laser-leotard.glitch.me/questions/7")
      .then(d=>d.json())
      .then(d => {
        for(let i = 0; i < d.length; i++) {
          if(!this.ids.includes(d[i].id)){
            //this.counts[d[i].answer] += 1
            this.counts.push(d[i].answer)
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

</style>
