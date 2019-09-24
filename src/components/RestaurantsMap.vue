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
          center: [-73.879, 40.712], // starting position [lng, lat]
          zoom: 10.74 // starting zoom
        })    
        this.interval = setInterval(this.getResponses, 5000)

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
            console.log(d[i]['answer'])
            if (d[i]['answer'] == null) {
                continue
            }
            var el = document.createElement('div')
            el.className = 'marker'
            el.style.backgroundImage = "url('./pizza-slice.png')"
            el.style.backgroundSize = 'cover'
            el.style.width = '25px'
            el.style.height = '25px'

            let latlng = JSON.parse(d[i]['answer'])
            new mapboxgl.Marker(el)
            .setLngLat(latlng)
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
