<template>
  <div class="dt vh-100 w-100">
    <div class="dtc v-mid tc">
      <template v-for="(meal, index) in map">
        <div class="db mv3 heebo f2" :key="`meal-${index}`">
          <span class="">{{meal.symbol}}</span>
          <span class="red">{{meal.sign}}</span>
          <span class="pl3">{{counts.map(d=>d===meal.sign?1:0).reduce((a,b)=>a+b,0)}}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import brunch from '../../public/brunch.json'
export default {
  name: 'Brunch',
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
    this.map = brunch
    this.map.forEach(meal => {
      this.counts[meal.sign] = 0
    })
    this.getResponses()
    this.interval = setInterval(this.getResponses, 5000)
  },
  methods: {
    getResponses() {
      fetch("https://laser-leotard.glitch.me/questions/14")
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
.red, .pl3 {
    font-family: 'Lato', sans-serif;

}

.pl3 {
  font-size: 66px;
  margin-left: 25px;
}
.red {
    color: #3d5e69;
    font-variant: all-petite-caps;
    margin-left: 15px;
    font-size: 80px;
}
</style>
