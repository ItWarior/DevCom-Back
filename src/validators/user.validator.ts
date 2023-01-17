import Joi from 'joi';
import { EMAIL_REGEX } from './regex';

export default {
  createUserValidator: Joi.object({
    login: Joi.string().alphanum().min(4).max(100).required(),
    firstName: Joi.string().alphanum().min(2).max(30).required(),
    lastName: Joi.string().alphanum().min(2).max(30).required(),
    email: Joi.string().regex(EMAIL_REGEX).trim().required(),
  }),
  updateUserValidator: Joi.object({
    login: Joi.string().alphanum().min(4).max(100),
    firstName: Joi.string().alphanum().min(2).max(30),
    lastName: Joi.string().alphanum().min(2).max(30),
    email: Joi.string().regex(EMAIL_REGEX).trim(),
  }),
};
