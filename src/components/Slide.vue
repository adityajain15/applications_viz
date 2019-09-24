<template>
  <div class="vh-100 dt w-100 heebo" :style="`background:${background ? background : 'deeppink'}`">
    <h1 class="dtc v-mid f1 tc white" :style="`color:${textcolor ? textcolor : 'white'}`">{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props:['text', 'background', 'textcolor']
}
</script>

<style scoped>

</style>
