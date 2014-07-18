function sortArray(input) {
    for (var i = 0; i < input.length - 1; i += 1) {
        var minElement = i;
        for (var j = i + 1; j < input.length; j++) {
            if (input[j] < input[minElement]) {
                minElement = j;
            }
        }
        var tempElement = input[i];
        input[i] = input[minElement];
        input[minElement] = tempElement;
    }
    return input.join(", ");
}
console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));