import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productCreateReviewReducer, productDetailsReducer, productListReducer } from "./Reducers/ProductReducers";
import { cartReducer } from "./Reducers/CartReducers";
import {userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdatedReducer} from "./Reducers/UserReducers";

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    productReviewCreate: productCreateReviewReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdatedReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItem") ?
JSON.parse(localStorage.getItem("cartItem")) : [];

//login

const userInfoFromLocalStorage = localStorage.getItem("userInfo") ?
JSON.parse(localStorage.getItem("userInfo")) : null;

const initialSize = {
    cart : {
        cartItems: cartItemsFromLocalStorage
    },
    userLogin:{userInfo: userInfoFromLocalStorage},
}

const middleWare = [thunk]

const store = createStore(
    reducer,
    initialSize,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;