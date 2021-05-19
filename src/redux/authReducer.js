const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

const initialState = {
    user: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    picture: action.payload.picture,
                    verifiedEmail: action.payload.verifiedEmail
                },
                isAuth: true
            };
        case SIGN_OUT:
            return {user: null, isAuth: false};
        default:
            return state;
    }
}

//actions
export const signIn = payload => ({type: SIGN_IN, payload});
export const signOut = () => ({type: SIGN_OUT});

//selectors
export const user = state => state.auth.user;
export const isAuth = state => state.auth.isAuth;
export const auth = state => state.auth;

export default authReducer;