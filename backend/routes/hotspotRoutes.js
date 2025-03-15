const express = require('express');
const hotspotController = require('../controllers/hotspotController');

const router = express.Router();

router.get('/hotspots', hotspotController.getHotspots);

module.exports = router;
