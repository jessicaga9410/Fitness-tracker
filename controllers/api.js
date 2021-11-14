const router=require ('express').Router();
const Workout =require('../models/workout.js');


router.post('/workouts', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/api/workout.js'));
});

router.put('/workouts/:id', ({body, params} , res) =>{
    res.sendFile(path.join(__dirname, '../public/api/workouts/:id'));
    
});


module.exports=router;