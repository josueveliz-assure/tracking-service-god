import mongoose from 'mongoose';
import { Module, Trainee } from '../types/types';

const traineeSchema = new mongoose.Schema<Trainee>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  grade: { type: Number, required: false },
  feedback: { type: String, required: false }
});

const moduleSchema = new mongoose.Schema<Module>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  trainerId: { type: Number, required: true },
  trainees: [ traineeSchema ],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  schedule: { type: String, required: true },
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false
});

const Module = mongoose.model('Module', moduleSchema);
export default Module;
