function reverseString(input) {
    var reverseString = [input.length];
    for (var i = 0; i < input.length; i+=1) {
        reverseString[i] = input.substr(input.length - 1 - i, 1);
    }
    return reverseString.join("").toString();
}
console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));
