// Centralized propType definitions
import { shape, number, bool, string } from 'prop-types';


export const loginSubmit = shape({
  username: string,
  password: string,
  change_pwd_reqd: number,
  user_id: number,
  status: string,
  requestSent: bool,
  loginResponse: loginResponse
});

export const loginResponse = shape({
  token: string,
});
