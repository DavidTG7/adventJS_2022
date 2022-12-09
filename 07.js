function getGiftsToRefill(a1, a2, a3) {
  const a1Set = new Set(a1);
  const a2Set = new Set(a2);
  const a3Set = new Set(a3);

  const allStores = [...a1Set, ...a2Set, ...a3Set];

  const allStoresReduce = allStores.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
    return obj;
  }, {});

  let result = [];

  Object.entries(allStoresReduce).forEach((item) => {
    if (item[1] === 1) {
      result.push(item[0]);
    }
  });

  return result;
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

console.log(getGiftsToRefill(a1, a2, a3));
