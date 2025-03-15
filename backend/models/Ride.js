const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
    pickup: { type: String, required: true },
    dropoff: { type: String, required: true },
    fare: { type: Number, required: true },
});

module.exports = mongoose.model('Ride', RideSchema);
