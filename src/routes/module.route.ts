import { Router } from 'express';
import { addTraineesModuleController, createModuleController } from '../controllers/module.controller';

const router = Router();

router.post('/', createModuleController);
router.put('/:id', addTraineesModuleController);

export default router;