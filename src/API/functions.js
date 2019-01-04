import React from "react";

export const getRandomQuote = (obj) => {
    //debugger
    let quotesLength = obj.quotes.length;
    let randomIndex = Math.floor(Math.random() * quotesLength);
    let quote = obj.quotes[randomIndex];
    return quote;
};

export const getNextQuote = (quote) =>{

}
/*
let quotesLenght = qoutes.length;
const colors = [
    'red', 'green', 'blue', 'white', 'purple', 'yellow', 'pink', 'silver', 'gray', 'orange'
];

let randomIndex = Math.floor(Math.random() * quotesLenght);*/
