export const SET_INSUR_CALC_ITEM = "SET_INSUR_CALC_ITEM";
export const SET_MORTGAGE_ITEM = "SET_MORTGAGE_ITEM";
export const REMOVE_MORTGAGE_ITEM = "REMOVE_MORTGAGE_ITEM";
export const REMOVE_USER_SESSION_MEMORY = "REMOVE_USER_SESSION_MEMORY";

const initialState = {
  ageNum: 0,
  mortgage: {
    hasMortgage: false,
    mortgageNum: 0,
    mortgageYears: 0,
  },
  annIncomeAmount: 0,
  kidNum: 0,
  youngestKidAgeNum: 0,
  isMarried: false,
  debtAmount: 0,
  coverageNum: 0,
  savingsAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INSUR_CALC_ITEM:
      return { ...state, [action.key]: action.value };
    case SET_MORTGAGE_ITEM:
      return {
        ...state,
        mortgage: { ...state.mortgage, [action.key]: action.value },
      };
    case REMOVE_MORTGAGE_ITEM:
      return { ...state, mortgage: { ...initialState.mortgage } };
    case REMOVE_USER_SESSION_MEMORY:
      return { ...initialState };
    default:
      return state;
  }
};
