import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const itemSchema = Schema({
  item: String
});

export default mongoose.model('Item', itemSchema);