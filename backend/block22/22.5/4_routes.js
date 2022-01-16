const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');
const { getTeams, postTeams } = require('./4_middlewares');


router.post('/', rescue(postTeams));

router.get('/', rescue(getTeams));

module.exports = router;