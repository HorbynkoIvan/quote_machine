import React, {Component} from 'react';
import '../scss/qouteBox.scss';

class QuoteBox extends Component {
    render() {
        console.log(`props ${this.props.fetched}`);
        console.log(`props qoutes ${this.props.fetched.quotes}`);
        /*this.props.fetched.quotes.map((item)=>{
            return
            <div className="quote-text">
                <i className="fa fa-quote-left"> </i><span id="text">{item.quote}</span>
            </div>
        })*/
        return (
            <div id="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left"> </i><span id="text">Life isn’t about getting and having, it’s about giving and being.</span>
                </div>
                <div className="quote-author">
                    - <span id="author">Kevin Kruse</span>
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
