const playingCards = Math.ceil(3 * Math.random());
console.log(playingCards);

if (playingCards === 1 || playingCards === 3) {
  console.log("Ace")
} else if (playingCards === 13) {
  console.log("King");
}
