const Driver = require('../models/Driver');

// Update leaderboard tiers
exports.updateTiers = async () => {
    const drivers = await Driver.find().sort({ points: -1 });
    const totalDrivers = drivers.length;
    drivers.forEach((driver, index) => {
        if (index < totalDrivers * 0.1) driver.tier = 'gold';
        else if (index < totalDrivers * 0.3) driver.tier = 'silver';
        else driver.tier = null;
        driver.save();
    });
};
