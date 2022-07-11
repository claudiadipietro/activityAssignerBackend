'use strict'
import express from 'express';
import itemController from '../controllers/itemController.js';

const router = express.Router();

router.post('/createItem', itemController.save);
router.put('/updateItem/:id', itemController.update);
router.get('/getList', itemController.getList);
router.delete('/deleteItem/:id', itemController.delete);

export default router;