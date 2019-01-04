import React, {Component} from 'react';
import {connect} from 'react-redux';
import './scss/common.scss';

import QuoteBox from './components/QuoteBox';
import {fetchQuotes, setNextQuote} from "./actions";
//import {getRandomQuote} from "./API/functions";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuotes()
    }

    render() {
        console.log(this.props.quotes);
        //debugger
        return (
            <div id="wrapper">
                <QuoteBox
                    fetched={this.props.quotes}
                    setNextQuote={this.props.setNextQuote}/>
                <div className="myLink"> by <a href="https://github.com/HorbynkoIvan/quote_machine_react">DidIvan</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    quotes: store.quotes
});

const mapDispatchToProps = {
    fetchQuotes, setNextQuote
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
