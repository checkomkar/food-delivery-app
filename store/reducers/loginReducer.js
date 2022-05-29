import { LOGIN, LOGIN_ERROR } from "../types";

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

		case LOGIN_ERROR:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default loginReducer;
