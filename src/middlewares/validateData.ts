import { Request, Response, NextFunction } from 'express';
import { moduleSchema,  } from '../types/schemas';
import z from 'zod';

export const validateData = async<T> (schema: z.ZodSchema<T>, req: Request, res: Response): Promise<T | Response> => {
  try {
    const validatedData = await schema.parseAsync(req.body);
    return validatedData;
  } catch (error) {
    if (error instanceof z.ZodError){
      return res.status(400).json({ message: error.message });
    }
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message, trace: error.stack });
    }
    return res.status(500).json({ message: 'Server unknown issue' });
  }
};

export const validateModuleData = async (req: Request, res: Response, next: NextFunction) => {
  await validateData(moduleSchema, req, res);
  if (!res.writableEnded) {
    next();
  }
};

export const validateTraineeData = async (req: Request, res: Response, next: NextFunction) => {
  await validateData(moduleSchema, req, res);
  if (!res.writableEnded) {
    next();
  }
};