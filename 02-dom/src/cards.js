import functions from './functions.js';

console.log('In the cards.js file');

document.getElementById("addCard").onclick = addCard;
document.getElementById("addBefore").onclick = addBefore;
document.getElementById("addAfter").onclick = addAfter;
document.getElementById("remove").onclick = remove;

function addCard() {
    console.log("In addCard")
}

function addBefore() {
    console.log("In addBefore")
}

function addAfter() {
    console.log("In addAfter")
}

function remove() {
    console.log("In delete")
}