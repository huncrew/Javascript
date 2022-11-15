// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you

/*
Program that deals with basic array position matching, to check for 3 in a row.
We will first check for an entire row containing the same value, with array.every.
Then, we check for a matching column by checking for a value in the central positon.
Then, we check for diagnonal by checking for a central position in the middle array,
and in the top corners.
*/
const evaluatePlay = (data) => {
    let leftCorner = false;
    let rightCorner = false;
    let middleBox = false;
    let winnerValue = '';
    let allEqual = arr => arr.every( v => v === arr[0] )
    data.forEach((row, index) => {
        //checking for a row containing same values
        if (allEqual(row) && row[index] != '') {
            if (row[0] == 'X') {
                console.log('X is the winner!, O is the loser.');
            }
            else {
                console.log('O is the winner!, X is the loser.'); 
            }
 
        }
        //checking for matching columns
        if (index == 2) {
            if (row[1] == 'X' || row[1] == 'O') {
                if (row[1] == 'X') {
                    console.log('X is the winner!, O is the loser.');
                }
                else {
                    console.log('O is the winner!, X is the loser.'); 
                }
            }
        }
        //checking for diagnonal match
        if (row[0] == 'X' || row[1] == 'O') {
            leftCorner = true;
        }
        if (row[2] == 'X' || row[2] == 'O') {
            rightCorner = true;
        }
        if (index == 1) {
            if (row[1] == 'X' || row[1] == 'O') {
                middleBox = true;
                winnerValue = row[1];
            }
        }
    }) // diagnonal boolean check
    if (leftCorner && middleBox || rightCorner && middleBox == true) {
        if (winnerValue == 'X') {
            console.log('X is the winner!, O is the loser.');
        }
        else {
            console.log('O is the winner!, X is the loser.'); 
        }
    }
}
evaluatePlay(diagonalWin)
