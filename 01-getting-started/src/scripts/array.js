const numbersArray = ['1', '2', '3', '4'];

arrayAdd.addEventListener("click", arrayAddListener)

function funcArrayAdd() {
    numbersArray.push(numberItem)
}

// function arrayAdd() {
//     let arrayItem = document.getElementById(arrayInput)
//     numbersArray.push("arrayItem")
// }

function arrayAddListener() {
    let numberItem = document.getElementById('arrayInput')
    console.log('add button')
    funcArrayAdd(numberItem)
}

export {
    funcArrayAdd
};