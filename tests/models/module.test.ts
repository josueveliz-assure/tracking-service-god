import Module from '../../src/models/module';

describe('Module Class', () => {
  it('should create a new module instance', () => {
    const startDate = new Date();
    const endDate = new Date();

    const newModule = new Module({
      name: 'Test Module',
      description: 'Testing module',
      trainerId: 1,
      trainees: ['Trainee1', 'Trainee2'],
      startDate,
      endDate,
      schedule: '10:30 - 12:00',
    });

    expect(newModule).toBeInstanceOf(Module);
    expect(newModule.name).toBe('Test Module');
    expect(newModule.startDate).toBe(startDate);
    expect(newModule.endDate).toBe(endDate);
  });
});