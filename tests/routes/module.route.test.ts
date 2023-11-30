import express from 'express';
import request from 'supertest';
import router from '../../src/routes/module.route';
import { createModuleController } from '../../src/controllers/module.controller';

const app = express();
app.use(express.json());
app.use('/', router);

jest.mock('../../src/controllers/module.controller');

describe('Module Routes', () => {
  it('should respond with status 200 for POST /', async () => {
    const mockModule = {
      name: 'Test Module',
      description: 'Testing module',
      trainerId: 1,
      startDate: String(new Date()),
      endDate: String(new Date()),
      schedule: '10:30 - 12:00',
    };

    (createModuleController as jest.Mock).mockImplementation(
      (request, response) => response.status(201).json()
    );

    const response = await request(app).post('/').send(mockModule);
    expect(response.status).toBe(201);
  });

  it('should respond with status 500 for POST /', async () => {
    (createModuleController as jest.Mock).mockImplementation(
      (request, response) => response.status(400).json()
    );

    const response = await request(app).post('/').send();
    expect(response.status).toBe(400);
  });
});
