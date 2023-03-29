import { Router } from 'express';
const router = Router();
import { getAllUsers } from '../controllers/user.controller';

router.get("/users", getAllUsers);
export default router;