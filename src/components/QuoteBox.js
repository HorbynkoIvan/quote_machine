import React, {Component} from 'react';
import '../scss/qouteBox.scss';

class QuoteBox extends Component {
    render() {
        debugger
        console.log(`props ${this.props.fetched}`);
        console.log(`props qoutes ${this.props.fetched.quotes}`);
        let quote = this.props.fetched.quotes.quote;
        let author = this.props.fetched.quotes.quote;
        /*this.props.fetched.quotes.map((item)=>{
            return
            <div className="quote-text">
                <i className="fa fa-quote-left"> </i><span id="text">{item.quote}</span>
            </div>
        })*/
        return (
            <div id="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left"> </i><span id="text">{quote}</span>
                </div>
                <div className="quote-author">
                    - <span id="author">{author}</span>
                </div>
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
