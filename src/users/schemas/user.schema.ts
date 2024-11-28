import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    department: { type: String },
  },
  { timestamps: true },
);
