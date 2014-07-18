function findMaxSequence(input) {
    var maxSequence = 1;
    var tempSequance = 1;
    var maxElement = input[0];
    var repeatElement = input[0];
    for (var i = 1; i < input.length; i += 1) {
        if (input[i] === repeatElement) {
            tempSequance += 1;
            if (tempSequance >= maxSequence) {
                maxSequence = tempSequance;
                repeatElement = input[i];
                maxElement = input[i];
            }
        } else {
            tempSequance = 1;
            repeatElement = input[i];
        }
    }
    var maxSequanceArray = [];
    for (var i = 0; i < maxSequence; i += 1) {
        maxSequanceArray.push(maxElement);
    }
   return maxSequanceArray;
}
console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));
