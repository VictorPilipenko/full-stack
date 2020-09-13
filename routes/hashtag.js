const express = require('express');
const router = express.Router();
const hashtagController = require('../controllers/hashtag');

router.post('/', hashtagController.hashtag_post);
router.get('/', hashtagController.hashtag_get);

module.exports = router;