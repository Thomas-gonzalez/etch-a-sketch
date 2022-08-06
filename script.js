const squareGrid = document.querySelector('div.square-grid');
for (let i = 0; i<16; i++) { 
    const row = document.createElement('div');
    row.classList.add('row');
    squareGrid.appendChild(row);
    for (let i = 0; i<16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}

let mouseIsDown = false;
const body = document.body;
body.addEventListener('mousedown', () => mouseIsDown = true);
body.addEventListener('mouseup', () => mouseIsDown = false);

function addGriddListeners() {
    const squares = document.querySelectorAll('div.square');
    squares.forEach(square => {
        square.addEventListener('mousedown', (e) => {
            square.style['background-color'] = 'black';
        });
        square.addEventListener('mouseenter', (e) => {
            if (mouseIsDown) square.style['background-color'] = 'black';
        });
    });
}

addGriddListeners();

function removeGridElements() {
    const grid = document.querySelector('div.square-grid');
    const rows = document.querySelectorAll('div.row');
    rows.forEach(row => {
        grid.removeChild(row);
    });
}

function createGrid(size) {
    if (typeof size !== 'number' || size > 100) {
        console.log('ERROR. Size not integer');
        return;
    }
    const squareGrid = document.querySelector('div.square-grid');
    for (let i = 0; i<size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        squareGrid.appendChild(row);
        for (let i = 0; i<size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);            
        }        
    }

}

const newGrid = document.querySelector('button.new-grid');
newGrid.addEventListener('click', (e) => {
    let gridSize = prompt('Select grid size (e.g. Enter "16" for a 16x16 grid)');
    gridSize = parseInt(gridSize);
    if (gridSize > 100) gridSize = 100;
    console.log(`gridSize: ${gridSize}`);
    if (gridSize) {
        removeGridElements();
        createGrid(gridSize);
        addGriddListeners();
    }
});