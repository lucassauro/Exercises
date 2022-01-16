const express = require('express');
const router = express.Router();
const { getPost, getPosts  } = require('./3_middlewares');


router.get('/', getPosts);

router.get('/:id', getPost);

module.exports = router;