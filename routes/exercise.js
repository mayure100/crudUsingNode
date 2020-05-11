const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(exercise => res.json(exercise))
    .catch(err=> console.log(err))
    

}) 

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description   
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exercise({username , description , duration , date})

    newExercise.save()
    .then(()=>res.json('Exercise added'))
    .catch(err=> console.log(err))
})

module.exports = router