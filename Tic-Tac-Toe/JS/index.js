let board = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
  ];

function wiz(clickedId){
    cId = clickedId;
    let a = clickCount();
    if(a%2 === 0){
        writeX(cId);
    } else{
        writeO(cId);
    }
    if(a>=5){
        if(checkWinner()==1){
            alert("X wins");
        }
        if(checkWinner()==0){
            alert("O wins");
        }
    }
}

var inc=0;
function clickCount() {
   inc=inc+1;
   return inc;    
}

function equals(a, b, c){
    if(a==b && b==c){
        return 1;
    }
}
function checkWinner(){
    if(equals(board[1][1],board[0][0],board[2][2])){
        return board[1][1];
    }
    else if(equals(board[2][0],board[1][1],board[0][2])){
        return board[1][1];
    }
    else if(equals(board[0][1],board[0][2],board[0][0])){
        return board[0][1];
    }
    else if(equals(board[1][1],board[1][2],board[1][0])){
        return board[1][0];
    }
    else if(equals(board[2][1],board[2][2],board[2][0])){
        return board[2][1];
    }
    else if(equals(board[1][0],board[2][0],board[0][0])){
        return board[1][0];
    }
    else if(equals(board[1][1],board[2][1],board[0][1])){
        return board[1][1];
    }
    else if(equals(board[1][2],board[2][2],board[0][2])){
        return board[2][2];
    }
}


function writeO(cId){
    switch (cId) {
        case 'b1':
            document.getElementById('bl1').innerHTML = "O";
            board[0][0] = 0;
            break;
        case 'b2':
            document.getElementById('bl2').innerHTML = "O";
            board[0][1] = 0;
            break;
        case 'b3':
            document.getElementById('bl3').innerHTML = "O";
            board[0][2] = 0;
            break;
        case 'b4':
            document.getElementById('bl4').innerHTML = "O";
            board[1][0] = 0;
            break;
        case 'b5':
            document.getElementById('bl5').innerHTML = "O";
            board[1][1] = 0;
            break;
        case 'b6':
            document.getElementById('bl6').innerHTML = "O";
            board[1][2] = 0;
            break;
        case 'b7':
            document.getElementById('bl7').innerHTML = "O";
            board[2][0] = 0;
            break;
        case 'b8':
            document.getElementById('bl8').innerHTML = "O";
            board[2][1] = 0;
            break;
        case 'b9':
            document.getElementById('bl9').innerHTML = "O";
            board[2][2] = 0;
            break;
        default:
            break;
    }
}
function writeX(cId){
    switch (cId) {
        case 'b1':
            document.getElementById('bl1').innerHTML = "X";
            board[0][0] = 1;
            break;
        case 'b2':
            document.getElementById('bl2').innerHTML = "X";
            board[0][1] = 1;
            break;
        case 'b3':
            document.getElementById('bl3').innerHTML = "X";
            board[0][2] = 1;
            break;
        case 'b4':
            document.getElementById('bl4').innerHTML = "X";
            board[1][0] = 1;
            break;
        case 'b5':
            document.getElementById('bl5').innerHTML = "X";
            board[1][1] = 1;
            break;
        case 'b6':
            document.getElementById('bl6').innerHTML = "X";
            board[1][2] = 1;
            break;
        case 'b7':
            document.getElementById('bl7').innerHTML = "X";
            board[2][0] = 1;
            break;
        case 'b8':
            document.getElementById('bl8').innerHTML = "X";
            board[2][1] = 1;
            break;
        case 'b9':
            document.getElementById('bl9').innerHTML = "X";
            board[2][2] = 1;
            break;
        default:
            break;
    }
}