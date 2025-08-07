const { default: test } = require('node:test');
const add = require('./sum').default;

test('Suma 1 + 2 = 3', () => {
    expect.equal(add(1, 2), 3);
});