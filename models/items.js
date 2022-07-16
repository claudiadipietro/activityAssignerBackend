import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const itemSchema = Schema({
  item: String,
  taskStatus: Boolean

});

export default mongoose.model('Item', itemSchema);