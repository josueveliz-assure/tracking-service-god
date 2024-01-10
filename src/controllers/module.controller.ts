import { Request, Response } from 'express';

import {
  createModuleRepository,
  addTraineesModuleRepository,
  addFeedbackToTraineeRepository,
  findModuleByIdRepository,
  setGradeToTraineeRepository,
  getAllModulesRepository,
} from '../repositories/module.repository';
import { Module } from '../types/types';
import { simpleErrorHandler } from '../handlers/error.handler';

export const createModuleController = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newModule = await createModuleRepository(body as Module);

    return res.status(201).json(newModule);
  } catch (error) {
    const errorResponse = simpleErrorHandler(error);
    res.status(errorResponse.statusCode).json(errorResponse.json);
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
    const errorResponse = simpleErrorHandler(error);
    res.status(errorResponse.statusCode).json(errorResponse.json);
  }
};

export const addFeedbackToTraineeController = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { moduleId, traineeId } = req.params;

    const moduleUpdated = await addFeedbackToTraineeRepository(moduleId, traineeId, body);

    return res.status(201).json(moduleUpdated);
  } catch (error) {
    const errorResponse = simpleErrorHandler(error);
    res.status(errorResponse.statusCode).json(errorResponse.json);
  }
};

export const setGradeToTraineeController = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { moduleId, traineeId } = req.params;

    const moduleUpdated = await setGradeToTraineeRepository(moduleId, traineeId, body.grade);

    return res.status(201).json(moduleUpdated);
  } catch (error) {
    const errorResponse = simpleErrorHandler(error);
    res.status(errorResponse.statusCode).json(errorResponse.json);
  }
};

export const getAllModulesController = async (req: Request, res: Response) => {
  try {
    const modules = await getAllModulesRepository();

    return res.status(200).json(modules);
  } catch (error) {
    const errorResponse = simpleErrorHandler(error);
    res.status(errorResponse.statusCode).json(errorResponse.json);
  }
};