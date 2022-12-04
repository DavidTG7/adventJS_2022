function distributeGifts(packOfGifts, reindeers) {
  let totalWeight = 0;
  let maxLoad = 0;

  packOfGifts.forEach((gift) => {
    totalWeight += gift.length;
  });

  reindeers.forEach((renind) => {
    maxLoad += renind.length * 2;
  });

  let result = Math.floor(maxLoad / totalWeight);

  return result;
}

console.log(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]));
