import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer,productsReducer,ventasReducer } from './reducers';
import thunk from 'redux-thunk';


const middleware = [thunk];

const rootReducer = combineReducers({
    user: userReducer,
    productos: productsReducer,
    ventas: ventasReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: middleware
});

