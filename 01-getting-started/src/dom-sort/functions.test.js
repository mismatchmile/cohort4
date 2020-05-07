import funcs from './functions.js';

const arrTest = [
    { key: 'lar', fname: "Larry", lname: "Shumlich", comp: "Lean Minds" },
    { key: 'lor', fname: "Lorraine", lname: "Shumlich", comp: "Lean Minds" },
    { key: 'jes', fname: "Jessica", lname: "Shumlich", comp: "CCI" },
    { key: 'erin', fname: "Erin", lname: "Shumlich", comp: "AHS" },
];

test('Test lookup', () => {
    console.log('hello world');
    const div = funcs.createCard(arrTest[1])
    expect(funcs.lookup(arrTest, 'lor', 'fname')).toBe("Lorraine");
    expect(funcs.lookup(arrTest, 'lor', 'comp')).toBe("Lean Minds");
    expect(funcs.lookup(arrTest, 'jes', 'fname')).toBe("Jessica");
    expect(funcs.lookup(arrTest, 'jxxes', 'fnaxxme')).toBe("");
});

test('test plumbing', () => {
    console.log('hello world');
    expect(funcs.lookup(arrTest, 'lor', 'fname')).toBe("Lorraine");
    expect(funcs.lookup(arrTest, 'lor', 'comp')).toBe("Lean Minds");
    expect(funcs.lookup(arrTest, 'jes', 'fname')).toBe("Jessica");
    expect(funcs.lookup(arrTest, 'jxxes', 'fnaxxme')).toBe("");
});

//     const key='jes';
//     for(let i in arrTest) {
//         // console.log(arrTest[i]);
//         if(arrTest[i].key === key) {
//             console.log(arrTest[i].fname);
//             break;
//         }
//     }
// });

// const wife = { key: 2, fname: "Lorraine", lname: "Shumlich", comp: "Lean Minds" },

// test('Test plumbing', () => {
//     console.log('Hello world');
//     const myWife = wife;
//     wife.lname = 'Shumy';
//     console.log(wife);
// });
