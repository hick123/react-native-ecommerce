import {combineReducers} from 'redux';
import {cartReducer} from './cart/cart.reducer';

const reducers = combineReducers({
  //cart
  cartState: cartReducer,
});

export default reducers;
