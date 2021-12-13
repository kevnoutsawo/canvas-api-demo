const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

/* // fillRect()
ctx.fillStyle = 'red'
ctx.fillRect(20, 20, 150, 100)
ctx.fillStyle = 'blue'
ctx.fillRect(200, 20, 150, 100)

// strokeRect()
ctx.lineWidth = 5
ctx.strokeStyle = 'green'
ctx.strokeRect(100, 200, 150, 100)

// clearRect()
ctx.clearRect(25, 25, 140, 90)

// fillText()
ctx.font = '30px cursive'
ctx.fillStyle = 'purple'
ctx.fillText('Hello World', 400, 50)

// strokeText()
ctx.font = '33px arial'
ctx.lineWidth = 1
ctx.strokeStyle = 'orange'
ctx.strokeText('Hello World', 400, 100)

 */

// Paths
// Trialngles
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(150, 50)
ctx.lineTo(100, 200)
ctx.lineTo(50, 50)
// ctx.closePath()
//ctx.stroke()
ctx.fillStyle = 'coral'
ctx.fill()

ctx.beginPath()
ctx.moveTo(200, 50)
ctx.lineTo(150, 200)
ctx.lineTo(250, 200)
ctx.closePath()
ctx.stroke()

// Rectangle
ctx.beginPath()
ctx.rect(300, 50, 150, 100)
ctx.fillStyle = 'teal'
ctx.fill()

