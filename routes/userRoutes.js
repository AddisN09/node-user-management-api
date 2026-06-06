const express = require('express');
const router = express.Router();
const { getUserController, getAllUsersController, createUserController, deleteUserController, deleteAllUsersController, updateUserController, updateUserPartController } = require('../controller/userController.js');
const { validateUserData } = require('../middleware/inputValidationMiddleware.js');

router.get('/', getAllUsersController);
router.get('/:id', getUserController);
router.post('/', validateUserData, createUserController);
router.put('/:id', validateUserData, updateUserController);
router.patch('/:id', updateUserPartController);
router.delete('/:id', deleteUserController);
router.delete('/', deleteAllUsersController);

module.exports = { router };

