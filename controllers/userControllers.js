const User = require('../models/User');

// @desc add a users
// @patch POST  /api/user
// @access PUBLIC
const addUser = (req, res) => {
    User.create(req.body)
    .then((data) =>res.json(data))
    .catch((err) =>{
        console.log(err);
        res.status(500).json({msg: 'somthing went wrong.'});
    });
};

// @desc get all users
// @patch GET  /api/user
// @access PUBLIC

const getUser = (req, res) =>{
    User.find()
    .then((data) =>res.json(data))
    .catch((err) =>{
        console.log(err);
        res.status(500).json({msg: 'somthing went wrong.'});
    });
};

// @desc delete a users
// @patch DELETE  /api/user/:id
// @access PUBLIC
const deleteUser = (req, res) =>{
    User.findByIdAndDelete(req.params.id)
    .then((data) =>res.json(data))
    .catch((err) =>{
        console.log(err);
        res.status(500).json({msg: 'somthing went wrong.'});
    });
};

// @desc update a users
// @patch PUT  /api/user/:id
// @access PUBLIC
const updateUser = (req, res) =>{
    User.findByIdAndUpdate(req.params.id,res.body,{new:true})
    .then((data) =>res.json(data))
    .catch((err) =>{
        console.log(err);
        res.status(500).json({msg: 'somthing went wrong.'});
    });
};

module.exports={addUser,updateUser,deleteUser,getUser};