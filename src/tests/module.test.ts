import ModuleModel from '../models/module';
import { createModuleRepository } from '../repositories/module.repository';
import { Module } from '../types/types';

jest.mock('../models/module');

describe('Module creation', () => {
  it('should not create a new module with incomplete data', async () => {
    const incompleteModuleData: Partial<Module> = {}; // Missing required fields
    const result = await createModuleRepository(incompleteModuleData as Module);

    expect(result).toBeUndefined();
  });

  it('should create a new module', async () => {
    const moduleData: Partial<Module> = {
      name: 'Test Module',
      description: 'Fake module for testing',
      trainerId: 1,
      startDate: new Date("2023-11-06"),
      endDate: new Date("2023-11-26"),
      schedule: "08:30"
    };
    const mockedModule = { _id: 'mockedID', ...moduleData } as Module;

    const createMock = jest.fn().mockResolvedValue(mockedModule);
    ModuleModel.create = createMock;

    const result = await createModuleRepository(moduleData as Module);

    expect(ModuleModel.create).toHaveBeenCalledWith(moduleData);
    expect(result).toEqual(mockedModule);
  });

});
