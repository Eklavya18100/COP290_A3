export const FETCH_BOOKMARKS_FAILURE='FETCH_BOOKMARKS_FAILURE';
export const FETCH_BOOKMARKS_SUCCESS='FETCH_BOOKMARKS_SUCCESS';
export const FETCH_BOOKMARKS_INVALID='FETCH_BOOKMARKS_INVALID';
export const FETCH_BOOKMARKS_REQUESTING='FETCH_BOOKMARKS_REQUESTING';
export const APPEND_BOOKMARK_CACHE='APPEND_BOOKMARK_CACHE'
export const REMOVE_BOOKMARK_CACHE='REMOVE_BOOKMARK_CACHE'

const initialState = {
  readyStatus: FETCH_BOOKMARKS_INVALID,
  data: [],
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case APPEND_BOOKMARK_CACHE:
      return { ...state, cache: [ ...state.data, { ...action.data, cache: true } ] }
    case REMOVE_BOOKMARK_CACHE:
      const product = action.data
      if(state.data != null) {
        let idx = state.data.findIndex(b =>
          b.p_uid === product.p_uid &&
          b.p_gender === product.p_gender &&
          b.p_smoking_st === product.p_smoking_st &&
          b.p_lower_age === product.p_lower_age &&
          b.p_payment_term === product.p_payment_term &&
          b.p_sum_ins === product.p_sum_ins &&
          b.p_ann_pre === product.p_ann_pre &&
          b.cache === true
        )
        return idx >= 0 ? {
          ...state, data: [
            ...state.data.slice(0, idx),
            ...state.data.slice(idx + 1)
          ]
        } : state
      }
      else{
        return [
          action.data
        ]
      }
    case FETCH_BOOKMARKS_SUCCESS:
      return { ...state, readyStatus: FETCH_BOOKMARKS_SUCCESS,
        data: action.data, ids: action.ids };
    case FETCH_BOOKMARKS_FAILURE:
      return { ...state, readyStatus: FETCH_BOOKMARKS_FAILURE, err: action.err };
    case FETCH_BOOKMARKS_REQUESTING:
      return { ...state, readyStatus: FETCH_BOOKMARKS_REQUESTING };
    case FETCH_BOOKMARKS_INVALID:
      return initialState;
    default:
      return state;
  }
};
