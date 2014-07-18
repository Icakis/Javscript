function findCardFrequency(input) {
    var cardsFaces = input.split(/[♣♦♥♠ ]+/).filter(Boolean);
    var cards = [];
    for (var i = 0; i < cardsFaces.length; i += 1) {
        if (cards.length === 0) {
            var tempHand = [];
            tempHand[0] = cardsFaces[i].toUpperCase();
            tempHand[1] = 1;
            cards.push(tempHand);
            continue;
        }
        var cardAdded = false;
        for (var j = 0; j < cards.length; j += 1) {
            if (cards[j][0].toUpperCase() === cardsFaces[i].toUpperCase()) {
                cards[j][1] += 1;
                cardAdded = true;
            }
        }
        if (!cardAdded) {
            var tempHand = [];
            tempHand[0] = cardsFaces[i].toUpperCase();
            tempHand[1] = 1;
            cards.push(tempHand);
        }
    }
    for (var i = 0; i < cards.length; i += 1) {
        console.log('%s -> %s%', cards[i][0], (cards[i][1] / cardsFaces.length * 100).toFixed(2));
    }
}
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log();
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log();
findCardFrequency('10♣ 10♥');

