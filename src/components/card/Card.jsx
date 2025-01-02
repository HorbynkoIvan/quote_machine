import '@scss/card.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchQuotes} from "@helpers/helpers";
import {setRandomColor, setRandomQuote, tumblrQuoteAction, tweetQuoteAction} from "@redux/reducers/qoutesSlice";
import {Button} from "@components/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faTumblr} from "@fortawesome/free-brands-svg-icons";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

export const Card = () => {
    const {isLoading, error, currentQuote} = useSelector((state) => state.quotes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuotes())
    }, [dispatch])

    const handleNewQuote = () => {
        dispatch(setRandomQuote());
        dispatch(setRandomColor());
    };

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error</div>

    return (
        <div className="card">
            <div className="content">
                <div className="quote-text">
                    <FontAwesomeIcon icon={faQuoteLeft}/><span className="text">{currentQuote.quote}</span>
                </div>
                <div className="quote-author">
                    - <span className="author">{currentQuote.author}</span>
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
