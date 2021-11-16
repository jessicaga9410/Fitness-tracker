const router =require('express').Router();
const views =require ('./views');
const apiRoutes =require ('./api');

router.use('/', views);
router.use('/', apiRoutes);

module.exports=router;

