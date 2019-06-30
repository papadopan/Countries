import axios from 'axios';

/**
 * action types
 */
 export const REQUEST_START = 'REQUEST_START';
 export const REQUEST_END = 'REQUEST_END';
 export const ERROR = 'ERROR';
 export const UPDATE = 'UPDATE';
 export const SELECTED_COUNTRY = 'SELECTED_COUNTRY';
 export const ANTONIOS = 'VAGGELIS';

 /**
  * action functions
  */
 export const requestStart = () => {
     return {
        type: REQUEST_START
    }
 } 

 export const requestEnd = () => {
     return {
        type: REQUEST_END
     }
 }

 export const updateCountries = ( countries) => {
    return {
        type: UPDATE,
        payload: countries
     }
 }

 export const updateSelectedCountry = (country) => {
     return {
        type: SELECTED_COUNTRY,
        payload: country
    }
 }

 export const errorHandler = (value) => {
     return {
         type: ERROR,
         payload: value
     }
 }


/**
 * fetch Country by name when user select
 */
export const fetchCountry = (name,action) => async (dispatch,getState) => {
    
    // loading starts
    dispatch(errorHandler(false))
    dispatch(requestStart())
    
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
        if(action === 'search') {
            dispatch(updateCountries(response.data))
        }else{
            dispatch(updateSelectedCountry(response.data[0]))
        }
        
    }
    catch (err){
        dispatch(errorHandler(true))
    }

    // loading ends
    dispatch(requestEnd())
}


/**
 * fecth Countries by region
*/
export const fetchCountriesByRegion = region => async (dispatch) => {
    dispatch(errorHandler(false))
    dispatch(requestStart());

    try{
        const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
        dispatch(updateCountries(response.data))
    }
    catch(error){
        dispatch(errorHandler(true))
    }

    // loading ends
    dispatch(requestEnd())
}


