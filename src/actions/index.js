import axios from 'axios';
import {
    FETCH_QUOTES_START,
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_FAILURE,
    SET_NEXT_QUOTE,
    TWEET_QUOTE,
    TUMBLR_QUOTE
} from "../actionTypes";

const fetchQuotesFromAPI = async () => {
    const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    const response = await axios.get(URL);
    return response.data;
}

export const fetchQuotes = () => async (dispatch) => {
    dispatch({type: FETCH_QUOTES_START});
    try {
        const responseQuotes = await fetchQuotesFromAPI();
        dispatch({type: FETCH_QUOTES_SUCCESS, payload: responseQuotes});
    } catch (error) {
        dispatch({type: FETCH_QUOTES_FAILURE});
        throw (error)
    }
};

export const setNextQuote = () => ({type: SET_NEXT_QUOTE});

export const tweetQuoteAction = () => ({type: TWEET_QUOTE});

export const tumblrQuoteAction = () => ({type: TUMBLR_QUOTE});