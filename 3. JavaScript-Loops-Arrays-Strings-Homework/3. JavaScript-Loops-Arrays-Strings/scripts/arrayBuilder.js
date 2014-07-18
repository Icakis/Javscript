function createArray(arrayLenght) {
    var multypliedBy5 = new Array(arrayLenght);
    for (var element = 0; element < multypliedBy5.length;element+=1) {
        multypliedBy5[element] =element * 5;
    }
    console.log(multypliedBy5);
}
createArray(20);