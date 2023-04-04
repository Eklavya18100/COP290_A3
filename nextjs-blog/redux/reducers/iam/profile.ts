import fp from 'lodash/fp';

export const FETCH_DETAIL_INFO_REQUESTING = 'FETCH_DETAIL_INFO_REQUESTING';
export const FETCH_DETAIL_INFO_FAILURE = 'FETCH_DETAIL_INFO_FAILURE';
export const FETCH_DETAIL_INFO_SUCCESS = 'FETCH_DETAIL_INFO_SUCCESS';
export const FETCH_DETAIL_INFO_INVALID = 'FETCH_DETAIL_INFO_INVALID';
export const RESET_PROFILE = 'RESET_PROFILE';

export const APPEND_PROFILE_FAV_PROP = 'APPEND_PROFILE_FAV_PROP';
export const REMOVE_PROFILE_FAV_PROP = 'REMOVE_PROFILE_FAV_PROP';

export const UPDATE_AVATAR_STATUS = 'UPDATE_AVATAR_STATUS';
export const UPDATE_AVATAR_REQUESTING = 'UPDATE_AVATAR_REQUESTING';

type State = {
  readyStatus: string,
  err?: any,
  data?: any
}

const initialState : State = {
    readyStatus: FETCH_DETAIL_INFO_INVALID,
    err: null,
    data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PROFILE:
      return initialState;
    case FETCH_DETAIL_INFO_REQUESTING:
      return fp.assign(state, {
          readyStatus: FETCH_DETAIL_INFO_REQUESTING
      });
    case FETCH_DETAIL_INFO_FAILURE:
      return fp.assign(state, {
          readyStatus: FETCH_DETAIL_INFO_FAILURE,
          err: action.err
      });
    case FETCH_DETAIL_INFO_SUCCESS:
      return fp.assign(state, {
          readyStatus: FETCH_DETAIL_INFO_SUCCESS,
          data: action.data
      });
    case APPEND_PROFILE_FAV_PROP:
      return fp.assign(state, {
        ...state,
        data: {
          ...state.data,
          favProps: [ ...state.data.favProps, action.id ]
        }
      });
    case REMOVE_PROFILE_FAV_PROP:
      return fp.assign(state, {
        ...state,
        data: {
          ...state.data,
          favProps: state.data.favProps.filter(id => id !== action.id)
        }
      });
    case UPDATE_AVATAR_STATUS:
      return {
        ...state, 
        data: {
          ...state.data,
          thumbnail: {
            readyStatus: action.readyStatus,
            progress: action.progress,
            url: action.url,
          }
        }
      };
    default:
      return state;
  }
}
