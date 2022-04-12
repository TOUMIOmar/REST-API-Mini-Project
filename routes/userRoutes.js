const express =require('express');
const { addUser, getUser, deleteUser, updateUser } = require('../controllers/userControllers');
const router= express.Router();
const User = require('../models/User');

router.post('/', addUser);


router.get('/', getUser);

router.delete('/:id',deleteUser);


router.put('/:id',updateUser);






module.exports= router
