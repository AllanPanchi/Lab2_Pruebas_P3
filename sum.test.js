const { default: it } = require('node:test');
const add = require('./sum').default;

describe('Suma', () => {
    it('Suma 1 + 2 = 3', () => {
        expect.equal(add(1, 2), 3);
    });
});