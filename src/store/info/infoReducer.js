import {
  FETCH_INFO_FAILURE,
  FETCH_INFO_REQUEST,
  FETCH_INFO_SUCCESS,
} from './infoActionTypes';

const initialState = {
  loading: false,
  info: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INFO_SUCCESS:
      return {
        loading: false,
        info: action.payload,
        error: '',
      };
    case FETCH_INFO_FAILURE:
      return {
        loading: false,
        info: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
