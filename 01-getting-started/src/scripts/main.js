import functions from './functions.js';

// **********
//
// Add the event listeners
// 

const fruit = ['apples', 'pears', 'bananas', 'kiwi', 'watermelon']

for (let i = 0; i < fruit.length; i++) {
    let listItem = document.createElement("li")
    listItem.innerHTML = fruit[i]
    console.log(listItem)
    fruitDiv.appendChild(listItem)
}

arrayAdd.addEventListener("click", funcArrayAddListener)

function funcArrayAdd(value) {
    let listItem = document.createElement("li")
    listItem.innerHTML = value
    fruitDiv.appendChild(listItem)
}

function funcArrayAddListener() {
    console.log('add button')
    funcArrayAdd(arrayInput.value)
}

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));