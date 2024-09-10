document.addEventListener("DOMContentLoaded", function(){
    const container = document.querySelector(".container");

    // Set the grid size
    const gridSize = 16;

    // Loop to create grid items and append them to the container
    for(let i = 0; i < gridSize * gridSize; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }

});