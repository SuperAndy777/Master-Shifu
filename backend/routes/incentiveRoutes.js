const express = require('express');
const incentiveController = require('../controllers/incentiveController');

const router = express.Router();

router.post('/incentives', incentiveController.calculateIncentive);

module.exports = router;
