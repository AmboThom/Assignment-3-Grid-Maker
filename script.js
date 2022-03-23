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
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}