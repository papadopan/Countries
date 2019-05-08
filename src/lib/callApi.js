import axios from 'axios';

export const getAllCountries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    
    const data = {
        data: response.data,
        status: response.status
    }

    return data;
}

export const getCountry = async (name) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);

    const data = {
        data: response.data,
        status: response.status
    }
    return data;
}

export const getCountryByRegion = async (region) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);

    const data = {
        data: response.data,
        status: response.status
    }

    return data;
}