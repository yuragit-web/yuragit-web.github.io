let btn = document.querySelector('button');
btn.onclick = function() {
    let table = document.body.children[6];
    let headers = [document.body.children[0], document.body.children[2], document.body.children[4]];
    let topics = [document.body.children[1], document.body.children[3], document.body.children[5]];
    let image = document.body.children[7];

    table.children[0].children[2].children[0].innerHTML = document.body.removeChild(headers[0]).outerHTML;
    table.children[0].children[2].children[1].innerHTML = document.body.removeChild(headers[1]).outerHTML;
    table.children[0].children[2].children[2].innerHTML = document.body.removeChild(headers[2]).outerHTML;

    table.children[0].children[1].children[0].innerHTML = document.body.removeChild(topics[0]).outerHTML;
    table.children[0].children[1].children[1].innerHTML = document.body.removeChild(topics[1]).outerHTML;
    table.children[0].children[1].children[2].innerHTML = document.body.removeChild(topics[2]).outerHTML;

    document.body.prepend(document.body.removeChild(image));

    this.disabled = true;
}