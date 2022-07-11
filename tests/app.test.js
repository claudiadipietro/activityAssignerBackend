import app from "../app.js";
import request from 'supertest';

describe('List endpoint', () => {
  test('Should return a 200 OK', async (done) => {
    await request(app).get('/api/getList')
    .expect(200)
    done();
  }, 10000);
}); 