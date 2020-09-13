const express = require('express');
const router = express.Router();
const hashtagController = require('../controllers/hashtag');

router.post('/', hashtagController.hashtag_post);
router.get('/', hashtagController.hashtag_getAll);
router.get('/:id', hashtagController.hashtag_getOne);
router.delete('/:id', hashtagController.hashtag_delete);


module.exports = router;