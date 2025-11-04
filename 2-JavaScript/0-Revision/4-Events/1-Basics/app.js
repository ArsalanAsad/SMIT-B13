const btn = document.querySelector('.btn').addEventListener('click', () => {
    alert('button is clicked');
});


//3.Best practice
const btns = document.querySelector('button');
btns.addEventListener('click', handleClick)

function handleClick () {
    alert('now button is clicked')
}

// 4.best practice
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent Clicked');
});

document.getElementById('child').addEventListener('click', () =>{
    console.log('Child Click')
})

// parent.addEventListener('click', handler, true);

// 5. event object
document.addEventListener('click', () => {
    console.log(event.type); //click
    console.log(event.target); //element clicked
    console.log(event.clientX); //mouse x co-ordinate
});

//USEFUL OTHER METHODS
// event.preventDefault()	Stop default browser action (e.g. prevent form submit)
// event.stopPropagation()	Stop event from bubbling further up
// event.target	The element that triggered the event
// event.currentTarget	The element handling the event

// 5. Event Delegation advanced concept
document.getElementById('menu').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('You clicked ${e.target.textContent}');
    }
});

// If you want to be a true events expert, learn:

// Call stack

// Web APIs

// Callback queue

// Microtasks (Promises)