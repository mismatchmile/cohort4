import funcs from './functions.js';

console.log("Hello world");

document.addEventListener('click',myEventListener);

let lastkey = '';

function myEventListener(e) {
    const el = (e.target);
    const k = el.getAttribute('key');
    const td = el.getAttribute('todo');
    if(k) {
    console.log(k);
    lastkey=k;
    }
    if(td) {
        console.log("Well do something: ", td);
        console.log("The last key was: ", lastKey);
    }
}