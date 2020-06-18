import { AUTH_CODES } from "../constants";

export const getLoginValidationMessage = (validationCode) => {
  switch (validationCode) {
    case (AUTH_CODES.INVALID_EMAIL):
    case (AUTH_CODES.USER_NOT_FOUND):
      return { email: 'Enter the correct username' };
    case (AUTH_CODES.WRONG_PASSWORD):
      return { password: 'Enter the correct password' };
    default:
      return { email: 'Error' };
  }
};

export const passwordValidationError = (password) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,30}$/;
  return password.match(regex) ? '' : 'Must contain at least 8 characters, including upper, lowercase and digit';
};

