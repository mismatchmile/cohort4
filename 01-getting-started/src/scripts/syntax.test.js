import {
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
} from './syntax.js'

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
    expect(stringTest()).toBe("Bloog");
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

test('undefinedFail', () => {
    expect(undefTest()).toBe("Bloog");
});

test('ifElse', () => {
    expect(ifElseTest()).toBe(1);
});

test('ifElseFail', () => {
    expect(ifElseTest()).toBe(2);
});

test('parameter', () => {
    expect(paramTest()).toBe(3);
});

test('parameterFail', () => {
    expect(paramTest()).toBe(2);
});

test('return', () => {
    expect(returnTest()).toBe(1);
});

test('returnFail', () => {
    expect(returnTest()).toBe(2);
});

test('arrayPop', () => {
    expect(arrayPopTest()).toBe("Two");
});

test('arrayPopFail', () => {
    expect(arrayPopTest()).toBe(2);
});

test('arrayPush', () => {
    expect(arrayPushTest()).toBe("Four");
});

test('arrayPushFail', () => {
    expect(arrayPushTest()).toBe(4);
});

test('arrayUpdate', () => {
    expect(arrayUpdateTest()).toBe(1);
});

test('arrayUpdateFail', () => {
    expect(arrayUpdateTest()).toBe("One");
});