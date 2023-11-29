import { Router } from 'express';
import { createModuleController } from '../controllers/module.controller';

const router = Router();

router.post('/', createModuleController);

export default router;
