function calculateNextBirthday() {
    const birthDay = document.getElementById('birthDay').value;
    const birthMonth = document.getElementById('birthMonth').value - 1;
    const birthYear = document.getElementById('birthYear').value;

    if (!birthDay || !birthMonth || !birthYear) {
        alert('Please fill in the all fields');
        return;
    }
    let currentDate = new Date();
    let nextBirthday = new Date(birthYear, birthMonth, birthDay);

    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayName = dayNames[nextBirthday.getDay()];

    const formattedDate = nextBirthday.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your next birthday will be on <strong>${dayName}</strong>, ${formattedDate}.`;
}