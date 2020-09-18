const express = require('express');
const router = express.Router();
const hashtagController = require('../controllers/hashtag');

router.post('/', hashtagController.hashtag_post);
router.get('/', hashtagController.hashtag_getAll);
router.get('/:id', hashtagController.hashtag_getById);
router.delete('/:id', hashtagController.hashtag_deleteById);
router.patch('/:id', hashtagController.hashtag_patchById);

module.exports = router;
