import React from 'react';
import { PrepArea, FormatDate } from '../PrepData';
import * as V from 'victory';
import PropTypes from 'prop-types';

export default function BarChart(props) {
  const { data, field, title } = props;

  const dataset = PrepArea(data, field);

  const headerStyles = {
    textAlign: 'center',
    marginBottom: 0,
  }

  const chartStyles = {
    data: { fill: "#c43a31" }
  }

  const xAxisStyles = {
  }

  return (
    <div className="chart">
      {title && <h3 style={headerStyles}>{title}</h3>}
      <V.VictoryChart
      theme={V.VictoryTheme.material}
      animate={false}>
        <V.VictoryBar 
          data={dataset}
          sortKey="x"
          sortOrder="descending"
          barWidth={3}
          style={chartStyles}
          labelComponent={
            <V.VictoryTooltip />
          }
        />
        <V.VictoryAxis
          theme={V.VictoryTheme.material}
          standalone={false}
          scale={{x: "time"}}
          style={{
            grid: {
              stroke: 'none',
            }
          }}
          tickFormat={(date, index, allDates) => {
            const currentDay = FormatDate(date);

            if ( index === 0 ) {
              return currentDay
            }
            
            const previousDay = FormatDate(allDates[index - 1]);
            return (currentDay === previousDay) ? '' : currentDay;
          }}
          tickLabelComponent={
            <V.VictoryLabel style={xAxisStyles} />
          }
        />
        <V.VictoryAxis 
          dependentAxis
          theme={V.VictoryTheme.material}
          standalone={false}
        />
      </V.VictoryChart>
    </div>
  )
}

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  field: PropTypes.string.isRequired,
  title: PropTypes.string,
}