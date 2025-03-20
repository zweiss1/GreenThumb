// DOM REFERENCES
const seeds = document.getElementsByClassName("seedholder");
const seedHolder = document.getElementById("seedgridholder");
const gridform = document.getElementById("gridform");

//the seed the user currently has selected
let selectedSeed = null;

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
    drawGrid(document.getElementById("rowCount").value, document.getElementById("columnCount").value);
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


function drawGrid(rows, cols){
    console.log("Drawing column with rows " + rows + " and cols " + cols);
}
