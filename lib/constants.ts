import { z } from 'zod';

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 10;
export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);
export const PASSWORD_REGEX_ERROR =
  'Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-';
export const TOKEN_MIN_VALUE = 100000;
export const TOKEN_MAX_VALUE = 999999;
