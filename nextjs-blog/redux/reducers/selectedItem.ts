export const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
export const REMOVE_SELECTED_ITEM = "REMOVE_SELECTED_ITEM";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return action.value;
    case REMOVE_SELECTED_ITEM:
      return initialState;
    default:
      return state;
  }
};
