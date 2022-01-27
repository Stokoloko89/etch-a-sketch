const gridContainer = document.querySelector('.grid-container');
let newNumber = 0; 
let numberOfSquares = parseInt(newNumber, 10);
const startBtn = document.querySelector('#start-btn'); 
const restartBtn = document.querySelector('#clear-btn'); 
const randomColorBtn = document.querySelector('#random-color');
const blackBtn = document.querySelector('#black');

//create random numbers from 0 - 255

// create grid squares that will be rendered on the center block of the DOM
// important to square the return value from prompt() so each will fit each cell of the Grid
function createSquares(){
    for (let i = 0; i < numberOfSquares**2; i++) {
        let divs = document.createElement('div'); 
        gridContainer.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;
        divs.classList.add('grid-container-bg-black');
        gridContainer.appendChild(divs);
    }
} 

startBtn.addEventListener('click', function(){
    newNumber = prompt('Enter a number between 0 - 64');
    numberOfSquares = parseInt(newNumber, 10)
    createSquares(); 
}) 

function rgbNumbers() {
    return Math.floor(Math.random() * 256);
}

function makeBlackToWhite(){
// Black to White
const gridNodeList = gridContainer.childNodes; 
gridNodeList.forEach((node) =>{
    node.addEventListener('mouseenter', function(e) {
        e.target.classList.remove('grid-container-bg-black');
        e.target.setAttribute('style', '');
        e.target.classList.add('grid-container-bg-white');
    })
})
}

blackBtn.onclick = makeBlackToWhite; 

function makeBlackToColor(){
// // Black to Color
const gridNodeList = gridContainer.childNodes; 
gridNodeList.forEach((node) =>{
    node.addEventListener('mouseenter', function(e) {
        e.target.classList.remove('grid-container-bg-black');
        e.target.style.backgroundColor = `rgb(${rgbNumbers()},${rgbNumbers()},${rgbNumbers()})`;
    })
})
} 

randomColorBtn.onclick = makeBlackToColor; 

function newGame (){
    let newNumber = prompt('Please enter a number up to 64')
    numberOfSquares = parseInt(newNumber, 10);
    createSquares();
}

restartBtn.addEventListener('click', function(){
   gridContainer.innerHTML = '';
   newGame();
})


