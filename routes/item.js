'use strict'
import express from 'express';
import itemController from '../controllers/itemController.js';

const router = express.Router();

router.post('/createItem', itemController.save);
router.put('/updateItem/:id', itemController.update);
router.get('/getList', itemController.getList);
router.delete('/deleteItem/:id', itemController.delete);
router.put('/taskStatusChanged/:id', itemController.updateTaskStatus);

export default router;