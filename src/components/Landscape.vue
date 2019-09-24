<template>
  <div>
    <template v-for="(response, index) in responses">
      <span 
        :key="`landscape-span-${index}`" 
        class="heebo f1 measure" 
        :style="`color: ${index % 2 ? 'red' : 'black' };`">
          {{response.answer}}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Landscape',
  data(){
    return {
      responses: [],
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
      fetch("https://laser-leotard.glitch.me/questions/1")
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

</style>
