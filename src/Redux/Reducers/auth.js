const initialState = {
	login: {
		token: {},
		error: {},
		loading: false
	},
	signup: {
		error: {},
		loading: true,
		redirect: false
	}
};

export const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		// * Login Types
		case 'loginLoading':
			return {
				...state,
				login: {
					loading: true,
					error: {},
					token: {}
				}
			};
		case 'loginSuccess':
			return {
				...state,
				login: {
					loading: false,
					error: {},
					token: action.payload
				}
			};
		case 'loginError':
			return {
				...state,
				login: {
					loading: false,
					error: action.payload,
					token: {}
				}
			};
		// * SignUp Types
		case 'SignUpLoading':
			return {
				...state,
				signup: {
					loading: true,
                    error: false,
                    redirect: false
				}
			};
		case 'SignUpSuccess':
			return {
				...state,
				signup: {
					loading: false,
					error: {},
					redirect: action.payload
				}
			};
		case 'SignUpError':
			return {
                ...state,
                signup:{
                    loading: false,
                    error: action.payload,
                    redirect: false
                }
            };
        case 'LogOut':
            return {
                ...state,
                login: initialState.login
            }
		default:
			return state;
	}
};
