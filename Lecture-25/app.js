let canvas = document.querySelector('canvas'); 
let ctx =  canvas.getContext('2d'); 


// ctx.fillStyle = "red"
// ctx.fillRect(100,100,150,150)

// ctx.strokeStyle = "blue"
// ctx.strokeRect(100,100,150,150)


// draw paths
ctx.beginPath()
ctx.moveTo(100,100);
ctx.lineTo(150,150)
ctx.lineTo(50,150)
ctx.lineTo(50,50)
ctx.lineTo(150,50)
ctx.lineTo(100,100);
ctx.lineTo(200,150);
ctx.lineTo(200,50);
ctx.lineTo(100,100);
ctx.stroke()
// ctx.fill()
ctx.closePath()

ctx.font = '60px cursive'
ctx.fillStyle = "green"
ctx.fillText("samarth" , 0,100)
// ctx.fillText("samarth" , 100,150)