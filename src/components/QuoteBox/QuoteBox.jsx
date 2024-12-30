import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    setRandomQuote,
    tweetQuoteAction,
    tumblrQuoteAction, setRandomColor
} from '../../redux/reducers/qoutesSlice';
import '../../scss/qouteBox.scss';
import {fetchQuotes} from "../../helpers/helpers";

export const QuoteBox = () => {
    const {currentQuote} = useSelector((state) => state.quotes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuotes())
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
