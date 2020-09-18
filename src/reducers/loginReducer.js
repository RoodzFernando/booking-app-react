import * as actions from '../actions/actions';

const initialState = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('auth_token'),
};

function authenticate(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.payload.username,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.payload,
      };
    case actions.LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default authenticate;
