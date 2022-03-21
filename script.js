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
    alert("Clicked Remove Row"); // Replace this line with your code.
    
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
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