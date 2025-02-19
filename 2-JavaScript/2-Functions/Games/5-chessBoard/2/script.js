// Get the chessboard container
const chessboard = document.getElementById('chessboard');

// Define the size of the chessboard
const size = 8;

// Loop to create the chessboard
for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
        // Create a square element
        const square = document.createElement('div');
        square.classList.add('square');

        // Alternate between white and black squares
        if ((row + col) % 2 === 0) {
            square.classList.add('white');
        } else {
            square.classList.add('black');
        }

        // Add the square to the chessboard
        chessboard.appendChild(square);
    }
}
