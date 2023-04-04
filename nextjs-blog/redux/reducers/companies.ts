export const FETCH_COMPANIES_FAILURE='FETCH_COMPANIES_FAILURE';
export const FETCH_COMPANIES_SUCCESS='FETCH_COMPANIES_SUCCESS';
export const FETCH_COMPANIES_INVALID='FETCH_COMPANIES_INVALID';
export const FETCH_COMPANIES_REQUESTING='FETCH_COMPANIES_REQUESTING';

const initialState = {
  readyStatus: FETCH_COMPANIES_INVALID,
  data: [],
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case FETCH_COMPANIES_SUCCESS:
      return { ...state, readyStatus: FETCH_COMPANIES_SUCCESS, data: action.data };
    case FETCH_COMPANIES_FAILURE:
      return { ...state, readyStatus: FETCH_COMPANIES_FAILURE, err: action.err };
    case FETCH_COMPANIES_REQUESTING:
      return { ...state, readyStatus: FETCH_COMPANIES_REQUESTING };
    case FETCH_COMPANIES_INVALID:
      return initialState;
    default:
      return state;
  }
};
