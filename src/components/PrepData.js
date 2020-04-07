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

    preparedData.push({
      x: row.date.toString(),
      y: isNaN( row[field] ) ? 0 : row[field],
      label: row.date.toString(),
    });
  })
  
  return preparedData;

}
  
function percentIncrease(currentDailyIncrease, previousDailyIncrease) {
  return parseFloat(currentDailyIncrease / previousDailyIncrease * 100).toFixed(2);
}

export function FormatDate(date) {

  const year = date.toString().substring(0, 4);
  const month = date.toString().substring(4, 6);
  const day = date.toString().substring(6, 8);
  const formattedDate = new Date(year, month-1, day);

  return formattedDate.toLocaleString('en-us', { month: 'short' });
}