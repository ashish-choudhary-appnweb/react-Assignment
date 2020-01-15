import types from '../constants/types';

const INITIAL_STATE = {
    menu: null,
    totalAmount: 0,
    totalItems: 0,
    taxAmount: 0,
    deliveryAmount: 0,
};

export default (state = INITIAL_STATE, action) => {
    const { payload } = action;
    switch (action.type) {
    case types.UPDATE_CART:
        return {
            ...state,
            menu: payload.menu,
            totalAmount: payload.totalAmount,
            totalItems: payload.totalItems,
            taxAmount: payload.totalAmount * 0.05,
            deliveryAmount: 20,
        };
    case types.RESET_CART:
        return INITIAL_STATE;
    default:
        return state;
    }
};
