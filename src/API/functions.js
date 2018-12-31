import React from "react";

export const getRandomQuote = (quotes) => {
    let quotesLength = quotes.length;
    let randomIndex = Math.floor(Math.random() * quotesLength);
    let quote = quotes.map((item, i) => {
        if (i === randomIndex) {
            debugger
            return (
                <div key={i}>
                    <div className="quote-text">
                        <i className="fa fa-quote-left"> </i><span id="text">{item.quote}</span>
                    </div>
                    <div className="quote-author">
                        - <span id="author">{item.author}</span>
                    </div>
                </div>
            )
        }
    });
    return quote;
};


/*
let quotesLenght = qoutes.length;
const colors = [
    'red', 'green', 'blue', 'white', 'purple', 'yellow', 'pink', 'silver', 'gray', 'orange'
];

let randomIndex = Math.floor(Math.random() * quotesLenght);*/
