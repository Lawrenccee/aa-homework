import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
export const receiveSearchGiphys = giphys => {
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  };
};

export const REQUEST_SEARCH_GIPHYS = 'REQUEST_SEARCH_GIPHYS';
export const fetchSearchGiphys = (searchTerm) => {
  return (dispatch) => {
    APIUtil.fetchSearchGiphys(searchTerm).then((giphys) => {
      return dispatch(receiveSearchGiphys(giphys.data));
    });
  };
};
