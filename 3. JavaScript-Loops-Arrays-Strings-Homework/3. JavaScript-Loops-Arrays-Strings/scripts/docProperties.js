function displayProperties(value) {
    var sortedDocProp = [];
    for (var property in value) {
        //console.log('document[' + property + '] = ' + value[property]);
        sortedDocProp.push(property);
    }
    sortedDocProp.sort();
    for (var item in sortedDocProp) {
        console.log(sortedDocProp[item]);
    }
}
displayProperties(document);

