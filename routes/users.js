const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err=> console.log(err))

}) 

router.route('/add').post((req,res)=>{
    const username = req.body.username;

    const newUser = new User({username})

    newUser.save()
    .then(()=>res.json('User added'))
    .catch(err=> console.log(err))
})

router.route('/id').delete((req,res)=>{
    

    User.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted"))
    .catch(err=> res.status(400).json("Error" + err))

}) 


module.exports = router