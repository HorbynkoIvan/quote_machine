import React, {Component} from 'react';
import '../scss/qouteBox.scss';

class QuoteBox extends Component {
    render() {
        debugger
        let quote = this.props.fetched.quotes;
        // if(!quote || !quote.length) return;
        let quotesLength = quote.length;
        let randomIndex = Math.floor(Math.random() * quotesLength);
        let author = quote.map((item, randomIndex) => {
            return (
                <div>
                    <div className="quote-text">
                        <i className="fa fa-quote-left"> </i><span id="text">{item.quote}</span>
                    </div>
                    <div className="quote-author">
                        - <span id="author">{item.author}</span>
                    </div>
                </div>
            )
        })
        return (
            <div id="quote-box">
                {author[randomIndex]}
                <div className="buttons">
                    <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
                        <i className="fa fa-tumblr"></i>
                    </a>
                    <button className="button" id="new-quote">New quote</button>
                </div>
            </div>
        );
    }
}

export default QuoteBox;
