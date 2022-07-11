import app from './app.js';
import mongoose from 'mongoose';

const port = process.env.port || 8080;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/list', { useNewUrlParser: true })
        .then(() => {
            console.log('The connection to the Database is correctly done');
            app.listen(port, () => {
              console.log(`Server listening on port ${port}`)
            })
        })
        .catch(error => console.log(error));