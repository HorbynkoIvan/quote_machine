import React, {Component} from 'react';
import {connect} from 'react-redux';
import './scss/common.scss';

import QuoteBox from './components/QuoteBox';
import {fetchQuotes} from "./actions";
import {getRandomQuote} from "./API/functions";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuotes()
    }

    render() {
        console.log(this.props.quote);
        debugger
        return (
            <div id="wrapper">
                <QuoteBox fetched={this.props.quote}/>
                <div className="myLink"> by <a href="https://github.com/HorbynkoIvan/quote_machine_react">DidIvan</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    quote: getRandomQuote(state.quotes),
    //quote: state.quote
});

const mapDispatchToProps = {
    fetchQuotes
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
