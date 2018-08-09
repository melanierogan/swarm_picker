
document.addEventListener("DOMContentLoaded",function(){
    

  const swarmPool = [["Migrate from Travis to CircleCI 2.0"],            
  ["Test coverage"],  
  ["Migrate our config vars to Vault"],  
  ["Security fixes (npm audit, whitesource, github warnings)"],  
  ["Integrate the IP flags client into apps"],   
  ["Linting"],
  ["Renaming things"],
  ["De-gulpifying all our repos (we don’t need gulp and it has some security issues)"],
  ["(Ad hoc) Fixing things"]];


    let oldQuoteIndex;

    function generateNumber(dataPool) {
      return Math.floor(Math.random() * dataPool.length);
    }
  
    function generateNewSwarm() {
      let index = generateNumber(swarmPool);

      while (index === oldQuoteIndex) {
        index = generateNumber(swarmPool);
      }
      let newQuote = swarmPool[index];
      let quote = document.getElementById("quote");

      quote.innerHTML = newQuote[0];


      oldQuoteIndex = index;
    }
  
    function onQuoteButtonClick() {
      let randomQuoteButton = document.querySelector("#random-quote");
      randomQuoteButton.addEventListener("click", function(){
        generateNewSwarm();
      });
    }
  
    onQuoteButtonClick();
  
    window.onload = function () {
      generateNewSwarm();

    };
    
  });
  
