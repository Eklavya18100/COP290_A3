export const SET_STORAGE_ITEM = 'SET_STORAGE_ITEM';
export const REMOVE_USER_SESSION_MEMORY  = 'REMOVE_USER_SESSION_MEMORY'

const initialState= {
  jwt: null,
  userID: null,
  isLoggedIn: false,
  userType: 'customer',
  loginType: 'email',
  userName: '',
  ProPicUrl: null,
  email: null,
  isLangSelected: 'en',
  dna_list_data: []
}

export default (state = initialState, action)=> {
  switch (action.type) {
    case SET_STORAGE_ITEM:
      return { ...state, [action.key]: action.value };
    case REMOVE_USER_SESSION_MEMORY:
      return { ...initialState, isLangSelected: state.isLangSelected }
    default:
      return state;
  }
};


