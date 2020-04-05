export function PrepStacked(data) {
  const stackedData = {
    negative: [],
    positive: [],
    total: [],
  }

  data.forEach(day => {
    stackedData.negative.push({
      x: day.date.toString(),
      y: isNaN( day.negative ) ? 0 : day.negative,
    });

    stackedData.positive.push({
      x: day.date.toString(),
      y: isNaN( day.positive ) ? 0 : day.positive,
    });

    stackedData.total.push({
      x: day.date.toString(),
      y: isNaN( day.total ) ? 0 : day.total,
    });
  })

  return stackedData;

}

export function PrepArea(data, field) {
  const preparedData = [];

  data.forEach(row => {

    const year = row['date'].toString().substring(0, 4);
    const month = row['date'].toString().substring(4, 6);
    const day = row['date'].toString().substring(6, 8);
    const date = new Date(year, month, day);
    console.log(year, month, day)

    preparedData.push({
      x: date,
      y: isNaN( day[field] ) ? 0 : day[field],
      label: date,
    });
  })

  console.log(preparedData)

  
  return preparedData;

}

  
function percentIncrease(currentDailyIncrease, previousDailyIncrease) {
  return parseFloat(currentDailyIncrease / previousDailyIncrease * 100).toFixed(2);
}