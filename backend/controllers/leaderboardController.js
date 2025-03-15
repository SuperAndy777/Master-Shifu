const Driver = require('../models/Driver');

// Fetch leaderboard
exports.getLeaderboard = async (req, res) => {
    try {
        const drivers = await Driver.find().sort({ points: -1 }).limit(10);
        res.status(200).json(drivers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard', error });
    }
};
