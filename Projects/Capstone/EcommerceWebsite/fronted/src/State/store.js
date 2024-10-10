
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { thunk } from 'redux-thunk'; 
import { authReducer } from './Auth/Reducer'
import { customerProductReducer } from './Product/Reducers';
import { cartReducer } from './Cart/Reducer';
import { orderReducer } from './Order/Reducers';

const routeReducers=combineReducers({

    auth :authReducer,
    products:customerProductReducer,
    cart :cartReducer,
    order:orderReducer

})
export const store= legacy_createStore(routeReducers,applyMiddleware(thunk))