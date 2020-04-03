import React from 'react';
import { PrepArea } from '../PrepData';
import * as V from 'victory';
import PropTypes from 'prop-types';

export default function AreaChart(props) {
  const { data, field, dates } = props;

  const dataset = PrepArea(data, field);

  const headerStyles = {
    textAlign: 'center',
  }

  return (
    <V.VictoryChart
    theme={V.VictoryTheme.material} 
    animate={{
      duration: 2000,
      onLoad: { duration: 1000 }
    }}>
      <h3 style={headerStyles}>{field}</h3>
      <V.VictoryArea data={dataset} />
      <V.VictoryAxis
        tickValues={dates}
        fixLabelOverlap
      />
      <V.VictoryAxis
        dependentAxis
        fixLabelOverlap
      />
    </V.VictoryChart>
  )
}

AreaChart.propTypes = {
  data: PropTypes.array.isRequired,
  dates: PropTypes.array.isRequired,
}