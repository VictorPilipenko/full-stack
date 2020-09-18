const { Router } = require('express');
const auth = require('../controllers/auth');
const router = Router();

router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/logout', auth.logout);
router.get('/logout', auth.logout);
router.get('/check', auth.check);

module.exports = router;
