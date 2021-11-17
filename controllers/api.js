// const router=require ('express').Router();
// const Workout =require('../models/workout.js');


// router.post('/api/workouts', (req, res)=>{
//    console.log(req.body);
// Workout.create({}).then(response=>{
//   res.json(response)
// })

// });

// router.put('/api/workouts/:id', ({body, params} , res) =>{
//     res.sendFile(path.join(__dirname, '../public/api/workouts/:id'));
    
// });
// router.get("/api/workouts/range", (req, res) => {
//     Workout.aggregate([
//       {
//         $addFields: {
//           totalDuration: {
//             $sum: "$exercises.duration",
//           },
//           totalWeight: {
//             $sum: "$exercises.weight",
//           },
//         },
//       },
//     ])
//     .then((dbWorkouts) => {
//         res.json(dbWorkouts);
//         console.log(dbWorkouts);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   });
//   // router.get("/api/workouts/range", (req, res) => {
//   //   Workout.find({})
//   //     .sort({ date: -1 })
//   //     .then(dbWorkouts => {
//   //       res.json(dbWorkouts);
//   //     })
//   //     .catch(err => {
//   //       res.status(400).json(err);
//   //     });
//   // });
  
//   // router.put('/workouts/:id', (req, res) =>{
//   //   res.send(`put workout at id ${req.params.id}`)
//   // })
  





  

// module.exports=router;



const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/:id", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.get("/api/workouts/range", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts/range", (req, res) => {
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

module.exports = router;
