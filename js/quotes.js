const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (qutoe) => {
  const blockQuote = document.getElementById("quote");
  console.log(qutoe);
  blockQuote.innerText = qutoe.quote;
};
