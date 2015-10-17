var elements = document.getElementsByTagName('*');
console.log('hello world');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 1) {
            var text = node.nodeValue;
            var replacedText = text.replace(/'[nerd]'/gi, '[smarty]');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}