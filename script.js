const container = document.querySelector(".container");

// Making a container for the grid size
const gridSizeContainer = document.createElement("div");
gridSizeContainer.id = "gridSizeContainer";
gridSizeContainer.style.display = "flex";
gridSizeContainer.style.justifyContent = "center";
gridSizeContainer.style.marginBottom = "20px";

// Creating the grid size text
const gridSizeText = document.createElement("div");
gridSizeText.id = "gridSizeText";
gridSizeText.textContent = "Grid Size";

// Creating the grid size input field 
const gridSizeTextbox = document.createElement("input");
gridSizeTextbox.setAttribute("type", "number");
gridSizeTextbox.setAttribute("placeholder", "16");
gridSizeTextbox.style.margin = "0 10px";

// Creating the button to update the grid size 
const getValueBtn = document.createElement("button");
getValueBtn.id = "getValueBtn";
getValueBtn.textContent = "Change Grid Size";

// Append the label, input field, and button to the grid size container
gridSizeContainer.appendChild(gridSizeText);
gridSizeContainer.appendChild(gridSizeTextbox);
gridSizeContainer.appendChild(getValueBtn);

// Append the grid size container to the body, before the grid container
document.body.insertBefore(gridSizeContainer, container);

// Making a container for buttons below the grid
const optionsBtnContainer = document.createElement("div");
optionsBtnContainer.id = "optionsBtnContainer";

// Creating the reset button
const resetBtn = document.createElement("button");
resetBtn.id = "resetBtn";
resetBtn.textContent = "Reset Grid";

// Creating an eraser button
const eraserBtn = document.createElement("button");
eraserBtn.id = "eraserBtn";
eraserBtn.textContent = "Erase";

// Creating a draw button
const drawBtn = document.createElement("button");
drawBtn.id = "drawBtn";
drawBtn.textContent = "Draw";

// Creating the random color button
const randColorBtn = document.createElement("button");
randColorBtn.id = "randColorBtn";
randColorBtn.textContent = "Randomise Color";

// Creating the pick color button
const pickColorBtn = document.createElement("button");
pickColorBtn.id = "pickColorBtn";
pickColorBtn.textContent = "Choose Colour";

// Append the buttons to the container below the grid
optionsBtnContainer.appendChild(drawBtn);
optionsBtnContainer.appendChild(eraserBtn);
optionsBtnContainer.appendChild(resetBtn);
optionsBtnContainer.appendChild(randColorBtn);
optionsBtnContainer.appendChild(pickColorBtn);

// Append the options button container to the body
document.body.appendChild(optionsBtnContainer);

// Adding Event listeners to buttons
getValueBtn.addEventListener("click",  getValue);
resetBtn.addEventListener("click", resetGrid);
eraserBtn.addEventListener("click", eraseGrid);
drawBtn.addEventListener("click", drawTool);
randColorBtn.addEventListener("click", enableRandomColor);

// Function to generate random colors
function generateRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to enable random color
function enableRandomColor(){
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => {
        item.addEventListener("mouseover", function(){
            item.style.backgroundColor = generateRandomColor();
        })
    })
}

// Function to activate the draw tool 
function drawTool(){
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => {
        item.addEventListener("mouseover", function(){
            item.style.backgroundColor = "black";
        })
    })
}

// Function to erase some grid colour
function eraseGrid(){
    const gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => {
        item.addEventListener("mouseover", function(){
            item.style.backgroundColor = "lightgrey";
        });
    });
}

// Function to reset grid
function resetGrid(){
    const defaultGridSize = 16;
    const gridSize = defaultGridSize * defaultGridSize;

    // Clear the container's previous grid
    container.innerHTML = "";

    // Reset the input field and placeholder
    gridSizeTextbox.value = ""; // Clear the input field
    gridSizeTextbox.setAttribute("placeholder", "16"); // Reset placeholder

    // Adjust the grid layout for the default size
    container.style.gridTemplateColumns = `repeat(${defaultGridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${defaultGridSize}, 1fr)`;

    // Create the new grid items
    for(let i = 0; i < gridSize; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // Add event listener to create a trail effect
        gridItem.addEventListener("mouseover", function(){
            gridItem.style.backgroundColor = "black";
        });

        container.appendChild(gridItem);
    }
}


function getValue(){
    let value = parseInt(gridSizeTextbox.value);
    if(isNaN(value) || value < 1){
        alert("Please enter a valid number.");
        return;
    } else if(value > 100){
        alert("Max grid size is 100.");
        return;
    }

    // Clear the previous grid by removing all children of the container
    container.innerHTML = ""; 

    // Adjust the container's grid template to fit the new grid
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;

    // Loop to create a new grid based on the user input
    for(let i = 0; i < value * value; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // Add event listener to create a trail effect
        gridItem.addEventListener("mouseover", function(){
            gridItem.style.backgroundColor = "black";
        });

        container.appendChild(gridItem);
    }
}

// Default grid on page load
document.addEventListener("DOMContentLoaded", function(){
    const defaultGridSize = 16;

    // Setup the default grid layout
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${defaultGridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${defaultGridSize}, 1fr)`;

    // Loop to create grid items and append them to the container
    for(let i = 0; i < defaultGridSize * defaultGridSize; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // Add event listener to create a trail effect
        gridItem.addEventListener("mouseover", function(){
            gridItem.style.backgroundColor = "black";
        });

        container.appendChild(gridItem);
    }
});

