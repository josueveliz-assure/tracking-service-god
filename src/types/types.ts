import { Document } from 'mongoose';

export interface Trainee {
  id: string,
  name: string,
  lastName: string,
  email: string,
  grade: number
}

export interface Module extends Document {
  name: string,
  description: string,
  trainerId: number,
  trainees?: Trainee[],
  startDate: Date,
  endDate: Date,
  schedule: string
}
