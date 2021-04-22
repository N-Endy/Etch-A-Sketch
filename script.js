const button = document.querySelector('.btn');
const container = document.querySelector('.container');

function createGrid(cols, rows) {
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i+1);
        container.appendChild(cell).className = "grid";
    };
}

createGrid(100, 10);