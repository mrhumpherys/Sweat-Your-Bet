const router = require('express').Router();

const userRoutes = require('./user-routes');
const betRoutes = require('./bet-routes');
const gameRoutes = require('./game-routes');

router.use('/bets', betRoutes);
router.use('/users', userRoutes);
router.use('/games', gameRoutes);

module.exports = router;
