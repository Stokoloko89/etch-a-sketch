let gridContainer = document.querySelector('.grid-container');
let newNumber = prompt('Please enter a number up to 64');
let numberOfSquares = parseInt(newNumber, 10);
let restartBtn = document.querySelector('#clear-btn'); 

// create grid squares that will be rendered on the center block of the DOM
// important to square the return value from prompt() so each will fit each cell of the Grid
function createSquares(){
    for (let i = 0; i < numberOfSquares**2; i++) {
        let divs = document.createElement('div');
        divs.style.backgroundColor = 'black'; 
        gridContainer.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;  
        gridContainer.appendChild(divs);
    }
} createSquares()

// hover of each cell, the background color must change & stay changed. 
let gridNodeList = gridContainer.childNodes; 
gridNodeList.forEach((node) =>{
    node.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = 'white'; 
    })
})

//button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid


restartBtn.addEventListener('click', function() {
    gridContainer.toggleAttribute('repeat(${numberOfSquares}, 1fr');
    newNumber = prompt('Please enter a number up to 64');

})
