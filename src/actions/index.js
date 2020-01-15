import createAction from './create-actions';
import types from '../constants/types';

export const appBootstrap = createAction(types.INITIAL_LOAD_SUCCESS, 'payload');

export const onAppBootstrap = () => {
    return async dispatch => {
        try{
            const response = await fetch('https://www.mocky.io/v2/5e1ece5f31000036001894b1', {method: 'GET'});
            const body = await response.json();
            dispatch(appBootstrap(Object.values(body).map(b => ({...b, itemCount: 0}))));
        }catch(error){
            console.log('ERROR', error);
        }
    };
};

export const updateCart = (data) => {
    return {
        type: types.UPDATE_CART,
        payload: {
            menu: data.menu,
            totalAmount: data.totalAmount,
            totalItems: data.totalItems,
        },
    };
};
  
export const resetCart = () => {
    return {
        type: types.RESET_CART,
    };
};