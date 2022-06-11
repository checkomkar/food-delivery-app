import { LOGOUT, LOGOUT_ERROR, LOGGING_OUT } from "../types";

const initialState = {
	user: {},
	loading: false,
	error: "",
};

const logoutReducer = (state = initialState, action) => {
	switch (action.type) {
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

export default logoutReducer;
