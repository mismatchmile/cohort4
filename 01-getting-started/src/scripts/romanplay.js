const song = [
    {
        'line':'a partridge in a pear tree',
        'dayNumber': function() {return 1}
    },
    {
        'line':'two turtle doves',
        'dayNumber': function() {return 2}
    },
    {
        'line':'three french hens',
        'dayNumber':function() {return 3}
    },
    {'line':'four calling birds', 'dayNumber':4},
    {'line':'five golden rings', 'dayNumber':5},
    {'line':'six geese a-laying', 'dayNumber':6},
    {
        'line':'seven swans a-swimming', 
        'dayNumber': function() { alert('howdy'); return 'Hola amigo'}
    },
    {'line':'eight maids a-milking', 'dayNumber':8},
    {'line':'nine ladies dancing', 'dayNumber':9},
    {'line':'ten lords a-leaping', 'dayNumber':10},
    {'line':'eleven pipers piping', 'dayNumber':11},
    {
        'line':'twelve drummers drumming',
        'dayNumber': function () { return 12 }
    }
]

for (const line of song) console.log(line)

// let songDayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12]

let f = function  (line, song) {
    let result = "Sorry no such thing"
    let myElement = song.find ( (element) => element.line === line)
    console.log('My line and my element are', line, myElement)
    if (myElement) {
    result = myElement
    }   
    return result
}

let g = function (song) {
    return song.filter ((element) => element.line.includes('a') ).map (
        (element) => element.line
    ).length
}

let strangeThing = function (letter, song) {
    function result () {
        console.log('What a strange thing')
    }
    return result
}

let x = strangeThing()
console.log('x is a ', x)
x()

let myFunctions= [a,h]
console.log('Here are the lines we are interested in')
for (myFunction of myFunctions) {
    console.log (myFunction, myFunction(song))
}

// let h = function (song) {
//     return song.filter ((element) => element.line.length % 2 === 0 ).map (
//         (element) => element.line
//     )
// }

// let findLetter = function (letter, song) {
//     return song.filter ((element) => element.line.includes(letter) ).map (
//         (element) => element.line
//     ).length
// }

// let myLine = f('Seven swans a-swimming', song)
// let myFunction = myLine.dayNumber
// let myResult = myFunction()
// console.log (myFunction)

console.log ('These are lines with letter a')
console.log (a (song))

console.log ('These are ', g(song).reduce ( (acc) => acc+1, 0), 'such lines')
console.log (g (song))

console.log ('These are lines with even number of characters')
console.log (h(song))


// let f=function (line) {
//     let result = "Sorry no such thing"
//     let myIndex = song.findIndex ( (element) => element === line)
//     if (myIndex !== -1) {
//         result = songDayNumbers[myIndex]
//     }
//     return result
// }

// console.log( f ("a partridge in a pear tree", song))
// console.log( f ("five golden rings", song))
// console.log( f ("twelve drummers drumming", song))


