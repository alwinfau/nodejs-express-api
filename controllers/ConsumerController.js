import Consumer from '../models/Consumer.js';

export const getConsumers = async (req, res) => {
    try {
        const consumers = await Consumer.findAll();
        res.status(200).json(consumers);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching consumers',
            error
        });
    }
};

export const getConsumerById = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const consumer = await Consumer.findByPk(id);
        if (!consumer) {
            return res.status(404).json({
                message: 'Consumer not found'
            });
        }
        res.status(200).json(consumer);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching consumer',
            error
        });
    }
};

export const addConsumer = async (req, res) => {
    const {
        name,
        email
    } = req.body;
    try {
        const consumer = await Consumer.create({
            name,
            email
        });
        res.status(201).json(consumer);
    } catch (error) {
        res.status(500).json({
            message: 'Error adding consumer',
            error
        });
    }
};

export const updateConsumer = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        name,
        email
    } = req.body;
    try {
        const consumer = await Consumer.findByPk(id);
        if (!consumer) {
            return res.status(404).json({
                message: 'Consumer not found'
            });
        }
        consumer.name = name || consumer.name;
        consumer.email = email || consumer.email;
        await consumer.save();
        res.status(200).json(consumer);
    } catch (error) {
        res.status(500).json({
            message: 'Error updating consumer',
            error
        });
    }
};

export const deleteConsumer = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const consumer = await Consumer.findByPk(id);
        if (!consumer) {
            return res.status(404).json({
                message: 'Consumer not found'
            });
        }
        await consumer.destroy();
        res.status(200).json({
            message: 'Consumer deleted'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting consumer',
            error
        });
    }
};