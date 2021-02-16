import Cookies from 'js-cookie';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  LOGOUT_SUCCESS,
} from './authTypes';

const initialState = {
  isFetching: false,
  isAuthenticated: !!Cookies.get('id_token'), // ternaire
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        user: action.user,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };
    case LOGOUT_SUCCESS:
      Cookies.remove('id_token');
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
