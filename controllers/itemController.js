'use strict'
import Item from '../models/items.js';
import validator from 'validator';

const controller = {
  save: function(request, response){
    const item = new Item();
    const validate_item = !validator.isEmpty(request.body.item);
    
    if (validate_item) {
      item.item = request.body.item;
    }

    item.save((error, itemStored) => {
      if (error) {
        response.status(500).send({
          message: 'Error saving item'
        });
      }
      if (!itemStored) {
        response.status(404).send({
          message: 'Item not saved'
        });
      }
      return response.status(200).send({
        status: 'success',
        item: itemStored
      })
    }
  )},

  update: function(request, response){
    const itemID = request.params.id;
    const update = {
      item: request.body.item
    }
    Item.findOneAndUpdate({_id: itemID}, update, {new:true}, (error, itemUpdated) => {
      if (error){
        response.status(500).send({
          message: 'Error updating item'
        });
      }
      return response.status(200).send({
        status: 'success',
        item: itemUpdated
      })
    });
  },

  getList: function(request, response){
    return Item.find().then((data) =>
    response.json(data)).catch((error) =>
    response.status(500).json(error))
  },
  
  delete: function (request, response){
    const itemID = request.params.id;
    Item.findOneAndDelete({_id: itemID}, (itemRemoved) => {
      return response.status(200).send({
        status: 'success',
        item: itemRemoved
    });
  });
}

};
export default controller;
