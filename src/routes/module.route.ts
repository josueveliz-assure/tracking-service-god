import { Router } from 'express';
import { addTraineesModuleController, createModuleController } from '../controllers/module.controller';
import { validateModuleData } from '../middlewares/validateData';

const router = Router();

router.post('/', validateModuleData, createModuleController);
router.put('/:id', addTraineesModuleController);

export default router;