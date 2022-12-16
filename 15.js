function decorateTree(base) {
  let first = base.split(" ").join("");
  let parcial = [first];

  let a = "";
  let b = "";
  let res = "";

  while (parcial[0].length > 1) {
    let aux = "";
    for (let j = 0; j < parcial[0].length - 1; j++) {
      a = parcial[0][j];
      b = parcial[0][j + 1];

      if (a === "P" && b === "P") {
        res = "P";
      } else if (a === "B" && b === "B") {
        res = "B";
      } else if (a === "R" && b === "R") {
        res = "R";
      } else if ((a === "B" || a === "P") && (b === "B" || b === "P")) {
        res = "R";
      } else if ((a === "R" || a === "P") && (b === "R" || b === "P")) {
        res = "B";
      } else {
        res = "P";
      }
      aux += res;
    }
    parcial.unshift(aux);
  }

  return parcial.map((item) => item.split("").join(" "));
}

console.log(decorateTree("B P R P"));
