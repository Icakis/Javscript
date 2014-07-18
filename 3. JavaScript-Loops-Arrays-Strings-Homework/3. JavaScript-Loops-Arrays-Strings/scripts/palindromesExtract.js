function findPalindromes(input) {
    var allWords = input.split(/[\s,!.-?();]+/);
    var allPalindromes = [];
    for (var i = 0; i < allWords.length; i += 1) {
        var isPalindrome = true;
        if (allWords[i].length === 0) {
            allWords.splice(i, 1);
            continue;
        }
        for (var j = 0; j < allWords[i].length / 2; j++) {
            if (allWords[i].substr(j, 1).toLowerCase() !== allWords[i].substr(allWords[i].length - 1 - j, 1).toLowerCase()) {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) {
            allPalindromes.push(allWords[i].toLowerCase());
        }
    }
    console.log(allPalindromes);
}
findPalindromes('There is a man, his name was Bob.');
