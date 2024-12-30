import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    setQuotes, setRandomQuote,
    tweetQuoteAction,
    tumblrQuoteAction, setRandomColor
} from '../../redux/reducers/qoutesSlice';

import '../../scss/qouteBox.scss';
import axios from "axios";

const fetchQuotesFromAPI = async () => {
    const URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    const response = await axios.get(URL);
    return response.data;
}

export const fetchQuotes = () => async (dispatch) => {
    console.log('2')
    try {
        const responseQuotes = await fetchQuotesFromAPI();
        dispatch(setQuotes(responseQuotes));
        dispatch(setRandomQuote());
    } catch (error) {
        throw (error)
    }
};

export const QuoteBox = () => {
    const {currentQuote} = useSelector((state) => state.quotes);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch quotes on initial load
        axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json') // Replace with your API
            .then((response) => {
                dispatch(setQuotes(response.data));
                dispatch(setRandomQuote());
            })
            .catch((error) => console.error('Error fetching quotes:', error));
    }, [dispatch])

    const handleNewQuote = () => {
        dispatch(setRandomQuote());
        dispatch(setRandomColor());
    };

    return (
        <div id="quote-box">
            <div className="quote-text">
                <i className="fa fa-quote-left"> </i><span id="text">{currentQuote.quote}</span>
            </div>
            <div className="quote-author">
                - <span id="author">{currentQuote.author}</span>
            </div>
            <div className="buttons">
                <button className="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        onClick={tweetQuoteAction}
                >
                    <i className="fa fa-twitter"></i>
                </button>
                <button className="button"
                        id="tumblr-quote"
                        title="Post this quote on tumblr!"
                        onClick={tumblrQuoteAction}
                >
                    <i className="fa fa-tumblr"></i>
                </button>
                <button className="button" id="new-quote" onClick={handleNewQuote}>New quote</button>
            </div>
        </div>
    );
}
