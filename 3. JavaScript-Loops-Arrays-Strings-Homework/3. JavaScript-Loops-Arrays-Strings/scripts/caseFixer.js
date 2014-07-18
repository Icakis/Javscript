function fixCasing(input) {
    //var upcase = input.split(/<mixcase>(?:[^])*?<\/mixcase>/); //not matching!!
    var mixcase = input.split(/((<mixcase>).+?(<\/mixcase>))/).filter(function (s) { return !s.search(/(?=.*<mixcase>)(?=.*<\/mixcase>)/); });
    var mixWords = [];
    for (var mix in mixcase) {
        var tempMixWord = mixcase[mix].replace(/(<mixcase>)/, '').replace(/(<\/mixcase>)/, '')
        var tempMixWordLetters = [];
        for (var i = 0; i < tempMixWord.length; i++) {
            var randomCase = Math.round(Math.random());

            if (randomCase == 1) {
                tempMixWordLetters.push(tempMixWord[i].toUpperCase())
            } else {
                tempMixWordLetters.push(tempMixWord[i].toLowerCase())
            }
        }
        mixWords.push(tempMixWordLetters.join("").toString())
        //console.log(mixWords[mixWords.length - 1]);
    }
    var upcase = input.split(/((<upcase>).+?(<\/upcase>))/).filter(function (s) { return !s.search(/(?=.*<upcase>)(?=.*<\/upcase>)/); });
    var upWords = [];
    for (var up in upcase) {
        var tempWord = upcase[up].replace(/(<upcase>)/, '').replace(/(<\/upcase>)/, '')
        var tempUpWord = tempWord.toUpperCase();
        upWords.push(tempUpWord.toString())
        //console.log(upWords[upWords.length - 1]);
    }
    var lowcase = input.split(/((<lowcase>).+?(<\/lowcase>))/).filter(function (s) { return !s.search(/(?=.*<lowcase>)(?=.*<\/lowcase>)/); });
    var lowWords = [];
    for (var low in lowcase) {
        var tempWord = lowcase[low].replace(/(<lowcase>)/, '').replace(/(<\/lowcase>)/, '');
        var tempLowWord = tempWord.toLowerCase();
        lowWords.push(tempLowWord.toString());
        //console.log(lowWords[lowWords.length - 1]);
    }
    //raplace all changes
    var allText = [input];
    for (var i = 0; i < lowcase.length; i++) {
        var tempText = allText[0].replace(lowcase[i].toString(), lowWords[i]);
        allText[0] = tempText;
    }
    for (var i = 0; i < upcase.length; i++) {
        var tempText = allText[0].replace(upcase[i].toString(), upWords[i]);
        allText[0] = tempText;
    }
    for (var i = 0; i < mixcase.length; i++) {
        var tempText = allText[0].replace(mixcase[i].toString(), mixWords[i]);
        allText[0] = tempText;
    }
    console.log(allText.toString());
}
fixCasing("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.");