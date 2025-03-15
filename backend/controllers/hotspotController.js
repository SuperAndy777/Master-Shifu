const Hotspot = require('../models/Hotspot');
const redisClient = require('../utils/redisClient');

// Fetch real-time hotspots
exports.getHotspots = async (req, res) => {
    try {
        const hotspots = await redisClient.get('hotspots');
        res.status(200).json(JSON.parse(hotspots));
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hotspots', error });
    }
};
