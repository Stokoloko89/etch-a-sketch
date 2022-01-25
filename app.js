const container = document.querySelector('.grid-container'); 
// Add a button to the top of the screen which will clear the current grid a
const clearBtn = document.querySelector('#clear'); 
let  gridNumber = 0;

function multiply(){
    for (let i = 1; i < gridNumber; i++) {
        const newDiv = document.createElement(`div`);
        container.appendChild(newDiv);
    }
}     

multiply();

const eachDiv = document.querySelectorAll('div'); 

// eachDiv.forEach((div) => {
//     div.addEventListener('mouseover', function (e){
//         e.stopPropagation;
//         e.target.style.backgroundColor = 'rgb(255, 255, 255)';
//     })
// })


