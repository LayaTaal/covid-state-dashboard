import React from 'react';
import { PrepArea } from '../PrepData';
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
    display: 'none',
  }

  return (
    <div className="chart">
      {title && <h3 style={headerStyles}>{title}</h3>}
      <V.VictoryChart
      theme={V.VictoryTheme.material}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}>
        <V.VictoryBar 
          data={dataset}
          sortKey="x"
          sortOrder="descending"
          barWidth={6}
          style={chartStyles}
          labelComponent={
            <V.VictoryTooltip />
          }
        />
        <V.VictoryAxis
          theme={V.VictoryTheme.material}
          standalone={false}
          label="Day"
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