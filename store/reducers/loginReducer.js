import {
	LOGIN,
	LOGIN_ERROR,
	LOGGING_IN,
	LOGOUT,
	LOGOUT_ERROR,
	LOGGING_OUT,
} from "../types";

const initialState = {
	user: {},
	loading: false,
	error: "",
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case LOGGING_IN:
			return {
				...state,
				loading: true,
			};

		case LOGIN_ERROR:
			return {
				loading: false,
				error: action.payload,
			};
		case LOGOUT:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case LOGGING_OUT:
			return {
				...state,
				loading: true,
			};

		case LOGOUT_ERROR:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default loginReducer;
