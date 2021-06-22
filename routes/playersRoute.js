const express = require('express');
const router = express.Router();

const { players, team } = require('../controllers/routesController.js');


router.post('/team', team);
router.get('/players', players);

module.exports = router;