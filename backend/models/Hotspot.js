const mongoose = require('mongoose');

const HotspotSchema = new mongoose.Schema({
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    demand: { type: String, enum: ['high', 'medium'], required: true },
});

module.exports = mongoose.model('Hotspot', HotspotSchema);
