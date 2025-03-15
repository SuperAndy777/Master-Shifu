const Hotspot = require('../models/Hotspot');
const redisClient = require('../utils/redisClient');

// Update hotspots in Redis
exports.updateHotspots = async () => {
    const hotspots = await Hotspot.find();
    await redisClient.set('hotspots', JSON.stringify(hotspots));
};
