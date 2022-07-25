import '../../scss/qouteBox.scss';

export const QuoteBox = ({tweetQuoteAction, tumblrQuoteAction, setNextQuote, quotes: {author, quote}})=>{
    return (
        <div id="quote-box">
            <div className="quote-text">
                <i className="fa fa-quote-left"> </i><span id="text">{quote}</span>
            </div>
            <div className="quote-author">
                - <span id="author">{author}</span>
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
                <button className="button" id="new-quote" onClick={setNextQuote}>New quote</button>
            </div>
        </div>
    );
}
