let columnValue = 65;
let rowValue = 65;

const grid = document.querySelector('#container');
const body = document.querySelector('body');

function createGrid() {
    for (let i = 0; i < columnValue; i++) {
        let columnCell = document.createElement('div'); // creates column of divs based on variable columns
        columnCell.className = 'column';

        for (let j = 0; j < rowValue; j++) {
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

createGrid();