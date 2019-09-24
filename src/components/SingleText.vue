<template>
  <div id="single_text_container">
      <div ref="single_text" id="single_text">
      </div>
  </div>
</template>

<script>
export default {
    name: 'SingleText',
    data: function() {
        return {
            ids: [],
            interval: null,
            textInterval: null,
            responses: [],
            textEls: [],
            displayedEls: []
        }
    },
    props: ['url'],
    mounted() {
        this.text = document.getElementById('single_text')
        this.getResponses()

        this.interval = setInterval(this.getResponses, 3000)
        this.textInterval = setInterval(this.displayNewText, 5000)
    },

    methods: {
        displayNewText() {
            if (!this.textEls.length) {
                if (this.displayedEls.length) {
                    this.textEls = [...this.displayedEls]
                    this.displayedEls = []
                }
            }

            var child = this.text.lastElementChild 
            if (child) {
                this.fadeOut(child)
            }

            setTimeout(() => {
                let ridx = Math.floor(Math.random() * this.textEls.length)
                this.displayedEls.push(this.textEls[ridx])
                let text = document.createElement('div')
                text.style.alignSelf = 'center'
                text.innerText = this.textEls[ridx]
                text.style.opacity = 0
                this.fadeIn(text)
                this.text.appendChild(text)
                this.textEls.splice(ridx, 1)
            }, 1500)
        },

        fadeOut(element) {
            var op = 1
            var timer = setInterval(() => {
                if (op <= 0.1){
                    clearInterval(timer)
                    element.style.display = 'none'
                    this.text.removeChild(element)
                }
                element.style.opacity = op
                element.style.filter = 'alpha(opacity=' + op * 100 + ")"
                op -= op * 0.1
            }, 10)
        },
        fadeIn(element) {
            var op = 0.1
            element.style.display = 'block'
            var timer = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer)
                }
                element.style.opacity = op
                element.style.filter = 'alpha(opacity=' + op * 100 + ")"
                op += op * 0.1
            }, 10)
        },
        
        getResponses() {
            fetch(`https://laser-leotard.glitch.me/questions/${this.url}`)
            .then(d=>d.json())
            .then(d => {
                for(let i = 0; i < d.length; i++) {
                    if(!this.ids.includes(d[i].id)){
                        this.ids.push(d[i].id)
                        this.responses.push(d[i])
                        if (d[i].answer !== "null"){
                            this.textEls.push(d[i].answer)
                        }
                    }
                }
            })
        }
    },
    beforeDestroy() {
        clearInterval(this.textInterval)
        clearInterval(this.interval)
    }
}
</script>

<style scoped>
#single_text_container {
    background: linear-gradient(#e4e8ff, #fff2e1); 
}
#single_text{
    display: flex;
    height: 100vh;
    justify-content: center;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 60px;
    line-height: 50px;
    transition: fade .5s ease-in-out forwards;
    text-align: center;
    padding: 0 10vw;   
    color: #615c5c;
}
#single_text>div {
    align-self: center;
}
@keyframes fade {
  0%,100% { opacity: 0 }
  50% { opacity: 1 }
}
</style>