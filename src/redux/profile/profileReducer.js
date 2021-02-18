import Cookies from 'js-cookie';
import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
  GET_OTHER_PROFILE_FAILURE,
  GET_OTHER_PROFILE_SUCCESS,
  GET_OTHER_PROFILE_REQUEST,
} from './profileTypes';

const initialState = {
  isFetching: false,
  isAuthenticated: !!Cookies.get('id_token'), // ternaire
  user: {},
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        user: action.user,
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };
    case GET_OTHER_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    case GET_OTHER_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        otherUser: action.otherUser,
      };
    case GET_OTHER_PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };
    case EDIT_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        user: action.user,
      };
    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};

export default profileReducer;
