window.addEventListener("DOMContentLoaded", loadHandler);

// DOM REFERENCES
const seeds = document.getElementsByClassName("seedholder");
const seedHolder = document.getElementById("seedgridholder");
const gridform = document.getElementById("gridform");
const canvas = document.getElementById("diagramcanvas");
const context = canvas.getContext("2d");

//the seed the user currently has selected
let selectedSeed = null;

//defined in loadHandler
let canvasGrid;


// EVENT LISTENERS AND CALLBACKS

// If we click on a seed, it should become selected
for (let i = 0; i < seeds.length; i++){
    console.log("seed");
    seeds[i].addEventListener("click", onSeedClicked);
}

document.addEventListener("click", (event) => {
    for (let i = 0; i < seeds.length; i++){
        if (selectedSeed != null && !document.getElementById(selectedSeed).contains(event.target)){
            document.getElementById(selectedSeed).querySelector(".overlay").style.display = "none";
            selectedSeed = null;
            break;
        }
    }
});

gridform.addEventListener("submit", (event) => {
    //don't do the form submit shit to the url
    event.preventDefault();
    console.log("drawing grid");
    grid.setRows(document.getElementById("rowCount").value);
    grid.setCols(document.getElementById("columnCount").value);
    grid.draw();
});

function onSeedClicked(clickEvent){
    // If there was a previous selected seed, deselect it and unhighlight it
    if (selectedSeed != null){
        document.getElementById(selectedSeed).querySelector(".overlay").style.display = "none";
        selectedSeed = null;
    }

    selectedSeed = clickEvent.target.parentElement.id;
    clickEvent.target.parentElement.querySelector(".overlay").style.display = "block";
    console.log(clickEvent.target.parentElement.id);
}



// MISC FUNCTIONS

//gets the image src given the ID of the parent element (selectedSeed)
function getImgSrc(seed){
    let seedimg = seed.querySelector("img");
    if (!seedimg) return null;
    return seedimg.src;
}


// CANVAS LOGIC

//grid class
class grid {
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
    }

    cellSize = 100;

    setRows(rows){
        this.rows = rows;
        this.draw();
    }

    setCols(cols){
        this.cols = cols;
        this.draw();
    }

    draw(){
        console.log("Drawing column with rows " + this.rows + " and cols " + this.cols);

        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i <= this.cols; i++) {
            context.beginPath();
            context.moveTo(i * this.cellSize, 0);
            context.lineTo(i * this.cellSize, this.rows * this.cellSize);
            context.stroke();
        }
        for (let i = 0; i <= this.rows; i++) {
            context.beginPath();
            context.moveTo(0, i * this.cellSize);
            context.lineTo(this.cols * this.cellSize, i * this.cellSize);
            context.stroke();
        }
    }

    // Given x and y coords of a mouse click, return an object containing the x and y positions of the box or null if the 
    // mouse click wasn't within the grid (mouse pos should be relative to the canvas, not the window)
    getCell(xPos, yPos){
        //check if the click was in the grid
        if (xPos > 0 && xPos < this.cellSize * this.cols && yPos > 0 && yPos < this.cellSize * this.rows){
            console.log("clicked inside the grid!");
            let x = Math.floor(xPos / this.cellSize) + 1;
            let y = Math.floor(yPos / this.cellSize) + 1;
            console.log("ClickPos: x=" + x + " y=" + y);
        }
        else {
            console.log("clicked outside the grid");
            return null;
        }
    }

    //draws an image in row cellY, in column cellX
    drawImg(cellX, cellY, img){

    }
}

canvas.addEventListener("click", (event) => {
    console.log("Clicked canvas!");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (grid.getCell(x, y) != null){
        console.log("Skib!");
    }
});

function loadHandler() {
    grid = new grid(3, 3);
    grid.draw();
}