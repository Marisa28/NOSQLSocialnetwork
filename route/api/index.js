const router = require('express').Router();
const thoughtroutes = require('./thoughtsRoute');
const userRoutes = require('./userRoutes');

router.use('/thought', thoughtroutes);
//router.use('/user', userRoutes);

module.exports = router;
