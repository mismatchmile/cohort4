// define attributes / variables
//     number
//     string
//     boolean
//     array
//     dictionary / objects
//     undefined
// sample if / else
// functions
//     parameters
//     returns
// arrays
//     add to the front
//     add to the end
//     update values
// loops 
//     for
//     for/in
//     while
//     do while
//     forEach (with array and function)
// objects / dictionaries
//     declare object
//     lookup key to retrieve the value

function numTest() {
    return 1 + 2;
}

function stringTest() {
    return "bovine" + " disease";
}

function boolTest() {
    return Boolean(10 > 9);
}

function arrayTest() {
    let array = ["Item1", " Item2", " Item3"];
    return (array[0] + array[1]);
}

function objTest() {
    let object = { type: "Fiat", model: "500", color: "white" };
    return (object.type + object.model);
}

function undefTest() {
    let undefined;
    typeof undefined === "undefined"
    return (undefined);
}

export { numTest, stringTest, boolTest, arrayTest, objTest, undefTest };