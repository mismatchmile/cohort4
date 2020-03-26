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

function ifElseTest() {
    let testNumber = 1;
    if (testNumber === 1) {
        return (1);
    } else if (testNumber === 1) {
        return (2);
    }
}

function paramTest(x = 1, y = 2) {
    return (x + y);
}

function returnTest() {
    let x = 1;
    return (x);
}

function arrayPopTest() {
    let array2 = ["One", "Two", "Three"];
    array2.pop();
    return (array2[1]);
}

function arrayPushTest() {
    let array3 = ["One", "Two", "Three"];
    array3.push("Four");
    return (array3[3]);
}

function arrayUpdateTest() {
    let array4 = ["One", "Two", "Three"];
    array4[1] = 1;
    return (array4[0]);
}

export {
    numTest,
    stringTest,
    boolTest,
    arrayTest,
    objTest,
    undefTest,
    ifElseTest,
    paramTest,
    returnTest,
    arrayPopTest,
    arrayPushTest,
    arrayUpdateTest
};