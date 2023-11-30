import { Document } from 'mongoose';

export interface Trainee {
  name: string,
  lastName: string,
  email: string,
  grade: number
}

export interface Module extends Document {
  id? : number,
  name: string,
  description: string,
  trainerId: number,
  trainees?: Trainee[],
  startDate: Date,
  endDate: Date,
  schedule: string
}
