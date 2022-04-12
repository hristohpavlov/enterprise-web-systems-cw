import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS, USER_LOGOUT,
      USER_REGISTER_FAIL, USER_REGISTER_REQUEST,
       USER_REGISTER_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST,
        USER_DETAILS_RESET, USER_DETAILS_SUCCESS,USER_UPDATED_FAIL,USER_UPDATED_REQUEST,USER_UPDATED_RESET,USER_UPDATED_SUCCESS } from "./../Constants/UserConstants"
//Login
export const userLoginReducer = (state = {}, action) =>{
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return { loading: true};
        case USER_LOGIN_SUCCESS :
            return { loading: false, userInfo: action.payload};
        case USER_LOGIN_FAIL :
            return { loading: false, error: action.payload};
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

//Register
export const userRegisterReducer = (state = {}, action) =>{
    switch (action.type){
        case USER_REGISTER_REQUEST:
            return { loading: true};
        case USER_REGISTER_SUCCESS :
            return { loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL :
            return { loading: false, error: action.payload};
        default:
            return state;
    }
};

//Details
export const userDetailsReducer = (state = {user: {}}, action) =>{
    switch (action.type){
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true};
        case USER_DETAILS_SUCCESS :
            return { loading: false, user: action.payload};
        case USER_DETAILS_FAIL :
            return { loading: false, error: action.payload};
        case USER_DETAILS_RESET :
            return { user: {}};
        default:
            return state;
    }
};

//UpdateProfile
export const userUpdatedReducer = (state = {}, action) =>{
    switch (action.type){
        case USER_UPDATED_REQUEST:
            return {loading: true};
        case USER_UPDATED_SUCCESS :
            return { loading: false, success: true, userInfo: action.payload};
        case USER_UPDATED_FAIL :
            return { loading: false, error: action.payload};
        default:
            return state;
    }
};