import { LOGIN, LOGIN_ERROR } from "../types";

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
