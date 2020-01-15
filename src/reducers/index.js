import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import initialReducer from './initialReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    initial: initialReducer,
});

export default rootReducer;
