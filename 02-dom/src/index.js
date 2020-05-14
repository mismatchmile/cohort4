import functions from './functions.js';

console.log('In the index.js file');

document.getElementById("show").onclick = showItem;
document.getElementById("add").onclick = addItem;

function showItem() {
    var x = document.getElementById("list").children;
    console.log(x);
}

function addItem() {
    var myList = document.getElementById("list");
    var listLength = myList.getElementsByTagName("LI").length+1;
    var y = document.createElement("LI");
    var z = document.createTextNode("Item " + listLength++);
    y.appendChild(z);
    document.getElementById('list').appendChild(y)
}
