const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const mypageRoutes = require('./mypage-routes.js');

router.use('/', homeRoutes);
router.use('/mypage', mypageRoutes);
router.use('/api', apiRoutes);


module.exports = router;
