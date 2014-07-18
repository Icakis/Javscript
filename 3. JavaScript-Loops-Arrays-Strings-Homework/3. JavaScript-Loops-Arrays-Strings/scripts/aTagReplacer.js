//run in HTML document
function replaceATag(input) {
    var myContainer = document.createElement('div');
    myContainer.innerHTML = input;
    document.body.appendChild(myContainer);
    var aTags = document.getElementsByTagName('a');
    for (var i = 0; i < aTags.length; i += 1) { //if you use for-in loop it skips last <a> tags, because aTags.length was changed
        if (aTags[i].tagName == 'A') {
            var aHref = aTags[i].href;
            var aInnerHTML = aTags[i].innerHTML;
            aTags[i].outerHTML = '[URL href=' + aHref + ']' + aInnerHTML + '[/URL]';
            i -= 1;
        }
    }
    console.log(myContainer.innerHTML);
}
replaceATag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>');
//replaceATag('<ul><li><b><a href=http://softuni.bg>SoftUni213</a></b><a href=http://ala-bala.com>CLICK</a></li></ul>');//test wiht two <a> tags

