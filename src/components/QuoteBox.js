import React, {Component} from 'react';
import '../scss/qouteBox.scss';

class QuoteBox extends Component {
    render() {
        //debugger
        let quote = this.props.fetched;
        return (
            <div id="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left"> </i><span id="text">{quote.quote}</span>
                </div>
                <div className="quote-author">
                    - <span id="author">{quote.author}</span>
                </div>
                <div className="buttons">
                    <a className="button"
                       id="tweet-quote"
                       title="Tweet this quote!"
                       target="_blank"
                       onClick={this.props.tweetQuoteAction}
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="button"
                       id="tumblr-quote"
                       title="Post this quote on tumblr!"
                       target="_blank"
                       onClick={this.props.tumblrQuoteAction}
                    >
                        <i className="fa fa-tumblr"></i>
                    </a>
                    <button className="button" id="new-quote" onClick={this.props.setNextQuote}>New quote</button>
                </div>
            </div>
        );
    }
}

export default QuoteBox;
