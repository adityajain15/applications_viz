<template>
  <div class="mv5 dt vh-75 w-100">
    <div class="v-mid dtc tc">
      <template v-for="index in 15">
        <div class="db mv3 heebo f4" :key="`sib-${index}`">
          <span class="red">{{index}} {{index === 1 ? 'language' : 'languages'}}</span>
          <span class="pl3">{{counts.map(d => d === (index) ? 1 : 0).reduce((a,b)=>a+b,0)}}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Language',
  data(){
    return {
      responses: [],
      counts: [],
      ids: [],
      interval: null
    }
  },
  mounted() {
    this.getResponses()
    this.interval = setInterval(this.getResponses, 3000)
  },
  methods: {
    getResponses() {
      fetch("https://laser-leotard.glitch.me/questions/10")
      .then(d=>d.json())
      .then(d => {
        for(let i = 0; i < d.length; i++) {
          if(!this.ids.includes(d[i].id)){
            //this.counts[d[i].answer] += 1
            this.counts.push(parseInt(d[i].answer))
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
.pl3, .red {
  font-family: 'Lato';
}
.red {
  font-weight: 800;
  font-variant: all-petite-caps;
  font-size: 23px;
  letter-spacing: 1px;
}
</style>
