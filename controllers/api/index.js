const router = require('express').Router();

const userRoutes = require('./user-routes');
const betRoutes = require('./bet-routes');
const gameRoutes = require('./game-routes');
const refreshRoutes = require('./refresh-routes');
const seedRoutes = require('./seed-routes');
const resetRoutes = require('./reset-routes');

router.use('/bets', betRoutes);
router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/refresh', refreshRoutes);
router.use('/seed', seedRoutes);
router.use('/reset', resetRoutes);

module.exports = router;
