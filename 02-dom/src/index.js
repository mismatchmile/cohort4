import functions from './functions.js';

console.log('In the index.js file');

document.getElementById("show").onclick = showItem;
document.getElementById("add").onclick = addItem;

function showItem() {
    console.log('Inside show')
    var x = document.getElementById("list").children;
    console.log(x)
}

function addItem() {
    console.log('Inside add')
}
