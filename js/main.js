const input = document.getElementById('textMessage');

function submiteMessage() {
    var container = document.getElementById("coments");
    var textarea = document.getElementById("textMessage");


    var div2 = document.createElement("h4");
    var div3 = document.createElement("span");
    var div4 = document.createElement("div");
    div4.className = "coments-text";
    div3.className = "date";
    div2.className = "name";
    div2.innerHTML = "Лилия Семёновна";
    div3.innerHTML = "15 октября 2011";
    div4.innerHTML = textarea.value;


    var div = document.createElement("div");
    div.className = "block-coments";
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);

    container.appendChild(div);
    input.value = "";
}

input.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        if (e.ctrlKey) {
            submiteMessage()
        }
    }
})