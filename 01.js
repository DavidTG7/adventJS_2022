function wrapping(gifts) {
  let result = [];

  const paperWrapper = (gift) => {
    let paper = "**";
    for (let i = 0; i < gift.length; i++) {
      paper += "*";
    }
    return paper;
  };

  result = gifts.map((item) => {
    const actualPaper = paperWrapper(item);
    let giftWrapped = actualPaper + "\n*" + item + "*\n" + actualPaper;

    return giftWrapped;
  });

  return result;
}

console.log(wrapping(["cat", "game", "socks"]));

// The solution was correct.
