import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/item.js';
import bodyParser from 'body-parser';

const app = express();
app.use(express());
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', itemRoutes);

export default app;