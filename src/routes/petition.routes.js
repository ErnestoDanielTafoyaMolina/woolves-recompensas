import { Router } from 'express';
import { getAllPetitions } from '../controllers/petition.controller';
const router = Router();

router.get("/petition", getAllPetitions);
export default router;