const router = require('express').Router();

// collect endpoints
const userRoutes = require('./user-routes.js');

// prefixed names
router.use('/users', userRoutes);

module.exports = router;