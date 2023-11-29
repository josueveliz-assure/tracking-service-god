import ModuleModel from '../models/module';
import { Module } from '../types/types';

export const createModuleRepository = async (module: Module): Promise<Module> => {
  return ModuleModel.create(module);
};
