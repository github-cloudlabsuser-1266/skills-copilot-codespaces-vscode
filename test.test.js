const Calculator = require('./test');

test('adds 1 + 2 to equal 3', () => {
    const calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
});

test('adds -1 + -1 to equal -2', () => {
    const calc = new Calculator();
    expect(calc.add(-1, -1)).toBe(-2);
});

test('adds 0 + 0 to equal 0', () => {
    const calc = new Calculator();
    expect(calc.add(0, 0)).toBe(0);
});

test('adds 1.5 + 2.5 to equal 4', () => {
    const calc = new Calculator();
    expect(calc.add(1.5, 2.5)).toBe(4);
});