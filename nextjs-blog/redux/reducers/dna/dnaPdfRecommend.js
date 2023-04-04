import situationTypes from '../../../constants/SituationTypes';

export const DNA_PDF_RECOMMEND_FAILURE='DNA_PDF_RECOMMEND_FAILURE';
export const DNA_PDF_RECOMMEND_SUCCESS='DNA_PDF_RECOMMEND_SUCCESS';
export const DNA_PDF_RECOMMEND_INVALID='DNA_PDF_RECOMMEND_INVALID';
export const DNA_PDF_RECOMMEND_REQUESTING='DNA_PDF_RECOMMEND_REQUESTING';
export const SET_DNA_PDF_RECOMMEND_PROGRESS='SET_DNA_PDF_RECOMMEND_PROGRESS';

const initialState = {
  readyStatus: DNA_PDF_RECOMMEND_INVALID,
  uploadProgress: {
    total: 0,
    loaded: 0,
    percentage: 0,
    name: ''
  },
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case SET_DNA_PDF_RECOMMEND_PROGRESS:
      return { ...state, uploadProgress:{ ...state.uploadProgress, ...action.value }};
    case DNA_PDF_RECOMMEND_SUCCESS:
      return { ...state, readyStatus: DNA_PDF_RECOMMEND_SUCCESS, data: action.data };
    case DNA_PDF_RECOMMEND_FAILURE:
      return { ...state, readyStatus: DNA_PDF_RECOMMEND_FAILURE, err: action.err };
    case DNA_PDF_RECOMMEND_REQUESTING:
      return { ...state, readyStatus: DNA_PDF_RECOMMEND_REQUESTING };
    case DNA_PDF_RECOMMEND_INVALID:
      return initialState;
    default:
      return state;
  }
};
