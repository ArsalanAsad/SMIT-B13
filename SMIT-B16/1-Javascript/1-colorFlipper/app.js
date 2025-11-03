const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    color.style.color = randomColor;
});

function getRandomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += hex [Math.floor(Math.random() * 16)];
    }
    return color;
};