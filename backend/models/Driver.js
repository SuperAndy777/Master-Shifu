const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    points: { type: Number, default: 0 },
    tier: { type: String, enum: ['gold', 'silver', null], default: null },
});

module.exports = mongoose.model('Driver', DriverSchema);
