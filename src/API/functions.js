const colors = [
    '#e57373', '#f06292', '#b71c1c', '#880e4f', '#9c27b0', '#673ab7', '#4a148c', '#311b92', '#009688', '#4caf50', '#00bfa5', '#00c853', '#64dd17', '#5d4037', '#616161', '#607d8b', '#ff9100', '#ff3d00', '#ff6f00'
];

export const getRandomQuote = (obj) => {
    //debugger
    let quotesLength = obj.quotes.length;
    let randomIndex = Math.floor(Math.random() * quotesLength);
    let quote = obj.quotes[randomIndex];
    return quote;
};


export const setColor = () => {
    let randomColor = Math.floor(Math.random() * colors.length);
    let wrapper = document.querySelector('#wrapper');
    let text = document.querySelector('.quote-text');
    let author = document.querySelector('.quote-author');

    wrapper.style.backgroundColor = colors[randomColor];
    console.log(colors[randomColor])
    text.style.color = colors[randomColor];
    author.style.color = colors[randomColor];
}

