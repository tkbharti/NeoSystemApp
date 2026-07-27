const router         = require('express').Router();
const {loggedIn}     = require('../helpers/auth.middleware');
const logMiddleware  = require("../helpers/log.middleware");

const userController = require('../controllers/user.controller');

router.post('/login', logMiddleware, userController.login);
 router.get('/checktoken', loggedIn, logMiddleware, userController.checkToken);

module.exports = router;