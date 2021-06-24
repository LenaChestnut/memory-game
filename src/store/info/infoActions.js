import axios from 'axios';
import {
  FETCH_INFO_FAILURE,
  FETCH_INFO_REQUEST,
  FETCH_INFO_SUCCESS,
} from './infoActionTypes';

export const fetchInfoRequest = () => {
  return {
    type: FETCH_INFO_REQUEST,
  };
};

export const fetchInfoSuccess = (info) => {
  return {
    type: FETCH_INFO_SUCCESS,
    payload: info,
  };
};

export const fetchInfoFailure = (error) => {
  return {
    type: FETCH_INFO_FAILURE,
    payload: error,
  };
};

export const fetchInfo = () => {
  return (dispatch) => {
    dispatch(fetchInfoRequest);

    axios
      .get('data.json')
      .then((response) => {
        const info = response.data;
        dispatch(fetchInfoSuccess(info));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchInfoFailure(errorMsg));
      });
  };
};
