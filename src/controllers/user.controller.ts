import { Request, Response } from 'express';
import HttpError from '../errors/http.error';
import * as userService from '../services/user.service';
import userValidator from '../validators/user.validator';

export async function getUsers(req: Request, res: Response) {
  return res.json(await userService.findAllUsers());
}

export async function createUser(req: Request, res: Response) {
  const { error } = userValidator.createUserValidator.validate(req.body);
  if (error) {
    throw new HttpError(400, error.details[0].message);
  }

  const createdUser = await userService.createUser(req.body);

  return res.json(createdUser);
}

export async function updateUser(req: Request, res: Response) {
  const { email } = req.params as { email: string };
  const infoToUpdate = req.body;

  const { error } = userValidator.updateUserValidator.validate(infoToUpdate);
  if (error) {
    throw new HttpError(400, error.details[0].message);
  }

  const updatedUser = await userService.findByEmailAndUpdate(email, infoToUpdate);

  return res.json(updatedUser);
}

export async function deleteUser(req: Request, res: Response) {
  const { email } = req.params as { email: string };
  return res.json(await userService.findByEmailAndDelete(email));
}
