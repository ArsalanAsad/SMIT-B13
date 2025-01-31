// const gameArea = document.getElementById("game-area")
// const ball = document.getElementById("ball")
// const ball = '<div class="point-ball"></div>'
// gameArea.innerHTML = ball
const ball = document.getElementById("ball")
console.log(ball);


// function getRandomNumber(){}
const getRandomNumber = () => {
    const generatedRandomNumber = Math.random()
    const expectedNumber = Math.floor(generatedRandomNumber * 96)
    return expectedNumber
}

const popTheBall = () => {
    const top = getRandomNumber()
    const left = getRandomNumber()

    ball.style.top = `${top}vh`
    ball.style.left = `${left}vw`
}
popTheBall();