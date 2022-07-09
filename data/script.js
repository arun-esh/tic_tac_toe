`use strict`

/// get the game board

let userTurn = 1;

function gameBox(id){
    console.log(typeof id);
    document.getElementById(id).value = checkUserTurn(userTurn);
    document.getElementById(id).disabled = true;
    
    if(checkWin()){
        alert(`${checkUserTurn(userTurn)} wins!`);
        disableBoxes();
        userTurn = 0;
    }
    userTurn++;

}

let gameBoard = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// User turn alternates between 1 and 2
let checkUserTurn = function(userTurn){
    console.log(userTurn);
    if(userTurn % 2 === 0){
        return `O`
    } else {
        return `X`
    }
}




// win conditions
let winConditions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]


// check if the user has won
let checkWin = function(){
    for(let i = 0; i < winConditions.length; i++){
        let winCondition = winConditions[i];
        let box1 = document.getElementById(winCondition[0]).value;
        let box2 = document.getElementById(winCondition[1]).value;
        let box3 = document.getElementById(winCondition[2]).value;
        if(box1 === box2 && box2 === box3 && box1 !== ``){
            return true;
        }
    }
    return false;
}

// DISABLE ALL THE BOXES

let disableBoxes = function(){
    for(let i = 0; i < gameBoard.length; i++){
        for(let j = 0; j < gameBoard[i].length; j++){
            document.getElementById(gameBoard[i][j]).disabled = true;
        }
    }
}

// ----------------------------RESET SECTION----------------------------0

// Reset the game board
let resetGame = function(){
    for(let i = 0; i < gameBoard.length; i++){
        for(let j = 0; j < gameBoard[i].length; j++){
            document.getElementById(gameBoard[i][j]).value = ``;
            document.getElementById(gameBoard[i][j]).disabled = false;
        }
    }
    userTurn = 1;
}


document.getElementById(`reset`).addEventListener(`click`, resetGame);
// ----------------------------RESET SECTION----------------------------1