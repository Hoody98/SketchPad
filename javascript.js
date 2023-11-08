const containerDiv = document.querySelector("#container");

function makeGrid(rows, columns) {

    //checks for button removal if sketch active
while (document.querySelector("button") !== null) {
    document.querySelector("button").remove();
}

//creates grid
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    containerDiv.style.width = "960px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className = "grid-item";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
            console.log(square); //For code execution visibiity
        })
    }
    createButton();
}


function createButton() {
    const button = document.querySelector("#button");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid";
    resetButton.style.margin = "20px";
    button.appendChild(resetButton);
    
    
    
    
resetButton.addEventListener('click', () => {
    document.querySelectorAll(".grid-item").forEach(e => e.remove());
    let userGridInput = prompt("Grid size (Max: 100): ");
    if (userGridInput > 100) {
        alert("Error! You specified a grid size greater than the maximum of 100.");
        return;
    }
    rows = userGridInput;
    columns = userGridInput;
    makeGrid(rows, columns);
    })

}
makeGrid(16 , 16);