import '@scss/card.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchQuotes} from "@helpers/helpers";
import {setRandomColor, setRandomQuote, tumblrQuoteAction, tweetQuoteAction} from "@redux/reducers/qoutesSlice";
import {Button} from "@components/quoteBox/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faTumblr} from "@fortawesome/free-brands-svg-icons";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

export const Card = () => {
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
        <div className="card">
            <div className="content">
                <div className="quote-text">
                    <FontAwesomeIcon icon={faQuoteLeft}/><span id="text">{currentQuote.quote}</span>
                </div>
                <div className="quote-author">
                    - <span id="author">{currentQuote.author}</span>
                </div>
                <div className="buttons-row">
                    <div className="buttons">
                        <Button
                            className="tweet"
                            onClick={() => dispatch(tweetQuoteAction())}
                            title="Tweet this quote!"
                        >
                            <FontAwesomeIcon icon={faTwitter}/>
                        </Button>
                        <Button
                            className="tumblr"
                            onClick={() => dispatch(tumblrQuoteAction())}
                            title="Post this quote on tumblr!">
                            <FontAwesomeIcon icon={faTumblr}/>
                        </Button>
                    </div>

                    <Button onClick={handleNewQuote}>New quote</Button>
                </div>
            </div>
        </div>
    );
}
