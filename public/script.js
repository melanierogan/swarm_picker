
// document.addEventListener("DOMContentLoaded",function(){
// const swarmThings = require('./contents');    

//   const swarmPool = [
//   [swarmThings.[0].theme],            
//   [swarmThings.data[1].theme],  
//   [swarmThings.data[2].theme],  
//   [swarmThings.data[3].theme],  
//   [swarmThings.data[4].theme],   
//   [swarmThings.data[5].theme],
//   [swarmThings.data[6].theme],
//   [swarmThings.data[7].theme],
//   [swarmThings.data[8].theme]
// ];


//     let oldQuoteIndex;

//     function generateNumber(dataPool) {
//       return Math.floor(Math.random() * dataPool.length);
//     }
  
//     function generateNewSwarm() {
//       let index = generateNumber(swarmPool);

//       while (index === oldQuoteIndex) {
//         index = generateNumber(swarmPool);
//       }
//       let newQuote = swarmPool[index];
//       let quote = document.getElementById("quote");

//       quote.innerHTML = newQuote[0];


//       oldQuoteIndex = index;
//     }
  
//     function onQuoteButtonClick() {
//       let randomQuoteButton = document.querySelector("#random-quote");
//       randomQuoteButton.addEventListener("click", function(){
//         generateNewSwarm();
//       });
//     }
  
//     onQuoteButtonClick();
  
//     window.onload = function () {
//       generateNewSwarm();

//     };
    
//   });
  
const selectTopic = document.querySelectorAll(".topic")
const topics = []

for (let topic of selectTopic) {
  //console.log(topic.textContent);
  topics.push(topic.textContent)
  // expected output: 1

}

const randomTopic = topics[Math.floor(Math.random()*topics.length)];

console.log(topics, 'yay topics');

document.getElementById("myBtn").addEventListener("mouseup", function(){
  document.getElementById("topic").innerHTML = randomTopic
});

//document.getElementById("quote").innerHTML = randomTopic