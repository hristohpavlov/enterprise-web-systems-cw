import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItem") ?
JSON.parse(localStorage.getItem("cartItem")) : [];

const initialSize = {
    cart : {
        cartItems: cartItemsFromLocalStorage
    }
}

const middleWare = [thunk]

const store = createStore(
    reducer,
    initialSize,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;