import { createModuleRepository } from '../../src/repositories/module.repository';
import { Module } from '../../src/types/types';
import ModuleModel from '../../src/models/module';

jest.mock('../../src/models/module');

describe('createModuleRepository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new module', async () => {
    const mockCreatedModule: Partial<Module> = {
      name: 'Test Module',
      description: 'Testing module',
      trainerId: 1,
      startDate: new Date(),
      endDate: new Date(),
      schedule: '10:30 - 12:00',
    };

    (ModuleModel.create as jest.Mock).mockResolvedValueOnce(mockCreatedModule);

    const createdModule = await createModuleRepository(mockCreatedModule as Module);

    expect(createdModule).toEqual(mockCreatedModule);
    expect(ModuleModel.create).toHaveBeenCalledWith(mockCreatedModule);
  });

  it('should handle repository error', async () => {
    const mockModuleData = {};
    const mockError = new Error('Repository error');
    (ModuleModel.create as jest.Mock).mockRejectedValueOnce(mockError);

    await expect(createModuleRepository(mockModuleData as Module)).rejects.toThrow(mockError);
    expect(ModuleModel.create).toHaveBeenCalledWith(mockModuleData);
  });
});