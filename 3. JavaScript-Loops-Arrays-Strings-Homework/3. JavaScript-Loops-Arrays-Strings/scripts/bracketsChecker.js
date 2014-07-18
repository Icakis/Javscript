function checkBrackets(input) {
    var countLeftBracket = 0;
    var countRightBracket = 0;
    var correct = true;
    for (var i = 0; i < input.length; i += 1) {
        if (input[i] === '(') {
            countLeftBracket += 1;
        }
        if (input[i] === ')') {
            countRightBracket += 1;
        }
        if (countRightBracket > countLeftBracket) {
            correct = false;
            break;
        }
    }
    if (countLeftBracket === countRightBracket && correct) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');