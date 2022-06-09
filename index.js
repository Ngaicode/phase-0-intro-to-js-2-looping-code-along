// Code your solutions in this file
"use strict";
let meow = ["wolfie", "susan", "mercy"];
function writeCards(arrayOfNames, event) {
  let thankYouCards = [];
  for (let i = 0; i < arrayOfNames.length; i++) {
    thankYouCards.push(
      `Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankYouCards;
}
writeCards(meow, "birthday");
function countDown(startNum) {
  while (startNum > 0) {
    console.log(startNum);
    startNum -= 1;
  }
  console.log(startNum);
}
countDown(11);
