import { Router } from 'express';
import { createModuleController } from '../controllers/module.controller';
import { validateModuleData } from '../middlewares/validateData';

const router = Router();

router.post('/', validateModuleData, createModuleController);

export default router;
