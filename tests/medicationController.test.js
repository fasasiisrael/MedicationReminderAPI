const request = require('supertest');
const app = require('../app'); 
const { connectDB, closeDB } = require('../config/database');

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe('GET /api/medications', () => {
  it('should return all medications', async () => {
    const response = await request(app).get('/api/medications');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});

describe('GET /api/medications/:id', () => {
    it('should return a specific medication by ID', async () => {
      const response = await request(app).get('/api/medications/valid-medication-id');
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });
  
    it('should return 404 if medication ID is not found', async () => {
      const response = await request(app).get('/api/medications/invalid-medication-id');
      expect(response.status).toBe(404);
    });
  });
  
  describe('PUT /api/medications/:id', () => {
    it('should update a specific medication by ID', async () => {
      const response = await request(app)
        .put('/api/medications/valid-medication-id')
        .send({ dosage: '20mg' });
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.dosage).toBe('20mg');
    });
  
    it('should return 404 if medication ID is not found', async () => {
      const response = await request(app)
        .put('/api/medications/invalid-medication-id')
        .send({ dosage: '20mg' });
      expect(response.status).toBe(404);
    });
  });
  
  describe('DELETE /api/medications/:id', () => {
    it('should delete a specific medication by ID', async () => {
      const response = await request(app).delete('/api/medications/valid-medication-id');
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });
  
    it('should return 404 if medication ID is not found', async () => {
      const response = await request(app).delete('/api/medications/invalid-medication-id');
      expect(response.status).toBe(404);
    });
  });
  
