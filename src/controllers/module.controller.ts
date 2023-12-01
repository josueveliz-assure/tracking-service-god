import { Request, Response } from 'express';
import {
  createModuleRepository,
  addTraineesModuleRepository,
  addFeedbackToTraineeRepository,
  findModuleByIdRepository
} from '../repositories/module.repository';
import { Module } from '../types/types';

export const createModuleController = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newModule = await createModuleRepository(body as Module);

    return res.status(201).json(newModule);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, trace: error.stack });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const addTraineesModuleController = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const moduleFromDb = await findModuleByIdRepository(req.params.id);
    
    const update: Partial<Module> = { trainees: [...moduleFromDb?.trainees || [], ...body] };
    const moduleUpdated = await addTraineesModuleRepository(req.params.id, update as Module);
    
    return res.status(201).json(moduleUpdated);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, trace: error.stack });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const addFeedbackToTraineeController = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { moduleId, traineeId } = req.params;

    const moduleUpdated = await addFeedbackToTraineeRepository(moduleId, traineeId, body);

    return res.status(201).json(moduleUpdated);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, trace: error.stack });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
};