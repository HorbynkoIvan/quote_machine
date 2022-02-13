import '../../scss/qouteBox.scss';

export const QuoteBox = ({tweetQuoteAction, tumblrQuoteAction, setNextQuote, quotes})=>{
    return (
        <div id="quote-box">
            <div className="quote-text">
                <i className="fa fa-quote-left"> </i><span id="text">{quotes.quote}</span>
            </div>
            <div className="quote-author">
                - <span id="author">{quotes.author}</span>
            </div>
            <div className="buttons">
                <a className="button"
                   id="tweet-quote"
                   title="Tweet this quote!"
                   target="_blank"
                   onClick={tweetQuoteAction}
                >
                    <i className="fa fa-twitter"></i>
                </a>
                <a className="button"
                   id="tumblr-quote"
                   title="Post this quote on tumblr!"
                   target="_blank"
                   onClick={tumblrQuoteAction}
                >
                    <i className="fa fa-tumblr"></i>
                </a>
                <button className="button" id="new-quote" onClick={setNextQuote}>New quote</button>
            </div>
        </div>
    );
}
