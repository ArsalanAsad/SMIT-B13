const gameArea = document.getElementById("game-area")
const snake = document.getElementById("snake")
const ball = document.getElementById("ball")

const moveTheSnake = (e) => {
    const isRight = e.code === "ArrowRight"
    const isUp =  e.code === "ArrowUp"
    const isDown = e.code === "ArrrowDown"
    const isLeft = e.code === "ArrowLeft"

    const positionDetail = snake.getBoundingClientRect()
    const yposition = positionDetail.top + "px"
    const xposition = positionDetail.left + "px"

    if (isRight) {
        snake.style.removeProperty("left")

        snake.style.animationName = "leftToRight"
        snake.style.top = yposition
        snake.style.setProperty("--current-position", xPostion)
        snake.style.transform = "rotate(90deg)"
    }

    else if (isUp) {
        snake.style.removeProperty("top")
        snake.style.animationName = "bottomToTop"
        snake.style.left = xposition
        snake.style.setProperty("--current-position", (window.innerHeight - positionDetail.top) + "px")
        snake.style.transform = "rotate(0deg)"
    }
}
gameArea.addEventListener('keydown', moveTheSnake)

// function getRandomNumber(){}
const getRandomNumber = () => {
    const generatedRandomNumber = Math.random()
    console.log(generatedRandomNumber)
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