<template>
  <div class="mv5 dt vh-75 w-100">
    <div class="v-mid dtc tc">
      <template v-for="index in 16">
        <div class="db mv3 heebo f4" :key="`sib-${index}`">
          <span class="red">{{index - 1}}</span>
          <span class="pl3">{{counts.map(d => d === (index - 1) ? 1 : 0).reduce((a,b)=>a+b,0)}}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sibling',
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
      fetch("https://laser-leotard.glitch.me/questions/12")
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
