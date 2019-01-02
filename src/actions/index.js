import axios from 'axios';
import {
    FETCH_QUOTES_START,
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_FAILURE,
    SET_NEXT_QUOTE
} from "../actionTypes";

const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

export const fetchQuotes = () => {
    return (dispatch) => {
        dispatch({type: FETCH_QUOTES_START});
        axios.get(URL)
            .then(response => {
                console.log(response.data);
                return dispatch({type: FETCH_QUOTES_SUCCESS, payload: response.data});
            }).catch((error) => {
            dispatch({type: FETCH_QUOTES_FAILURE});
            throw (error)

        })
    }

};

export const setNextQuote=()=>{
    return {
        type: SET_NEXT_QUOTE
    }
}