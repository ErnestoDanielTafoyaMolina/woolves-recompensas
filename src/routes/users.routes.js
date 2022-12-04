import { Router } from "express";
import { addUser, getAllUsers, getUserById, LogginUser } from "../controllers/users.controllers";
const router = Router();

router.get('/users',getAllUsers);
router.get('/user/:id',getUserById);
router.post('/user',addUser);
router.get('/login',LogginUser);

export default router;