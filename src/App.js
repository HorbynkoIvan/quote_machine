import React, {Component} from 'react';
import {connect} from 'react-redux';
import './scss/common.scss';

import QuoteBox from './components/QuoteBox';
import {fetchQuotes} from "./actions";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetchQuotes()
    }

    render() {
        debugger
        console.log(this.props.quotes);
        return (
            <div id="wrapper">
                <QuoteBox fetched = {this.props.quotes}/>
                <div className="myLink"> by <a href="https://github.com/HorbynkoIvan/quote_machine_react">DidIvan</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    quotes: state
})

const mapDispatchToProps = {
    fetchQuotes
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
