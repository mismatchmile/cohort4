import { numTest, stringTest, boolTest, arrayTest, objTest, undefTest } from './syntax.js'

test('number', () => {
    expect(numTest()).toBe(3);
});

test('numberFail', () => {
    expect(numTest()).toBe(1);
});

test('string', () => {
    expect(stringTest()).toBe("bovine disease");
});

test('stringFail', () => {
    expect(stringTest()).toBe("your mom");
});

test('boolean', () => {
    expect(boolTest()).toBe(true);
});

test('booleanFail', () => {
    expect(boolTest()).toBe(FALSE);
});

test('array', () => {
    expect(arrayTest()).toBe("Item1 Item2");
});

test('arrayFail', () => {
    expect(arrayTest()).toBe("Foo");
});

test('object', () => {
    expect(objTest()).toBe("Fiat500");
});

test('objectFail', () => {
    expect(objTest()).toBe("Blarg");
});

test('undefined', () => {
    expect(undefTest()).toBe(undefined);
});

test('undefinedTest', () => {
    expect(undefTest()).toBe("Bloog");
});