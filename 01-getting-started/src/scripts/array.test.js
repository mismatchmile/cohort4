import {
    arrayAdd
} from './array.js'

test('arrayAddTest', () => {
    expect(arrayAdd()).toBe(0);
});

test('arrayAddTestFail', () => {
    expect(arrayAdd()).toBe(1);
});