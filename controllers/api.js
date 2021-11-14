const router=require ('express').Router();
const Workout =require('../models/workout.js');


router.post('/api/workouts', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/api/workout.js'));
});

router.put('/api/workouts/:id', ({body, params} , res) =>{
    res.sendFile(path.join(__dirname, '../public/api/workouts/:id'));
    
});


module.exports=router;