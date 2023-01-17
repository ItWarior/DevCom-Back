import { model, Schema } from 'mongoose';
import { UserEntity } from '../interfaces/database';

const userSchema = new Schema<UserEntity>(
  {
    login: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

const User = model('user', userSchema);
export default User;
