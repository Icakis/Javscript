function printNumbers(num) {
    var numbers = [];
    var countNums = 0;
    for (var i = 2; i <= num; i += 1) {
        if (i % 4 && i % 5) {
            numbers[countNums] = i;
            countNums += 1;
        }
    }
    if (numbers.length==0) {
        console.log("no");
    } else {
        console.log(numbers.join(', '));
    }
}
printNumbers(20);
printNumbers(1);
printNumbers(13);