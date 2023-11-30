import request from 'supertest';
import express from 'express';
import { createModuleController } from '../../src/controllers/module.controller';
import { createModuleRepository } from '../../src/repositories/module.repository';

const app = express();
app.use(express.json());
app.post('/', createModuleController);

jest.mock('../../src/repositories/module.repository', () => ({
  createModuleRepository: jest.fn(),
}));

describe('createModuleController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should respond with status 201 and return created module', async () => {
    const mockCreatedModule = {
      name: 'Test Module',
      description: 'Testing module',
      trainerId: 1,
      startDate: String(new Date()),
      endDate: String(new Date()),
      schedule: '10:30 - 12:00',
    };
    (createModuleRepository as jest.Mock).mockResolvedValueOnce(mockCreatedModule);

    const response = await request(app)
      .post('/')
      .send();

    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockCreatedModule);
  });

  it('should respond with status 500 and error message on repository error', async () => {
    const mockError = new Error('Repository error');
    (createModuleRepository as jest.Mock).mockRejectedValueOnce(mockError);

    const response = await request(app)
      .post('/')
      .send();

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: mockError.message, trace: mockError.stack });
  });
});
