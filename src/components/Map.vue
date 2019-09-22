<template>
  <div id="map">
  </div>
</template>

<script>
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
          center: [-74.50, 40], // starting position [lng, lat]
          zoom: 1 // starting zoom
        })    
        this.getResponses()
    this.interval = setInterval(this.getResponses, 3000)

  },
  methods: {
    getRandomColor() {
        let randomColor = "hsl(" + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' + (85 + 10 * Math.random()) + '%)'
        return randomColor
    },
    getResponses() {
      fetch("https://laser-leotard.glitch.me/questions/0")
      .then(d=>d.json())
      .then(d => {
        for(let i = 0; i < d.length; i++) {
          if(!this.ids.includes(d[i].id)){
            var el = document.createElement('div')
            el.className = 'marker'
            el.style.backgroundColor = this.getRandomColor()
            el.style.width = '5px'
            el.style.height = '5px'
            el.style.borderRadius = '50%'
            new mapboxgl.Marker(el)
            .setLngLat(JSON.parse(d[i]['answer']))
            .addTo(this.map)
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
#map {
    height: 100vh;
    width: 100vw;
}
</style>
