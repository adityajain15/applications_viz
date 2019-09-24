<template>
  <div class="vh-100 dt w-100 heebo">
    <div v-if="randomResponse" class="dtc v-mid tc">
      <img v-if="randomResponse.photo" :src="`https://farm${randomResponse.photo.farm}.staticflickr.com/${randomResponse.photo.server}/${randomResponse.photo.id}_${randomResponse.photo.secret}.jpg`"/>
      <span class="db f1 heebo">{{randomResponse.data.answer}}</span>
    </div>
    <div v-else class="dtc v-mid tc">
      <img src="./../assets/El.jpg" class="vh-50"/>
      <span class="db f1 heebo">Hang on while doggo fetches images from internetz</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ImageSearch',
  data(){
    return {
      responses: [],
      ids: [],
      interval: [],
      randomResponse: null,
    }
  },
  props: ['endpoint'],
  mounted() {
    this.getResponses()
    this.getRandomResponse()
    this.interval.push(setInterval(this.getResponses, 3000))
    this.interval.push(setInterval(this.getRandomResponse, 3000))
  },
  methods: {
    getResponses() {
      fetch(`https://laser-leotard.glitch.me/questions/${this.endpoint}`)
      .then(d=>d.json())
      .then(d => {
        for(let i = 0; i < d.length; i++) {
          if(!this.ids.includes(d[i].id)){
            fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=71542c171848da257b3caa214f7ed00f&format=json&nojsoncallback=1&text=${d[i].answer}&content_type=1&safe_search=1&sort=relevance`)
              .then(flickrResponse=>flickrResponse.json())
              .then(flickrResponse=>{
                const response = {photo: flickrResponse.photos.photo.length ? flickrResponse.photos.photo[4] : null, data: d[i]}
                this.responses.push(response)
              })
            this.ids.push(d[i].id)
          }
        }
        
      })
    },
    getRandomResponse(){
      if(this.responses.length){
        this.randomResponse = this.responses[Math.floor(Math.random() * this.responses.length)]
      }
    }
  },
  beforeDestroy() {
    this.interval.forEach(d=>clearInterval(d))
  }
}
</script>

<style scoped>

</style>
