// part-1
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let boardHeight = 800;
// let boardWidth = 1200;
// let sqaure = 50;
// let snakeCells = [ [0,0] ]


// // draw the snake
// function draw(){}

// // update the snake
// function update(){}


// // for repeating tasks every 200 milli secs
// setInterval(function(){

// } , 200)


// ----------------------------------------------------
// part-2&3

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');
// let boardHeight = 800;
// let boardWidth = 1200;
// let sqaure = 50;
// let snakeCells = [ [0,0],[50,0] ]

// // draw the snake
// function draw(){
//     // rubber
//     ctx.clearRect(0,0,boardWidth,boardHeight)
//     //draw
//     for(let cell of snakeCells){
//         // cell[0] //x coordinate , cell[1] //y coordinate
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],sqaure,sqaure)
//     }
// }

// // update the snake
// function update(){
//     let headX = snakeCells[snakeCells.length-1][0] //snakeCells[1][0] -> 50
//     let headY = snakeCells[snakeCells.length-1][1] //snakeCells[1][1] -> 0
//     let newHeadX = headX + sqaure; // 100
//     let newHeadY = headY; // 0 
//     snakeCells.push([newHeadX,newHeadY]);
//     snakeCells.shift()
// }

// // for repeating tasks every 200 milli secs
// setInterval(function(){
//     update();
//     draw();
// } , 100)

// ----------------------------------------------------
// part-4&5

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');
// let boardHeight = 800;
// let boardWidth = 1200;
// let sqaure = 50;
// let snakeCells = [ [0,0],[50,0] ];
// let direction = "right";

// // jahan chaho vahan lejaao snake ko
// document.addEventListener('keydown' , function(event){
//     if(event.key === "ArrowDown"){direction = "down"}
//     else if(event.key === "ArrowUp"){direction = "up"}
//     else if(event.key === "ArrowLeft"){direction = "left"}
//     else if(event.key === "ArrowRight"){direction = "right"}
// })

// // draw the snake
// function draw(){
//     ctx.clearRect(0,0,boardWidth,boardHeight)
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],sqaure,sqaure)
//     }
// }

// // update the snake
// function update(){
//     let headX = snakeCells[snakeCells.length-1][0] 
//     let headY = snakeCells[snakeCells.length-1][1] 
//     let newHeadX; 
//     let newHeadY; 
//     if(direction === 'up'){
//         newHeadX = headX;
//         newHeadY = headY - sqaure;
//     }
//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + sqaure;
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - sqaure;
//         newHeadY = headY ;
//     }
//     else if(direction === 'right'){
//         newHeadX = headX + sqaure;
//         newHeadY = headY ;
//     }

//     snakeCells.push([newHeadX,newHeadY]);
//     snakeCells.shift()
// }

// // for repeating tasks every 200 milli secs
// setInterval(function(){
//     update();
//     draw();
// } , 100)


// ----------------------------------------------------
// part-6

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');
// let boardHeight = 800;
// let boardWidth = 1200;
// let sqaure = 50;
// let snakeCells = [ [0,0],[50,0] ];
// let direction = "right";
// let gameOver = false;

// // jahan chaho vahan lejaao snake ko
// document.addEventListener('keydown' , function(event){
//     if(event.key === "ArrowDown"){direction = "down"}
//     else if(event.key === "ArrowUp"){direction = "up"}
//     else if(event.key === "ArrowLeft"){direction = "left"}
//     else if(event.key === "ArrowRight"){direction = "right"}
// })

// // draw the snake
// function draw(){
//     if(gameOver === true){
//         clearInterval(id);
//         return
//     }

//     ctx.clearRect(0,0,boardWidth,boardHeight)
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],sqaure,sqaure)
//     }
// }

// // update the snake
// function update(){
//     let headX = snakeCells[snakeCells.length-1][0] 
//     let headY = snakeCells[snakeCells.length-1][1] 
//     let newHeadX; 
//     let newHeadY; 
//     if(direction === 'up'){
//         newHeadX = headX;
//         newHeadY = headY - sqaure;
//         if(newHeadY<0){gameOver = true}
//     }
//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + sqaure;
//         if(newHeadY===boardHeight){gameOver = true}
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - sqaure;
//         newHeadY = headY ;
//         if(newHeadX<0){gameOver = true}
//     }
//     else if(direction === 'right'){
//         newHeadX = headX + sqaure;
//         newHeadY = headY ;
//         if(newHeadX===boardWidth){gameOver = true}
//     }

//     snakeCells.push([newHeadX,newHeadY]);
//     snakeCells.shift()
// }

// // for repeating tasks every 200 milli secs
// let id = setInterval(function(){
//     update();
//     draw();
// } , 100)



// ----------------------------------------------------
// part-7

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let boardHeight = 800;
let boardWidth = 1200;
let sqaure = 50;
let snakeCells = [ [0,0],[50,0] ];
let direction = "right";
let gameOver = false;

let foodCell = generateRandomFood();

// jahan chaho vahan lejaao snake ko
document.addEventListener('keydown' , function(event){
    if(event.key === "ArrowDown"){direction = "down"}
    else if(event.key === "ArrowUp"){direction = "up"}
    else if(event.key === "ArrowLeft"){direction = "left"}
    else if(event.key === "ArrowRight"){direction = "right"}
})

// draw the snake
function draw(){
    if(gameOver === true){
        clearInterval(id);
        return
    }

    ctx.clearRect(0,0,boardWidth,boardHeight)
    for(let cell of snakeCells){
        ctx.fillStyle = "brown"
        ctx.fillRect(cell[0],cell[1],sqaure,sqaure)
    }

    // draw food
    ctx.fillStyle = "orange"
    ctx.fillRect(foodCell[0] , foodCell[1] , sqaure,sqaure)
}

// update the snake
function update(){
    let headX = snakeCells[snakeCells.length-1][0] 
    let headY = snakeCells[snakeCells.length-1][1] 
    let newHeadX; 
    let newHeadY; 
    if(direction === 'up'){
        newHeadX = headX;
        newHeadY = headY - sqaure;
        if(newHeadY<0){gameOver = true}
    }
    else if(direction === 'down'){
        newHeadX = headX;
        newHeadY = headY + sqaure;
        if(newHeadY===boardHeight){gameOver = true}
    }
    else if(direction === 'left'){
        newHeadX = headX - sqaure;
        newHeadY = headY ;
        if(newHeadX<0){gameOver = true}
    }
    else if(direction === 'right'){
        newHeadX = headX + sqaure;
        newHeadY = headY ;
        if(newHeadX===boardWidth){gameOver = true}
    }

    snakeCells.push([newHeadX,newHeadY]);
    snakeCells.shift()
}

function generateRandomFood(){
    return [
       Math.round(Math.random()*(boardWidth - sqaure) / sqaure)*sqaure , //x
       Math.round(Math.random()*(boardHeight - sqaure) / sqaure)*sqaure //y
    ]
}

// for repeating tasks every 200 milli secs
let id = setInterval(function(){
    update();
    draw();
} , 100)