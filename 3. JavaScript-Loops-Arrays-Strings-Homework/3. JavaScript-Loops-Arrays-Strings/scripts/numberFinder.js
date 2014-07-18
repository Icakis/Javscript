function findMostFreqNum(input) {
    var maxSequence = 0;
    var maxElement;
    for (var i = 0; i < input.length; i += 1) {
        var repeatElement = input[i];
        var tempSequance = 0;
        for (var j = 0; j < input.length; j++) {
            if (input[j] === repeatElement) {
                tempSequance += 1;
                if (tempSequance > maxSequence) {
                    maxSequence = tempSequance;
                    maxElement = input[j];
                }
            }
        }
    }
    console.log('%s (%s times)', maxElement, maxSequence)
}
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
