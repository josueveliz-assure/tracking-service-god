import z, { object } from 'zod';

export const feedbackSchema = object({
  id: z.string().optional().nullable(),
  message: z.string().min(0)
});

export const traineeSchema = object({
  id: z.number().int().positive().min(0),
  name: z.string().min(0),
  lastName: z.string().min(0),
  email: z.string().email().min(0),
  feedback: z.array(feedbackSchema).optional().nullable()
});

export const moduleSchema = z.object({
  id: z.string().optional().nullable(),
  name: z.string().min(0),
  description: z.string().min(0),
  trainerId: z.number().int().positive(),
  trainees: z.array(traineeSchema).optional().nullable(),
  startDate: z.coerce.date(),
  endDate:  z.coerce.date(),
  schedule: z.string().min(0)
});

