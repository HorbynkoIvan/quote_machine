export const colors = [
    '#e57373', '#f06292', '#b71c1c', '#880e4f', '#9c27b0', '#673ab7', '#4a148c', '#311b92', '#009688', '#4caf50', '#00bfa5', '#00c853', '#64dd17', '#5d4037', '#616161', '#607d8b', '#ff9100', '#ff3d00', '#ff6f00'
];

const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

export const getRandomQuote = (quotes) => {
    const randomIndex = getRandomIndex(quotes);
    return quotes[randomIndex];
};

/*export const getRandomQuote = (obj) => {
    let quotesLength = obj.quotes.length;
    let randomIndex = Math.floor(Math.random() * quotesLength);
    let quote = obj.quotes[randomIndex];
    const tweet = document.querySelector("#tweet-quote");
    const tumblr = document.querySelector("#tumblr-quote");
    if (tweet && tumblr) {
        tweet.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote.quote + '" ' + quote.author));
        tumblr.setAttribute('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(quote.author) + '&content=' + encodeURIComponent(quote.quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button')
    }
    return quote;
};*/


export const setColor = () => {
    let randomColor = Math.floor(Math.random() * colors.length);
    let wrapper = document.querySelector('#wrapper');
    let btnNew = document.querySelector('#new-quote');
    let btnTweet = document.querySelector('#tweet-quote');
    let btnTumblr = document.querySelector('#tumblr-quote');
    let text = document.querySelector('.quote-text');
    let author = document.querySelector('.quote-author');

    wrapper.style.backgroundColor = colors[randomColor];
    text.style.color = colors[randomColor];
    author.style.color = colors[randomColor];
    btnNew.style.borderColor = colors[randomColor];
    btnNew.style.color = colors[randomColor];

    btnTweet.style.color = colors[randomColor];

    btnTumblr.style.color = colors[randomColor];
}

function inIframe() {
    try {
        return window.self !== window.top;
    } catch {
        return true;
    }
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

// Construct social media share URLs
const createTweetURL = (quote, author) =>
    `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${quote}" ${author}`)}`;

const createTumblrURL = (quote, author) =>
    `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(author)}&content=${encodeURIComponent(quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

// Share quote on Twitter
export const tweetQuote = (quote, author) => {
    if (!inIframe()) {
        openURL(createTweetURL(quote, author));
    }
};

// Share quote on Tumblr
export const tumblrQuote = (quote, author) => {
    if (!inIframe()) {
        openURL(createTumblrURL(quote, author));
    }
};