<template>
  <div>
    <div ref="canvas"></div>
  </div>
</template>
<script>
let spring = 0.1;
let gravity = 0;
let friction = -.1;
let balls = []

class Ball {
  constructor(xin, yin, din, idin, oin, ps, numBalls) {
    this.x = xin
    this.y = yin
    this.vx = 0
    this.vy = 0
    this.diameter = din
    this.id = idin
    this.others = oin
    this.ps = ps
    this.numBalls = numBalls
    var hue = Math.floor(Math.random() * 360)
    var pastel = 'hsl(' + hue + ', 100%, 80%)'
    this.color = pastel
  }

  collide() {
    for (let i = this.id + 1; i < this.numBalls; i++) {
      let dx = this.others[i].x - this.x
      let dy = this.others[i].y - this.y
      let distance = Math.sqrt(dx * dx + dy * dy)
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      if (distance < minDist) {
        let angle = Math.atan2(dy, dx);
        let targetX = this.x + Math.cos(angle) * minDist;
        let targetY = this.y + Math.sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    this.vy += gravity
    this.x += this.vx
    this.y += this.vy
    let width = window.innerWidth
    let height = window.innerHeight
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2
      this.vx *= friction
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2
      this.vx *= friction
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2
      this.vy *= friction
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2
      this.vy *= friction
    }
  }

  display() {

    this.ps.fill(this.color)
    this.ps.noStroke()
    this.ps.ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

export default {
  name: 'DotFrequency',
  data: function () {
    return {
      script: null,
      ps: null,
      p: null,
      canvas: null,
      ids: [],
      balls: []
    }
  },

  mounted () {
    this.getResponses()
    this.script = p => {
      this.p = p

      p.setup = _ => {
        this.canvas = p.createCanvas(
          window.innerWidth,
          window.innerHeight
        )
        p.background(0)
        this.canvas.parent(this.$refs.canvas)
        p.frameRate(60)
      }

      window.addEventListener('resize', ev => {
        this.p.resizeCanvas(window.innerWidth, window.innerHeight)
      })

      p.draw = _ => {
        this.p.background(0)
        balls.forEach(ball => {
          ball.collide()
          ball.move()
          ball.display()
        })
      }
    }
    const P5 = require('p5')
    this.ps = new P5(this.script)
  },

  methods: {
    getResponses() {
      fetch("https://laser-leotard.glitch.me/questions/0")
      .then(d=>d.json())
      .then(d => {
        for(let i = 0; i < d.length; i++) {
          this.ids.push(d[i].id)
          let ball = new Ball(
            this.p.random(window.innerWidth),
            this.p.random(window.innerHeight),
            10,
            i,
            balls,
            this.p,
            this.ids.length
          )
          balls.push(ball)
        }

      })
    }
  }
}
</script>