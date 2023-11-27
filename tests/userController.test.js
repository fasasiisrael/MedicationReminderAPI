const request = require('supertest');
const app = require('../app'); 
const { connectDB, closeDB } = require('../config/database');

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe('GET /api/users', () => {
  it('should return all users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});

describe('GET /api/users/:id', () => {
    it('should return a specific user by ID', async () => {
      const response = await request(app).get('/api/users/valid-user-id');
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });
  
    it('should return 404 if user ID is not found', async () => {
      const response = await request(app).get('/api/users/invalid-user-id');
      expect(response.status).toBe(404);
    });
  });
  
  describe('PUT /api/users/:id', () => {
    it('should update a specific user by ID', async () => {
      const response = await request(app)
        .put('/api/users/valid-user-id')
        .send({ email: 'updated-email@example.com' });
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.email).toBe('updated-email@example.com');
    });
  
    it('should return 404 if user ID is not found', async () => {
      const response = await request(app)
        .put('/api/users/invalid-user-id')
        .send({ email: 'updated-email@example.com' });
      expect(response.status).toBe(404);
    });
  });
  
  describe('DELETE /api/users/:id', () => {
    it('should delete a specific user by ID', async () => {
      const response = await request(app).delete('/api/users/valid-user-id');
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });
  
    it('should return 404 if user ID is not found', async () => {
      const response = await request(app).delete('/api/users/invalid-user-id');
      expect(response.status).toBe(404);
    });
  });
  
