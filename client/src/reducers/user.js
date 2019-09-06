import {
    FETCH_CURRENT_USER
    // SET_CURRENT_USER
} from '../actions/types';

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};


export default function(state = initialState, action){
    switch(action.type){
        case FETCH_CURRENT_USER:
        // case SET_CURRENT_USER:
            return { ...state, 
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload 
            };
        default:
            return state;
    }
}