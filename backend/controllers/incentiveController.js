const Driver = require('../models/Driver');

// Calculate incentives
exports.calculateIncentive = async (req, res) => {
    try {
        const { driverId, hotspotId } = req.body;
        const driver = await Driver.findById(driverId);
        const incentive = driver.points * 0.1; // Example incentive calculation
        res.status(200).json({ message: `Earn ${incentive} credits for this ride.` });
    } catch (error) {
        res.status(500).json({ message: 'Error calculating incentive', error });
    }
};
