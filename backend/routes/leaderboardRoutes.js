const express = require('express');
const leaderboardController = require('../controllers/leaderboardController');

const router = express.Router();

router.get('/leaderboard', leaderboardController.getLeaderboard);

module.exports = router;
