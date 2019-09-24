<template>
  <div class="vh-100 dt w-100 heebo" :style="`background:${background ? background : 'rgb(251, 210, 255)'}`">
    <h1 class="dtc v-mid f1 tc white" :style="`color:${textcolor ? textcolor : 'black'}`">{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props:['text', 'background', 'textcolor']
}
</script>

<style scoped>
h1 {
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
