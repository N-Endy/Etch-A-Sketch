// cache DOM for usable variables
const button = document.querySelector('.btn');
const container = document.querySelector('.container');

// Function to create initial 16 * 16 grid
function initialGrid(cols, rows) {
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid";
    };
}
initialGrid(16, 16);

// Button Event Listener to collect user Input
button.addEventListener('click', () => {
    let userInput;
    do {
        userInput = prompt('Please input a number for the divs', '');
    } while (userInput > 100 || userInput === '');
    // call external function to apply the user input
    createGrid(userInput, userInput);
    
})

function createGrid(col, row) {
    // clear initial div created
    removeChildNodes();

    // create new divs with user input
    container.style.setProperty('--grid-cols', col);
    container.style.setProperty('--grid-rows', row);
    for (i = 0; i < (col * row); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid";
    };
}

function removeChildNodes() {
    let divs = document.querySelectorAll('.grid');
    console.log(divs)
    divs.forEach(div => container.removeChild(div));
}
