import { Request, Response } from 'express';
import { createModuleRepository } from '../repositories/module.repository';
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
