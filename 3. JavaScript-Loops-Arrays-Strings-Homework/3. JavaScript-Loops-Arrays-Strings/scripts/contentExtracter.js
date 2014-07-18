//run in HTML document
function extractContent(input) {
    var myContainer = document.createElement('div');
    myContainer.innerHTML = input;
    document.body.appendChild(myContainer);
    var elements = myContainer.childNodes;
    var allInner = [];
    for (var el in elements) {
        if (elements[el].innerText) {
            allInner.push(elements[el].innerText);
        }
    }
    console.log(allInner.join(""));
}
extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>");
//extractContent("<p>Hello<a href='http://w3c.org'>W3C<b>Again<p>&Again</p></b></a></p>"); //example for nasted tags