const express = require('express');
const router = express.Router();
const controller = require('../controller/users.controller');

router.get("/test", controller.test);
router.post('/createUser', controller.createUser)
router.get('/allUsers', controller.allUsers)
router.get('/:id', controller.userById)
router.delete('/delete/:id', controller.deleteUser)
router.put('/update/:id', controller.update) 
module.exports = router;