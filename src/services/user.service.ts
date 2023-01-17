import { FilterQuery, HydratedDocument } from 'mongoose';
import User from '../database/user.model';
import HttpError from '../errors/http.error';
import { UserEntity } from '../interfaces/database';

export async function finUserByQuery(param: FilterQuery<UserEntity>): Promise<HydratedDocument<UserEntity>> {
  return User.findOne(param);
}

export async function findAllUsers(): Promise<Array<HydratedDocument<UserEntity>>> {
  return User.find();
}

export async function createUser(user: UserEntity): Promise<HydratedDocument<UserEntity>> {
  const alreadyExists = await finUserByQuery({ email: user.email });
  if (alreadyExists) {
    throw new HttpError(400, 'There is the same user');
  }

  return User.create(user);
}

export async function findByEmailAndUpdate(email: string, params: UserEntity): Promise<HydratedDocument<UserEntity>> {
  if (params.email) {
    const alreadyExists = await finUserByQuery({ email: params.email });
    if (alreadyExists) {
      throw new HttpError(400, 'There is the same ');
    }
  }
  return User.findOneAndUpdate({ email }, params, { new: true });
}

export async function findByEmailAndDelete(email: string): Promise<HydratedDocument<UserEntity>> {
  return User.findOneAndDelete({ email });
}
