function findMostFreqWord(input) {
    var allWords = input.split(/[\s,.?!,\-\)\(:;\\/_@\'\"\+\={}\[\]\n]+/)
    var allWordsAndCount = {};

    for (var i = 0; i < allWords.length; i += 1) {
        if (allWordsAndCount.length === 0) {
            allWordsAndCount[allWords[i].toLowerCase()] = 1;
            continue;
        }
        var itemAdded = false;
        for (var item in allWordsAndCount) {
            if (item.toLowerCase() === allWords[i].toLowerCase() && item !== '') {
                allWordsAndCount[item] += 1;
                itemAdded = true;
            }
        }
        if (!itemAdded && allWords[i] !== '') {
            allWordsAndCount[allWords[i].toLowerCase()] = 1;
        }
    }
    var maxRepeat = 0;
    for (var j in allWordsAndCount) {
        if (maxRepeat < allWordsAndCount[j]) {
            maxRepeat = allWordsAndCount[j];
        }
    }
    var allMaxRepeatWords = [];
    for (var maxItem in allWordsAndCount) {
        if (allWordsAndCount[maxItem] == maxRepeat) {
            allMaxRepeatWords.push(maxItem);
        }
    }
    allMaxRepeatWords.sort();
    for (var word in allMaxRepeatWords) {
        console.log("%s -> %s times", allMaxRepeatWords[word], maxRepeat);
    }

}
findMostFreqWord('in the middle of the night');
console.log("");
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
console.log("");
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');