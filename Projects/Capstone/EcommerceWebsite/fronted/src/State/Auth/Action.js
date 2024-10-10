/* eslint-disable no-unused-vars */

import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";
import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
} from "./ActionType";

const token =localStorage.getItem("jwt")

const registerRequest = () => ({ type: REGISTER_REQUEST});
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
    console.log("Register action triggered with userData:", userData);
    dispatch(registerRequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user = response.data;
        console.log("Full Response in Register:", response); // Log full response
        console.log("User Object in Register:", user); 
        if (user.jwt) {
            // localStorage.setItem('jwt', JSON.stringify(user))
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("User in register profile", user.jwt);
        // dispatch(registerSuccess(user));
        dispatch(registerSuccess(user));
        
    } catch (error) {
        console.log("Register error:", error.message); 
        dispatch(registerFailure(error.message));
    }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        console.log("Full Response in Login:", response); // Log full response
        const user = response.data;
        console.log("User Object in Login:", user);
        if (user.jwt) {
            // localStorage.setItem('jwt', JSON.stringify(user))
            localStorage.setItem("jwt", user.jwt);
        }

        console.log("User in login profile", user.jwt);
        // dispatch(registerSuccess(user));
        dispatch(loginSuccess(user.jwt));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST});
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
    dispatch(getUserRequest());
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${jwt}`
            }
        });
        const user = response.data;
       
        console.log("Full Response in Get User:", response); // Log full response
    
        console.log("User Object in Get User:", user); 
        // console.log("User Object jwt in Get User:", user.jwt); 
        dispatch(getUserSuccess(user));
    } catch (error) {
        console.log("error in getting user profile", error.message);
        dispatch(getUserFailure(error.message));
    }
};

export const logout =()=>(dispatch)=>{
    dispatch({type: LOGOUT, payload:null})
    localStorage.clear();
}