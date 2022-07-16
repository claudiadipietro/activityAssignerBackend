import app from "../app.js";
import request from 'supertest';
import mongoose from 'mongoose';
import Item from '../models/items.js';


describe('List endpoint', () => {
  afterAll( async() => {
    mongoose.connection.close();
  }),
  beforeAll(async() => {
    mongoose.connect('mongodb://localhost:27017/test')
  });
  it('Should return an Array', async () => {
      await request(app).get('/api/getList')
      .expect(200)
        .expect(response => {
        expect(response.body).toBeInstanceOf(Array);
      });
  });
  it('Should return an status Success when sending a task', async () => {
    await request(app).post('/api/createItem')
    .send({item: 'test'})
    .expect(200)
      .expect(response => {
      expect(response.body.status).toBe('success');
    });
  }); 
  it('Should return an status Success when updating a task', async () => {
    const itemRequest = await request(app).post('/api/createItem').send({item: 'New Item'}).then(response => response);
    const itemID = itemRequest._body.item._id.toString();
    await request(app).put('/api/updateItem/' + itemID).send({item: 'New Item Updated'})
    .expect(200)
      .expect(response => {
      expect(response.body.status).toEqual('success');
    });
  }); 
  it('Should return an status Success when deleting a task', async () => {
    const itemRequest = await request(app).post('/api/createItem').send({item: 'New Item'}).then(response => response);
    const itemID = itemRequest._body.item._id.toString();
    await request(app).delete('/api/deleteItem/' + itemID)
    .expect(200)
      .expect(response => {
      expect(response.body.status).toEqual('success');
    });
  });
  it('Should return true when the status of a task was updated', async () => {
    const itemRequest = await request(app).post('/api/createItem').send({item: 'New Item'}).then(response => response);
    const itemID = itemRequest._body.item._id.toString();
    await request(app).put('/api/taskStatusChanged/' + itemID)
    .expect(200)
      .expect(response => {
      expect(response.body.item.taskStatus).toEqual(true);
    });
  }); 
}); 
