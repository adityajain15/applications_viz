<template>
  <div id="map">
  </div>
</template>

<script>

const data = [{"number":2,"question":"Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)","answer":null,"id":2,"createdAt":"2019-09-23T19:52:19.787Z","updatedAt":"2019-09-23T19:52:19.787Z"},{"number":2,"question":"Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)","answer":null,"id":12,"createdAt":"2019-09-23T20:13:28.148Z","updatedAt":"2019-09-23T20:13:28.148Z"},{"number":2,"question":"Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)","answer":null,"id":16,"createdAt":"2019-09-23T20:41:43.155Z","updatedAt":"2019-09-23T20:41:43.155Z"},{"number":2,"question":"Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)","answer":null,"id":34,"createdAt":"2019-09-23T21:05:20.074Z","updatedAt":"2019-09-23T21:05:20.074Z"},{"number":2,"question":"Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)","answer":null,"id":38,"createdAt":"2019-09-23T21:05:31.034Z","updatedAt":"2019-09-23T21:05:31.034Z"},{"number":2,"question":"Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)","answer":null,"id":79,"createdAt":"2019-09-23T21:32:04.051Z","updatedAt":"2019-09-23T21:32:04.051Z"},{"number":2,"question":"Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)","answer":null,"id":81,"createdAt":"2019-09-23T21:33:35.900Z","updatedAt":"2019-09-23T21:33:35.900Z"},{"number":2,"question":"Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)","answer":null,"id":83,"createdAt":"2019-09-23T21:35:33.490Z","updatedAt":"2019-09-23T21:35:33.490Z"},{"number":2,"question":"Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)","answer":null,"id":85,"createdAt":"2019-09-23T21:36:54.638Z","updatedAt":"2019-09-23T21:36:54.638Z"},{"number":2,"question":"Which restaurant in NYC has the best food from your home town/country? (Add a restaurant)","answer":"[-73.954339,40.743374]","id":88,"createdAt":"2019-09-23T21:39:29.216Z","updatedAt":"2019-09-23T21:39:29.216Z"}]
import mapboxgl from 'mapbox-gl'
export default {
  name: 'Map',
  data(){
    return {
        map: null,
        responses: [],
        ids: [],
        interval: null
    }
  },
  mounted() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoid2lzZXNocmltcCIsImEiOiJjamhtZHFkbHEzOWI1MzZvMWh2dWc0dnpwIn0.mPpRpAYssv7wcIKaAijezw'

        this.map = new mapboxgl.Map({
          container: 'map', // container id
          style: 'mapbox://styles/mapbox/dark-v9', // stylesheet location
          center: [-73.879, 40.712], // starting position [lng, lat]
          zoom: 10.74 // starting zoom
        })    
        setTimeout(this.getResponses, 500)

  },
  methods: {
    getRandomColor() {
        let randomColor = "hsl(" + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' + (85 + 10 * Math.random()) + '%)'
        return randomColor
    },
    getResponses() {
      fetch("https://laser-leotard.glitch.me/questions/2")
      .then(d=>d.json())
      .then(d => {
        for(let i = 0; i < d.length; i++) {
          if(!this.ids.includes(d[i].id)){
            this.ids.push(d[i].id)
            this.responses.push(d[i])
            if (d[i]['answer'] == null) {
                continue
            }
            var el = document.createElement('div')
            el.className = 'marker'
            el.style.backgroundImage = "url('./pizza-slice.png')"
            el.style.backgroundSize = 'cover'
            el.style.width = '25px'
            el.style.height = '25px'
            
            new mapboxgl.Marker(el)
            .setLngLat(JSON.parse(d[i]['answer']))
            .addTo(this.map)
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
#map {
    height: 100vh;
    width: 100vw;
}

</style>
