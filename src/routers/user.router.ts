import express from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.put('/:email', userController.updateUser);
router.delete('/:email', userController.deleteUser);

export default router;
