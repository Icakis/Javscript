function findMaxSequence(input) {
    var maxSequence = [];
    var tempSequance = [];

    for (var i = 0; i < input.length - 1; i += 1) {
        if (input[i] < input[i + 1]) {
            if (tempSequance.length == 0) {
                tempSequance.push(input[i]);
                tempSequance.push(input[i + 1]);
            } else {
                tempSequance.push(input[i + 1]);
            }
            if (maxSequence.length < tempSequance.length || maxSequence.length == 0) {
                maxSequence = tempSequance;
            }
        } else {
            tempSequance = [];
        }
    }
    return maxSequence.length == 0 ? "no" : maxSequence;
}
console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));
