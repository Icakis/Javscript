function compareChars(twoArrays) {
    var firstArray = twoArrays[0];
    var secondArray = twoArrays[1];
    var equals = true;
    if (firstArray.length === secondArray.length) {
        for (var i = 0; i < firstArray.length; i += 1) {
            if (firstArray[i] !== secondArray[i]) {
                equals = false;
                break;
            }
        }
    } else {
        equals = false;
    }
    if (equals) {
        console.log("Equal");
    } else {
        console.log("Not Equal");
    }
}
compareChars([['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']]);
compareChars([['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']]);
compareChars([['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']]);