const MATRIX = [
    ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
    ['|', ' ', ' ', ' ', '| ', ' ', ' ', ' ','|'],
    ['s', ' ', ' ', ' ', 'C', '-', '-', '-', '+'],
];

function findPath(MATRIX) {

    let direction = [0, 1];
    let path = [];
    let letters = [];
    let position = {row: 0, column: 0}

    for(let i = 0; i<MATRIX.length; i++ ){

        for(let j = 0; j < MATRIX[i].length; j++){

            if(MATRIX[i][j] === '>')
                position = {row: i, column: j};
                break;
        }
    }

    while(true){

        let currentChar = MATRIX[position.row][position.column];
        if(currentChar === '>'){
            currentChar = '@'
        }
        path.push(currentChar);


        if((/[A-Z]/).test(currentChar)){
            letters.push(currentChar)
        }

        if(currentChar === 's'){
            break;
        }

        if (currentChar === '+' || /[A-Z]/.test(currentChar)) {
            if (direction[0] !== 0) { // vertikalno
                if (position.column < MATRIX.length - 1 && MATRIX[position.row][position.column + 1] !== ' ') {
                    direction = [0, 1]; // desno
                } else if(position.column > 0 && MATRIX[position.row][position.column -  1] !== ' '){
                    direction = [0, -1]; // levo
                }
            } else if (direction[1] !== 0) { // horizontalno
                if (position.row > 0 && MATRIX[position.row - 1][position.column] !== ' ') {
                    direction = [-1, 0]; // gore
                } else if(position.row < MATRIX.length-1 && MATRIX[position.row + 1][position.column] !== ' ') {
                    direction = [1, 0]; // dolu
                }
            }
        } 


        position.row += direction[0];
        position.column += direction[1];
    }

    return {path, letters};



}
let output = findPath(MATRIX);
console.log('Path:', output.path.join(''));    
console.log('Letters:', output.letters.join(''));