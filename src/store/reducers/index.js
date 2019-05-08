import { combineReducers } from 'redux';
import { REQUEST_END, REQUEST_START,UPDATE,SELECTED_COUNTRY, ERROR } from '../actions/index';

const initialState = {
    loading: false,
    error: false,
    countries:[],
    country:{}
}

export default (state= initialState, action) => {
    switch (action.type) {
        case REQUEST_START:
            return {...state, loading:true}
        case REQUEST_END:
            return {...state, loading:false}
        case UPDATE:
            return {...state, countries: action.payload }
        case SELECTED_COUNTRY:
            return {...state, country:action.payload}
        case ERROR: 
            return {...state, error:action.payload}
        default:
            return state;
    }
}