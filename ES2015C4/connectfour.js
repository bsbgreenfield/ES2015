const table = document.querySelector('table')
const slots = document.querySelectorAll('td')
const thead = document.querySelector('thead')
const headerSlots = document.querySelectorAll('thead tr th')
const gamePage = document.querySelector("#game")
const turn = document.querySelector("#turn")
// assign ids for all grid slots
function assignIds(slots){
    for(y = 1; y<=6; y++){
        for(x = 1; x <= 7; x++){
            slots[7*(y-1) + (x-1)].setAttribute('id',`${y}-${x}`) 
        }
    }
}

// draw a circle and place it in one of the slots
function _draw_piece(slot, isBlueTurn){
    let piece = document.createElement('div')
    piece.className = "piece"
    // add extra specification based on whether its blue or red's turn
    isBlueTurn ? piece.classList.add('blue'): piece.classList.add('red')
    slot.appendChild(piece)
}

// return first row that doesnt have the data-filled attribute in given column
function getRow(column){
    for(i = 6; i > 0; i--){
        let curCell = document.getElementById(`${i}-${column}`)
        if (!(curCell.getAttribute('data-filled'))){
            return i;
        }
    }
}

//generate a "slot" to select based on two factors:
// 1 -  the column that was selected
// 2 -  the first vertical slot that doesnt already have a piece

thead.addEventListener('click', function(e){
    console.log(e.target)
if (gameActive){
    if (e.target.parentElement.tagName === 'TH'){
        // change the turn
        isBlueTurn ? turn.innerText = 'Blues Turn' : turn.innerText = 'Reds turn'
        e.target.classList.toggle('blue'); e.target.classList.toggle('red')
        isBlueTurn = !isBlueTurn
        
        
        //get slot and set data-filled to true
        let col = Number(e.target.parentElement.id)
        let row = getRow(col)
        let slotId = `${row}-${col}`
        let curId = [...slotId]
        let thisSlot = document.getElementById(slotId)
        thisSlot.setAttribute('data-filled', true);
        _draw_piece(thisSlot, isBlueTurn);

        // update the red and blue matrices
        !isBlueTurn ? red[row-1][col-1] = 1 : blue[row-1][col-1] = 1;
        
        //check if anyone has gotten connect 4
        let result = !isBlueTurn ? _is_connect_four(red, curId) : _is_connect_four(blue, curId);
        if(result){
            turn.remove()
            table.remove();
            const dialogue = document.createElement('span')
            !isBlueTurn ? dialogue.innerText = "Red Wins!" : dialogue.innerText = "Blue Wins!"
            document.body.append(dialogue);
            gameActive = false;
        }
    }
}
})

// hover event to display which piece will be placed
for (let slot of headerSlots){
    slot.addEventListener('mouseenter', function(e){
        const dispPiece = document.createElement('div')
        dispPiece.className = 'display_piece'
        !isBlueTurn ? dispPiece.classList.add('blue') : dispPiece.classList.add('red')
        e.target.appendChild(dispPiece);
    })
}

for (let slot of headerSlots){
    slot.addEventListener('mouseleave', function(e){
        e.target.innerHTML = '';
    })
}

// run logic for finding four connected pieces
function _is_connect_four(arr, curId){
  let thisRow = Number(curId[0]);
  let thisCol = Number(curId[2]);


//check horizonal, then vertical, then diagonal
if (countRow(arr, thisRow, 0)) return true;
if(countCol(arr, thisCol, 0)) return true;
if(countDiag(arr, thisRow, thisCol, 1)) return true;
}

function countRow(arr, row, count){
    for(i= 0; i<=6;i++){
        if (arr[row-1][i] == 1){
            count ++;
        }
        else{
            count = 0;
        }
        if (count >= 4){
            return true;
        }
    }
}

function countCol(arr, col, count){
    for(i= 0; i<=5;i++){
        if (arr[i][col-1] == 1){
            count ++;
        }
        else{
            count = 0;
            continue;
        }
        if (count >= 4){
            return true;
        }
    }
}
function countDiag(arr, row, col, count){
    for(i=-3; i<=3; i++){
        //check to see if out of bounds
        if ((0 <= (row-1)+i) && (0 <=(col-1) +i)){
            if (((row-1)+i <= 5) && (((col-1)+i) <=6)){
            let curSlot = arr[(row-1) + i ][(col-1) +i]
            if(curSlot && curSlot == 1){
                count ++
                continue;
            }
            else{
                count = 0;
            }
            }
            
        }
    }
    if (count >= 4){
        return true;
    }
    count = 0;
    for(i=-3; i<=3; i++){
        // check to see if out of bounds
        if ((0 <= (row-1)+i) && (0 <= (col-1) -i)){
            if (((row-1)+i <= 5) && (((col-1)-i) <=6)){
                let curSlot = arr[(row-1) + i ][(col-1) - i]
                if(curSlot && curSlot == 1){
                    count ++
                    continue;
                }
                else{
                    count = 0;
                }
            }
        }
    }
    if (count >= 4){
        return true;
    }
}


// initialize the game
assignIds(slots);
let isBlueTurn = true;
turn.innerText = 'Reds turn';
let gameActive = true;
// build matrices for red and blue
const red = [];
const blue = []
for(y = 1; y<=6; y++){
    red[y-1] = [];
    blue[y-1] = [];
    for(x = 1; x <= 7; x++){
        red[y-1][x-1] = 0;
        blue[y-1][x-1] = 0;
    }
}
