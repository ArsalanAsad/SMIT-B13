// Select the value display and all buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// Initial counter value
let count = 0;

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;

        //Decrease
        if (styles.contains('decrease')) {
            count--;
        }
        //increase
        else if (styles.contains('increase')) {
            count++;
        }
        //reset
        else {
            count=0
        }

        // Change color based on value
        if (count > 0) {
            value.style.color = 'green';
        } else if ( count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = '#102a42';
        }

         // Update displayed value
         value.textContent = count
    });
});