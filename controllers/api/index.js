const router = require('express').Router();
// const betRoutes = require('./bet-routes');
const userRoutes = require('./user-routes');
const betRoutes = require('./bet-routes');

router.use('/bets', betRoutes);
router.use('/users', userRoutes);

module.exports = router;
