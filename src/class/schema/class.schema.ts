import * as mongoose from 'mongoose';

export const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true },
  open: { type: String, required: false },
});
