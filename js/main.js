var nodelist = document.querySelectorAll("td");
var table = document.getElementById("tabl");
var result = document.getElementById("winner");
var turn = document.getElementById("turns");
var header = document.getElementById("header");
var footer = document.getElementById("footer");

function checkwinnercross(){
    var k = 0;
    var j = 0;
    while((k<9)&&(j<3)){
        if ((nodelist[k].className == "cross")&&(nodelist[k+1].className == "cross")&&(nodelist[k+2].className == "cross")){
            var node = document.createTextNode("Cross Wins!!");
            result.appendChild(node);
            result.style.color = "red";
            var button = document.createElement("button");
            var nodebtn = document.createTextNode("Reset All");
            button.appendChild(nodebtn);
            button.onclick = function() {reset()};
            var br = document.createElement("br");
            result.appendChild(br);
            result.appendChild(button);
            nodelist[k].style.backgroundColor = "white";
            nodelist[k+1].style.backgroundColor = "white";
            nodelist[k+2].style.backgroundColor = "white";
            header.style.backgroundColor = "red";
            footer.style.color = "red";
            turn.style.opacity = 0;
            over();
            break;
        }
        if ((nodelist[j].className == "cross")&&(nodelist[j+3].className == "cross")&&(nodelist[j+6].className == "cross")){
            var node = document.createTextNode("Cross Wins!!");
            result.appendChild(node);
            result.style.color = "red";
            var button = document.createElement("button");
            var nodebtn = document.createTextNode("Reset All");
            button.appendChild(nodebtn);
            button.onclick = function() {reset()};
            var br = document.createElement("br");
            result.appendChild(br);
            result.appendChild(button);
            nodelist[j].style.backgroundColor = "white";
            nodelist[j+3].style.backgroundColor = "white";
            nodelist[j+6].style.backgroundColor = "white";
            header.style.backgroundColor = "red";
            footer.style.color = "red";
            turn.style.opacity = 0;
            over();
            break;
        }
        j += 1
        k += 3
    }
    if ((nodelist[0].className == "cross")&&(nodelist[4].className == "cross")&&(nodelist[8].className == "cross")){
        var node = document.createTextNode("Cross Wins!!");
        result.appendChild(node);
        result.style.color = "red";
        var button = document.createElement("button");
        var nodebtn = document.createTextNode("Reset All");
        button.appendChild(nodebtn);
        button.onclick = function() {reset()};
        var br = document.createElement("br");
        result.appendChild(br);
        result.appendChild(button);
        nodelist[0].style.backgroundColor = "white";
        nodelist[4].style.backgroundColor = "white";
        nodelist[8].style.backgroundColor = "white";
        header.style.backgroundColor = "red";
        footer.style.color = "red";
        turn.style.opacity = 0;
        over();
    }
    if ((nodelist[2].className == "cross")&&(nodelist[4].className == "cross")&&(nodelist[6].className == "cross")){
        var node = document.createTextNode("Cross Wins!!");
        result.appendChild(node);
        result.style.color = "red";
        var button = document.createElement("button");
        var nodebtn = document.createTextNode("Reset All");
        button.appendChild(nodebtn);
        button.onclick = function() {reset()};
        var br = document.createElement("br");
        result.appendChild(br);
        result.appendChild(button);
        nodelist[2].style.backgroundColor = "white";
        nodelist[4].style.backgroundColor = "white";
        nodelist[6].style.backgroundColor = "white";
        header.style.backgroundColor = "red";
        footer.style.color = "red";
        turn.style.opacity = 0;
        over();
    }
}

