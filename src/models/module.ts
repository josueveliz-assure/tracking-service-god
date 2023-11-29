import mongoose from 'mongoose';
import { Module } from '../types/types';

const moduleSchema = new mongoose.Schema<Module>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  trainerId: { type: Number, required: true },
  trainees: [ String ],
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
