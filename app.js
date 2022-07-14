import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/item.js';
import bodyParser from 'body-parser';
import itemController from './controllers/itemController.js';

const app = express();
app.use(express());
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/api/createItem', itemController.save);
app.put('/api/updateItem/:id', itemController.update);
app.get('/api/getList', itemController.getList);
app.delete('/api/deleteItem/:id', itemController.delete);


export default app;