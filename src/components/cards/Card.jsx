import '@scss/card.scss';
import {tumblrQuoteAction, tweetQuoteAction} from "@redux/reducers/qoutesSlice";
import {Button} from "@components/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faTumblr} from "@fortawesome/free-brands-svg-icons";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

export const Card = ({currentQuote, handleNewQuote}) => (
    <div className="card">
        <div className="content">
            <div className="quote-text"
            >
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

                <Button
                    onClick={handleNewQuote}>New quote</Button>
            </div>
        </div>
    </div>
);
