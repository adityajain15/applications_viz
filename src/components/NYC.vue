<template>
  <div class="mv5 dt vh-75 w-100">
    <div class="v-mid dtc tc">
      <template v-for="(resp, index) in map">
        <div class="db mv3 f2 heebo" :key="`astro-${index}`">
          <span class="red">{{resp}}</span>
          <span class="pl3">{{counts.map(d=>d===resp?1:0).reduce((a,b)=>a+b,0)}}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NYC',
  data(){
    return {
      responses: [],
      map: ["Less than a few months", "Less than a year","About a year","A few years","Too long, get me the hell out of here"],
      counts: [],
      ids: [],
      interval: null
    }
  },
  mounted() {
    this.getResponses()
    this.interval = setInterval(this.getResponses, 5000)
  },
  methods: {
    getResponses() {
      fetch("https://laser-leotard.glitch.me/questions/15")
      .then(d=>d.json())
      .then(d => {
        for(let i = 0; i < d.length; i++) {
          if(!this.ids.includes(d[i].id)){
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
  .red {
  color: #6c53c5;
    font-family: 'Montserrat';
    font-variant: all-petite-caps;
    font-weight: 900;
    letter-spacing: 1px;
    margin-left: 12px;
    font-size: 65px;
  }
  .pl3 {
    color:  #4c4c4c;
    font-size: 55px;
    margin-left: 25px;
  }
</style>
