<template>
  <div>
    <template v-for="(response, index) in responses">
      <span :key="`landscape-span-${index}`" class="heebo f1 measure" :style="`color: ${index % 2 ? 'red' : 'black' };`">{{response.answer}}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Landscape',
  data(){
    return {
      responses: [],
      timeOutID: null
    }
  },
  mounted() {
    fetch("https://laser-leotard.glitch.me/questions")
      .then(d=>d.json())
      .then(d => {
        for(let i = 0; i < d.length; i++) {
          this.responses.push(d[i])
        }
      })
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
