const request = require('supertest');
const app = require('../../src/app');

describe('Integration Test: API Endpoints', () => {
    test('GET /api/hello returns correct JSON', async () => {
        const response = await request(app).get('/api/hello');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello from Express Backend!' });
    });

    test('GET / returns index.html', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.type).toBe('text/html');
    });
});
