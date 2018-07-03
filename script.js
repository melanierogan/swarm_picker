
document.addEventListener("DOMContentLoaded",function(){
    

  const quotesPool = [["Migrate from Travis to CircleCI 2.0"],            
  ["Test coverage"],  
  ["Migrate our config vars to Vault"],  
  ["Security fixes (npm audit, whitesource, github warnings)"],  
  ["Integrate the IP flags client into apps"],   
  ["Linting"]];

    let oldQuoteIndex;

    function generateNumber(dataPool) {
      return Math.floor(Math.random() * dataPool.length);
    }
  
    function generateNewQuote() {
      let index = generateNumber(quotesPool);

      while (index === oldQuoteIndex) {
        index = generateNumber(quotesPool);
      }
      let newQuote = quotesPool[index];
      let quote = document.getElementById("quote");

      quote.innerHTML = newQuote[0];


      oldQuoteIndex = index;
    }
  
    function onQuoteButtonClick() {
      let randomQuoteButton = document.querySelector("#random-quote");
      randomQuoteButton.addEventListener("click", function(){
        generateNewQuote();
      });
    }
  
    onQuoteButtonClick();
  
    window.onload = function () {
      generateNewQuote();

    };
    
  });
  
