const router = require('express').Router();

const userRoutes = require('./user-routes');
const betRoutes = require('./bet-routes');
const gameRoutes = require('./game-routes');
const refreshRoutes = require('./refresh-routes');

router.use('/bets', betRoutes);
router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/refresh', refreshRoutes);

module.exports = router;