function checkwinnercircle(){
    var k = 0;
    var j = 0;
    while((k<9)&&(j<3)){
        if ((nodelist[k].className == "circle")&&(nodelist[k+1].className == "circle")&&(nodelist[k+2].className == "circle")){
            var node = document.createTextNode("Circle Wins!!");
            result.appendChild(node);
            result.style.color = "blue";
            var button = document.createElement("button");
            var nodebtn = document.createTextNode("Reset All");
            button.appendChild(nodebtn);
            button.onclick = function() {reset()};
            var br = document.createElement("br");
            result.appendChild(br);
            result.appendChild(button);
            nodelist[k].style.backgroundColor = "white";
            nodelist[k+1].style.backgroundColor = "white";
            nodelist[k+2].style.backgroundColor = "white";
            header.style.backgroundColor = "blue";
            footer.style.color = "blue";
            turn.style.opacity = 0;
            over();
            break;
        }
        if ((nodelist[j].className == "circle")&&(nodelist[j+3].className == "circle")&&(nodelist[j+6].className == "circle")){
            var node = document.createTextNode("Circle Wins!!");
            result.appendChild(node);
            result.style.color = "blue";
            var button = document.createElement("button");
            var nodebtn = document.createTextNode("Reset All");
            button.appendChild(nodebtn);
            button.onclick = function() {reset()};
            var br = document.createElement("br");
            result.appendChild(br);
            result.appendChild(button);
            nodelist[j].style.backgroundColor = "white";
            nodelist[j+3].style.backgroundColor = "white";
            nodelist[j+6].style.backgroundColor = "white";
            header.style.backgroundColor = "blue";
            footer.style.color = "blue";
            turn.style.opacity = 0;
            over();
            break;
        }
        j += 1
        k += 3
    }
    if ((nodelist[0].className == "circle")&&(nodelist[4].className == "circle")&&(nodelist[8].className == "circle")){
        var node = document.createTextNode("Circle Wins!!");
        result.appendChild(node);
        result.style.color = "blue";
        var button = document.createElement("button");
        var nodebtn = document.createTextNode("Reset All");
        button.appendChild(nodebtn);
        button.onclick = function() {reset()};
        var br = document.createElement("br");
        result.appendChild(br);
        result.appendChild(button);
        nodelist[0].style.backgroundColor = "white";
        nodelist[4].style.backgroundColor = "white";
        nodelist[8].style.backgroundColor = "white";
        header.style.backgroundColor = "blue";
        footer.style.color = "blue";
        turn.style.opacity = 0;
        over();
    }
    if ((nodelist[2].className == "circle")&&(nodelist[4].className == "circle")&&(nodelist[6].className == "circle")){
        var node = document.createTextNode("Circle Wins!!");
        result.appendChild(node);
        result.style.color = "blue";
        var button = document.createElement("button");
        var nodebtn = document.createTextNode("Reset All");
        button.appendChild(nodebtn);
        button.onclick = function() {reset()};
        var br = document.createElement("br");
        result.appendChild(br);
        result.appendChild(button);
        nodelist[2].style.backgroundColor = "white";
        nodelist[4].style.backgroundColor = "white";
        nodelist[6].style.backgroundColor = "white";
        header.style.backgroundColor = "blue";
        footer.style.color = "blue";
        turn.style.opacity = 0;
        over();
    }
}

function checkall(){
    var k;
    var j = 0;
    for (k=0;k<9;k++){
        if (nodelist[k].className!="unmarked"){
            j += 1;
        }
    }
    if (j == 9){
        var node = document.createTextNode("Tie!!");
        result.appendChild(node);
        result.style.color = "white";
        var button = document.createElement("button");
        var nodebtn = document.createTextNode("Reset All");
        button.appendChild(nodebtn);
        button.onclick = function() {reset()};
        var br = document.createElement("br");
        result.appendChild(br);
        result.appendChild(button);
        header.style.backgroundColor = "white";
        footer.style.color = "white";
        turn.style.opacity = 0;
        over();
    }
}

function over(){
    var k = 0;
    for (k=0;k<9;k++){
        nodelist[k].onclick = function() {
            return false;
        };
    }
}

function cross(elmnt){
    elmnt.className 
    var img = document.createElement("img");
    elmnt.appendChild(img);
    img.src = "img/cross.png";
}

function circle(elmnt){
    var img = document.createElement("img");
    elmnt.appendChild(img);
    img.src = "img/circle.png";
}

i = 0;

function getselected(elmnt){
    if (elmnt.hasChildNodes()==false){
        if (i%2==0){
            turn.childNodes[0].nodeValue = "Circle's Turn";
            turn.style.color = "blue";
            header.style.backgroundColor = "blue";
            footer.style.color = "blue";
            cross(elmnt);
            elmnt.className = "cross";
            i += 1;
        }
        else{
            turn.childNodes[0].nodeValue = "Cross's Turn";
            turn.style.color = "red";
            header.style.backgroundColor = "red";
            footer.style.color = "red";
            circle(elmnt);
            elmnt.className = "circle";
            i += 1;
        }
        checkwinnercross();
        checkwinnercircle();
    }
    if (result.hasChildNodes() == false){
        checkall();
    }
}

function reset(){
    var k = 0;
    for (k=0;k<9;k++){
        nodelist[k].onclick = function() {getselected(this)};
        if (nodelist[k].className != "unmarked"){
            nodelist[k].childNodes[0].remove();
            nodelist[k].className = "unmarked";
            nodelist[k].style.removeProperty("background-color");
        }
    }
    result.childNodes[0].remove();
    result.childNodes[0].remove();
    result.childNodes[0].remove();
    turn.style.opacity = 1;
    header.style.backgroundColor = "rgb(185, 74, 0)";
    footer.style.color = "white";
}