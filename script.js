const grid = document.querySelector('#container');
const body = document.querySelector('body');
const button = document.querySelector('button');
let gridValue = 0;

function gridSize() {
    button.addEventListener('click', () => {
        do{
            gridValue = prompt("Size of grid?", 64);
        } while (gridValue > 100);
        
        createGrid();
    },
    {once:true});
}

gridSize();

function createGrid() {
    for (let i = 0; i < gridValue; i++) {
        let columnCell = document.createElement('div'); // creates column of divs based on variable columns
        columnCell.className = 'column';

        for (let j = 0; j < gridValue; j++) {
            let rowCell = document.createElement('div'); // creates rows based on variable rows
            rowCell.className = 'row';
            columnCell.appendChild(rowCell); // add rows to each column
        }
        grid.appendChild(columnCell); // adds columns to the grid container
    }
    document.body.appendChild(grid); // adds grid container to the body of the HTML

    // colors cell black on mouse over to create a 'sketch' effect
    function sketch() {
        const rows = document.querySelectorAll('.row');
        rows.forEach((row) => {
            row.addEventListener('mouseover', () => {
                row.style.backgroundColor = "black";
            });
        });
    }
    sketch();
}