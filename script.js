// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let grid = document.getElementById("grid");

// Add a row
function addR() {
    numRows++;
    if (numCols == 0) numCols++; 
    let row = document.createElement("tr");
    grid.appendChild(row); 
    for (let i = 0; i < numCols; i++) { // Will make new row contain same # of cells as prev rows 
        let cell = document.createElement("td");
        row.appendChild(cell);
    }
}

// Add a column
function addC() {
    numCols++;
    if (numRows == 0) { // Condition has same functionality as calling addR with numCols == 0
        numRows++;
        let row = document.createElement("tr");
        grid.appendChild(row);
        let cell = document.createElement("td");
        row.appendChild(cell);
    } else { // Will append to each existing row another cell
        let rows = document.querySelectorAll("tr");
        for (let i = 0; i < rows.length; i++) {
            let cell = document.createElement("td");
            rows[i].appendChild(cell);
        }
    }
}

// Remove a row
function removeR() {
    if (numRows > 0) {
        let rows = document.querySelectorAll("tr");
        //Removes the last element of the row id, tr, from the DOM
        grid.removeChild(rows[numRows - 1]); 
        numRows--;
        if (numRows == 0) numCols = 0;
    }
}

// Remove a column
function removeC() {
    if (numCols > 0) { // If grid is empty, function will do nothing
        let rows = document.querySelectorAll("tr");
        if (numCols == 1) {
            for (let i = numRows - 1; i >= 0; i--) {
                grid.removeChild(rows[i]); // Since one element in each row, remove row
            }
            numCols = 0;
            numRows = 0;
        } else {
            for (let i = numRows - 1; i >= 0; i--) {
                rows[i].removeChild(rows[i].lastElementChild);
            }
            numCols--;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
    fillSelect();
}

// Fill all uncolored cells
function fillU(){
    // Extracts all cells and changes background color to selected color
    let cells = document.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor == '') {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    // Get each cell and change background color to selected color
    let cells = document.querySelectorAll("td");
    cells.forEach((cell) => {
        cell.style.backgroundColor = colorSelected;
    }) 
}

// Clear all cells
// function clearAll(){
//     //alert("Clicked Clear All"); // Replace this line with your code.
//     let cells = document.querySelectorAll("td");
//     cells.forEach((cell) => {
//         cell.style.backgroundColor = '';
//     }) 
// }

//Fill a cell with the selected color when clicked
const fillSelect = () => {
    let cells = document.querySelectorAll("td");
    cells.forEach((cell) => {
        cell.onclick = () => {
        cell.style.backgroundColor = colorSelected;
        }   
    })
    console.log("Clicked");
}