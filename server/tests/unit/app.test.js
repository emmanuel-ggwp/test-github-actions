const app = require('../../src/app');

describe('Unit Test: Logic Function', () => {
    test('sayHello function returns correct greeting', () => {
        const result = app.locals.sayHello('World');
        expect(result).toBe('Hello, World!');
    });
});
