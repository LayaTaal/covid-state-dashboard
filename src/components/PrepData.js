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

  data.forEach(day => {
    preparedData.push({
      x: day.date.toString(),
      y: isNaN( day[field] ) ? 0 : day[field],
      label: day.date,
    });
  })

  
  return preparedData;

}

  
function percentIncrease(currentDailyIncrease, previousDailyIncrease) {
  return parseFloat(currentDailyIncrease / previousDailyIncrease * 100).toFixed(2);
}