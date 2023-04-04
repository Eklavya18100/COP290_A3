export const FETCH_PRODUCT_FAILURE='FETCH_PRODUCT_FAILURE';
export const FETCH_PRODUCT_SUCCESS='FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_INVALID='FETCH_PRODUCT_INVALID';
export const FETCH_PRODUCT_REQUESTING='FETCH_PRODUCT_REQUESTING';

const initialState = {
    readyStatus: FETCH_PRODUCT_INVALID,
    data: {
        cat_id: null,
        id: null,
        productId: null,
        paymentTerm: null,
        lowerAge: null,
        smokingStatus: null,
        productGender: null,
        sumInsured: null,
        annPremium: null,
        infoViewType: null
    },
    err: null
};

export default (state = initialState, action)=> {
    switch (action.type) {
        case FETCH_PRODUCT_SUCCESS:
            return { ...state, readyStatus: FETCH_PRODUCT_SUCCESS, data: action.data };
        case FETCH_PRODUCT_FAILURE:
            return { ...state, readyStatus: FETCH_PRODUCT_FAILURE, err: action.err };
        case FETCH_PRODUCT_REQUESTING:
            return { ...state, readyStatus: FETCH_PRODUCT_REQUESTING };
        case FETCH_PRODUCT_INVALID:
            return initialState;
        default:
            return state;
    }
};
