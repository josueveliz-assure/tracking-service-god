import { Router } from 'express';
import { addTraineesModuleController, createModuleController, addFeedbackToTraineeController } from '../controllers/module.controller';
import { validateModuleData } from '../middlewares/validateData';

const router = Router();

router.post('/', validateModuleData, createModuleController);
router.put('/:id', addTraineesModuleController);
router.put('/:moduleId/trainees/:traineeId', addFeedbackToTraineeController);

export default router;