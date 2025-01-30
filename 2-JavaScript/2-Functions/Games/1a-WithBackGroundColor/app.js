function calculateNextBirthday() {
    const birthDay = document.getElementById('birthDay').value;
    const birthMonth = document.getElementById('birthMonth').value - 1;
    const birthYear = document.getElementById('birthYear').value;

    if (!birthDay || !birthMonth || !birthYear) {
        aler('Please fill in all fields');
        return;
    }

    let currentDate = new Date()
    let nextBirthday = new Date(birthYear, birthMonth, birthDay);

    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
    const dayName = dayNames[nextBirthday.getDay()];

    const formattedDate = nextBirthday.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your next birth day will be on <strong>${dayName}</strong>, ${formattedDate}.`;

    changeBackgroundColor();
}

function changeBackgroundColor() {
    const colors = [ '#FF5733', '#33FF57', '#3357FF', '#F5B041', '#8E44AD', '#1ABC9C', '#E74C3C', '#F39C12' ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}