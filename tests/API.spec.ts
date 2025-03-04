const { test, expect, request } = require('@playwright/test');

const BASE_URL = 'https://test-api.k6.io';
const REGISTER_ENDPOINT = '/user/register/';
const LOGIN_ENDPOINT = '/auth/token/login/';
const DELETE_ENDPOINT = '/user/delete/';

let apiContext;
let authToken;

// Setup request context before tests
test.beforeAll(async ({ playwright }) => {
    apiContext = await request.newContext();

    // Register and login to get auth token
    await apiContext.post(BASE_URL + REGISTER_ENDPOINT, {
        data: {
            username: 'testuser123',
            password: 'Test@1234'
        }
    });

    const loginResponse = await apiContext.post(BASE_URL + LOGIN_ENDPOINT, {
        data: {
            username: 'testuser123',
            password: 'Test@1234'
        }
    });
    const loginData = await loginResponse.json();
    authToken = loginData.access;
});

test.describe('User Registration API Tests', () => {

    test('POST - Register user successfully', async () => {
        const response = await apiContext.post(BASE_URL + REGISTER_ENDPOINT, {
            data: {
                username: 'newtestuser',
                password: 'NewPass@1234'
            }
        });
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id');
    });

    test('POST - Register with missing fields (Negative)', async () => {
        const response = await apiContext.post(BASE_URL + REGISTER_ENDPOINT, {
            data: {
                username: ''
            }
        });
        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('error');
    });

    test('GET - Fetch user details (Authorized)', async () => {
        const response = await apiContext.get(BASE_URL + REGISTER_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
        expect(response.status()).toBe(200);
    });

    test('GET - Fetch user details (Unauthorized)', async () => {
        const response = await apiContext.get(BASE_URL + REGISTER_ENDPOINT);
        expect(response.status()).toBe(401);
    });

    test('DELETE - Remove user (Authorized)', async () => {
        const response = await apiContext.delete(BASE_URL + DELETE_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
        expect(response.status()).toBe(204);
    });

    test('DELETE - Remove user (Unauthorized)', async () => {
        const response = await apiContext.delete(BASE_URL + DELETE_ENDPOINT);
        expect(response.status()).toBe(401);
    });

    test('PUT - Update user details (Method Not Allowed)', async () => {
        const response = await apiContext.put(BASE_URL + REGISTER_ENDPOINT, {
            data: {
                username: 'updatedUser'
            }
        });
        expect(response.status()).toBe(405);
    });
});
