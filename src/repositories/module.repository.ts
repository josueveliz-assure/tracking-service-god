import ModuleModel from '../models/module';
import { Module } from '../types/types';

export const createModuleRepository = async (module: Module): Promise<Module> => {
  return ModuleModel.create(module);
};

export const findModuleByIdRepository = async (id: string): Promise<Module|null> => {
  return ModuleModel.findById(id);
};

export const addTraineesModuleRepository = async (id: string, trainees: Module): Promise<Module|null> => {
  return ModuleModel.findByIdAndUpdate(id, trainees, { new: true });
};