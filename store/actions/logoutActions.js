import { LOGOUT, LOGOUT_ERROR, LOGGING_OUT } from "../types";

export const logout = (data) => async (dispatch) => {
	try {
		dispatch({
			type: LOGOUT,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: LOGOUT_ERROR,
			payload: "error in logout",
		});
	}
};

export const loggingOut = () => (dispatch) => {
	dispatch({
		type: LOGGING_OUT,
	});
};

export const logoutError = (error) => (dispatch) => {
	dispatch({
		type: LOGOUT_ERROR,
		payload: error,
	});
};
