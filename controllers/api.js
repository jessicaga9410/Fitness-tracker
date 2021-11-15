const router=require ('express').Router();
const Workout =require('../models/workout.js');


router.post('/workouts', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/api/workout.js'));
});

router.put('/api/workouts/:id', ({body, params} , res) =>{
    res.sendFile(path.join(__dirname, '../public/api/workouts/:id'));
    
});
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
          totalWeight: {
            $sum: "$exercises.weight",
          },
        },
      },
    ])
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
        console.log(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  
module.exports=router;