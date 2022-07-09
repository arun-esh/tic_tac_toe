`use strict`
// Player vs Player

// track the user turn
let trackingNumber = 1;

// Testing

function test (value){
    console.log(value)
}

// get the cell ID

function getCellId(id) {
    document.getElementById(id).value = userTurn(trackingNumber);
    document.getElementById(id).disabled = true;
    trackingNumber++;

    
}

// Alternate the user Turn

function userTurn (num) {
    if(num % 2 == 0) {
        return 'X'
    }else return 'O'
}

// reset the cells

document.getElementsByClassName(reset)

function gameBoardReset() {
    let boardLength = document.querySelectorAll(".game-cell").length;

    for(let i=0; i < boardLength; i ++)
    {
        document.querySelectorAll(".game-cell")[i].value = "";
        document.querySelectorAll(".game-cell")[i].disabled = false;
    }
    test(boardLength)
}