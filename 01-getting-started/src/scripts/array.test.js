import funcs from './array.js';

const arrayTest = [
    {key: '0', number: '1'},
    {key: '1', number: '2'},
    {key: '2', number: '3'},
    {key: '3', number: '4'},
    {key: '4', number: '5'},
];

test('lookupTest', () => {
    console.log('Hello World');
    expect(funcs.lookup(arrayTest,'0','number')).toBe('2');
    expect(funcs.lookup(arrayTest,'0','number')).toBe('1');
});