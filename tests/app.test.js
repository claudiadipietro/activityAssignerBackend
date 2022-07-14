import app from "../app.js";
import request from 'supertest';
import mongoose from 'mongoose';


describe('List endpoint', () => {

  it('Should return a 200 OK', async () => {
    const response = await (await request(app).get('/api/getList')).setEncoding();
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('json');
  });
/*   test('Should return an Array', async () => {
    await request(app).get('/api/getList')
    .expect(200)
    .expect(response => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });  */
}); 
