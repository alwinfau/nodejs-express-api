import express from 'express';
import {
    getConsumers,
    getConsumerById,
    addConsumer,
    updateConsumer,
    deleteConsumer
} from '../controllers/ConsumerController.js';

const router = express.Router();

router.get('/api/consumers', getConsumers);
router.get('/api/consumers/:id', getConsumerById);
router.post('/api/consumers', addConsumer);
router.put('/api/consumers/:id', updateConsumer);
router.delete('/api/consumers/:id', deleteConsumer);

export default router;