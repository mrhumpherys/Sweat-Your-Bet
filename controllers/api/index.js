const router = require('express').Router();

const betRoutes = require('./bet-routes');
const gameRoutes = require('./game-routes');
const teamRoutes = require('./team-routes');
const userRoutes = require('./user-routes');

router.use('/bets', betRoutes);
router.use('/games', gameRoutes);
router.use('/teams', teamRoutes);
router.use('/users', userRoutes);

module.exports = router;
