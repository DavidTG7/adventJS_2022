function fitsInOneBox(boxes) {
  let response = true;

  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length - 1 - i; j++) {
      if (boxes[j].l > boxes[j + 1].l) {
        [boxes[j], boxes[j + 1]] = [boxes[j + 1], boxes[j]];
      }
    }
  }

  for (let i = 1; i < boxes.length; i++) {
    if (
      boxes[i].l > boxes[i - 1].l &&
      boxes[i].w > boxes[i - 1].w &&
      boxes[i].h > boxes[i - 1].h
    ) {
      continue;
    } else {
      response = false;
      break;
    }
  }

  return response;
}

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
  ])
);
