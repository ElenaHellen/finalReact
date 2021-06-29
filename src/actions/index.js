import { createAction } from "redux-actions";

export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFail = createAction("LOGIN_FAILED");

export const registerRequest = createAction("REGISTER_REQUEST");
export const registerSuccess = createAction("REGISTER_SUCCESS");
export const registerFail = createAction("REGISTER_FAILED");
