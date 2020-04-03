import React from 'react';
import { PrepStacked } from '../PrepData';
import * as V from 'victory';
import PropTypes from 'prop-types';

export default function StackedChart(props) {
  const { data, dates } = props;

  const datasets = PrepStacked(data);

  const headerStyles = {
    textAlign: 'center',
  }

  const xAxisStyles = {
    display: 'none',
  }

  return (
    <div className="chart">
      <h3 style={headerStyles}>Total Cases</h3>
      <V.VictoryChart
      theme={V.VictoryTheme.material} 
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}>      
        <h3 style={headerStyles}>Test Results</h3>
        <V.VictoryStack
          theme={V.VictoryTheme.material} 
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
        }}
        >
          {Object.keys(datasets).map(key => <V.VictoryArea data={datasets[key]} key={key} sortKey="x" sortOrder="descending" />)}
        </V.VictoryStack>
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

StackedChart.propTypes = {
  data: PropTypes.array.isRequired,
  dates: PropTypes.array.isRequired,
}