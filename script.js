let columns = 16;
let rows = 16;

const grid = document.querySelector('#container');
const body = document.querySelector('body');

function createGrid() {
    for (let i = 0; i < columns; i++) {
        let columnCell = document.createElement('div'); // creates column of divs based on variable columns
        columnCell.className = 'column';

        for (let j = 0; j < rows; j++) {
            let rowCell = document.createElement('div'); // creates rows based on variable rows
            rowCell.className = 'row';
            columnCell.appendChild(rowCell); // add row to column
        }
        grid.appendChild(columnCell);
    }
    document.body.appendChild(grid);
}

createGrid();