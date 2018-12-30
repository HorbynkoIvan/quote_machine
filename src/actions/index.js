import axios from 'axios';
import {
    FETCH_QOUTES_START,
    FETCH_QOUTES_SUCCESS,
    FETCH_QOUTES_FAILURE
} from "../actionTypes";

const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

export const fetchQuotes = () => {
    return (dispatch) => {
        dispatch({type: FETCH_QOUTES_START});
        axios.get(URL)
            .then(response => {
                console.log(response.data);
                debugger
                return dispatch({type: FETCH_QOUTES_SUCCESS, payload: response.data});
            }).catch((errore) => {
            debugger
            dispatch({type: FETCH_QOUTES_FAILURE});
            throw (errore)

        })
    }

};