import Ball from './ball.js'
import Paddle from './paddle.js'


const ball = new Ball(document.getElementById('ball'));
const playerPaddle = new Paddle(document.getElementById('player-paddle'));
const computerPaddle = new Paddle(document.getElementById('computer-paddle'))
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')
//update loop

let lastTime;

function update(time) {
    if(lastTime != null) {
        const delta = time - lastTime
        
        
        //update code
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
        computerPaddle.update(delta, ball.y)
        
        if(isLose()) {
            handleLose()
        }
    }
    
    lastTime = time;
    window.requestAnimationFrame(update)
    
}

function isLose() {
    const rect = ball.rect()
    return rect.left >= window.innerWidth || rect.right <= 0
}

function handleLose() {
    const rect = ball.rect()
    if(rect.right >= window.innerWidth) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1
    }else{
        computerScore.textContent = parseInt(computerScore.textContent) + 1
    }
    ball.reset()
    computerPaddle.reset()
    
}

document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight * 100)
})

window.requestAnimationFrame(update)