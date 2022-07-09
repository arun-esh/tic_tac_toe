`use strict`
// Player vs Player

// track the user turn
let trackingNumber = 1;

document.getElementsByName(".")
// Testing

function test (value){
    console.log(value)
}

// get the cell ID

function getCellId(id) {
    document.getElementById(id).value = userTurn(trackingNumber);
    document.getElementById(id).disabled = true;
    

    if(checkwin()){
        disableCells()
        alert(`${userTurn(trackingNumber)} wins!`)
    }

    else if(trackingNumber == 9){
        alert("XO DRAW")
    }
    trackingNumber++;
}

// Alternate the user Turn

function userTurn (num) {
    if(num % 2 == 0) {
        return 'O'
    }else return 'X'
}

// check Winner

let board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let winningCells = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

let checkwin = function () {
    for(let i=0; i < winningCells.length; i ++){
        let newValue = winningCells[i];
        let cell01 = document.getElementById(newValue[0]).value;
        let cell02 = document.getElementById(newValue[1]).value;
        let cell03 = document.getElementById(newValue[2]).value;

        if(cell01 == cell02 && cell02 == cell03 && cell01 != ""){
            return true;
        }
    }
    return false;
}


// reset the cells

document.getElementsByClassName(reset)

function gameBoardReset() {
    let boardLength = document.querySelectorAll(".game-cell").length;
    for(let i=0; i < boardLength; i ++)
    {
        document.querySelectorAll(".game-cell")[i].value = "";
        document.querySelectorAll(".game-cell")[i].disabled = false;
        trackingNumber =1;
    }
}


// Disable all the cells (Useful when someone won the game)

let disableCells = function (){
    for(let i =0; i < 9; i++) {
        document.querySelectorAll(".game-cell")[i].disabled = true;
    }
}

// ON refesh reset the cells
gameBoardReset();