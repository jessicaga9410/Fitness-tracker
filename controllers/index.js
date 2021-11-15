const router =require('express').Router();
const views =require ('./views');
const apiRoutes =require ('./api');

router.use('/views', views);
router.use('./api', apiRoutes);

module.exports=router;

