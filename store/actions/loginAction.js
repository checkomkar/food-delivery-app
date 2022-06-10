import { LOGIN, LOGIN_ERROR, LOGGING_IN } from "../types";

export const validateLogin = (data) => async (dispatch) => {
	try {
		dispatch({
			type: LOGIN,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: LOGIN_ERROR,
			payload: "error in login",
		});
	}
};

export const loggingIn = () => (dispatch) => {
	dispatch({
		type: LOGGING_IN,
	});
};

export const loginError = (error) => (dispatch) => {
	dispatch({
		type: LOGIN_ERROR,
		payload: error,
	});
};
