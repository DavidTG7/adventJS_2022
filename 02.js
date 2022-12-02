function countHours(year, holidays) {
  let counter = holidays.length;

  holidays.forEach((item) => {
    const actualDay = new Date(`${item}, ${year}`);
    const day = actualDay.getDay();
    if (day == 0 || day == 6) {
      counter -= 1;
    }
  });

  return counter * 2;
}

console.log(countHours(2020, ["02/29", "04/01", "12/25"]));
