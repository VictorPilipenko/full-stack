const express = require('express');
const router = express.Router();
const hashtagController = require('../controllers/hashtag');
const { requireAuth } = require('../middleware/requireAuth');

router.post('/', requireAuth, hashtagController.hashtag_post);
router.get('/', requireAuth, hashtagController.hashtag_getAll);
router.get('/:id', requireAuth, hashtagController.hashtag_getById);
router.delete('/:id', requireAuth, hashtagController.hashtag_deleteById);
router.patch('/:id', requireAuth, hashtagController.hashtag_patchById);

module.exports = router;
