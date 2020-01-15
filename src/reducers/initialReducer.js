import types from '../constants/types';

const INITIAL_STATE = {
    places: [],
};

export default (state = INITIAL_STATE, action) => {
    const { payload } = action;
    switch (action.type) {
    case types.INITIAL_LOAD_SUCCESS:
        return { ...state, places: payload };
    case types.INITIAL_LOAD_ERROR:
        return { ...state, ...INITIAL_STATE, error: payload };
    default:
        return state;
    }
};
