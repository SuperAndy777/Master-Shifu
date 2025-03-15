const express = require('express');
const hotspotRoutes = require('./routes/hotspotRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const incentiveRoutes = require('./routes/incentiveRoutes');

const app = express();

app.use(express.json());
app.use('/api', hotspotRoutes);
app.use('/api', leaderboardRoutes);
app.use('/api', incentiveRoutes);

module.exports = app;
