const selectTopic = document.querySelectorAll(".topic")
const topics = []

for (let topic of selectTopic) {
  //console.log(topic.textContent);
  topics.push(topic.textContent)
  // expected output: 1

}

const randomTopic = topics[Math.floor(Math.random()*topics.length)];

console.log(topics, 'yay topics');

// document.getElementById("myBtn").addEventListener("mouseup", function()
// {
//   document.getElementById("topic").innerHTML = randomTopic
// });

const el = document.getElementById("topic").innerHTML = randomTopic
el.addEventListener("click", false);

// element.addEventListener("mouseover", myFunction);
// element.addEventListener("click", mySecondFunction);
// element.addEventListener("mouseout", myThirdFunction);
//document.getElementById("quote").innerHTML = randomTopic
