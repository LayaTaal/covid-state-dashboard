/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import StackedChart from './charts/StackedChart';
import BarChart from './charts/BarChart';
import DataTable from './DataTable';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const datasets = {
  usDaily: 
    {
      name: 'US Daily',
      endpoint: 'https://covidtracking.com/api/us/daily', // Us daily time series
    },
  stateDaily:
    {
      name: 'State Data',
      endpoint: 'https://covidtracking.com/api/states/daily', // States daily time series
    },
  stateInfo:
    {
      name: 'State Information',
      endpoint: 'https://covidtracking.com/api/states/info', // State information
    },
  stateCurrent:
    {
      name: 'Current State Data',
      endpoint: 'https://covidtracking.com/api/states', // Latest state data
    }
}

export default function DataLayer(props) {
  const { stateCode } = props;

  const [stateInfo, setStateInfo] = React.useState({});
  const [data, setData] = React.useState({});

  useEffect(() => {
      async function fetchData() {

        const stateInfoUrl = `${datasets.stateInfo.endpoint}?state=${stateCode}`;

        fetch(stateInfoUrl)
          .then(response => response.json())
          .then(info => {
            setStateInfo(info);
        });

        const dataUrl = `${datasets.stateDaily.endpoint}?state=${stateCode}`;
      
        fetch(dataUrl)
          .then(response => response.json())
          .then(dailyData => {
            setData(dailyData);
        });
    }

    fetchData()

  }, [stateCode]);
  
  if (stateInfo.hasOwnProperty('state') && data.length > 0) {
    const dates = data.map(day => day.date);

    const tableCols = [
      'date', 'negative', 'positive', 'death', 'hospitalized', 'recovered', 'total'
    ]

    return (
      <DataContainer key={stateCode}>
        <div key={stateInfo.state} className="state-data">
          <header>
            <h2 className="state-data__title">{stateInfo.name}</h2>
            <p>{stateInfo.notes}</p>
            <p><b>Last Updated: {data[0]['dateChecked']}</b></p>
          </header>
        </div>
        <DataCharts>
          <BarChart data={data} dates={dates} field='negative' title='Tested Negative' />
          <BarChart data={data} dates={dates} field='positive' title='Tested Positive' />
          <BarChart data={data} dates={dates} field='death' title='Deaths Reported' />
          <BarChart data={data} dates={dates} field='negativeIncrease' title='Daily Negative' />
          <BarChart data={data} dates={dates} field='positiveIncrease' title='Daily Positive' />
          <BarChart data={data} dates={dates} field='deathIncrease' title='Deaths per Day' />
        </DataCharts>
        <DataTable data={data} tableCols={tableCols} title='Historical Daily Data' />
      </DataContainer>
    )
  }

  return (
    <DataContainer>
      Loading...
    </DataContainer>    
  )
}

DataLayer.propTypes = {
  stateCode: PropTypes.string.isRequired,
}

const DataContainer = styled.div`
margin: 2rem 0;
	padding: 2rem;
  background: #FAFAFA;
`;

const DataCharts = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
  margin: 2rem 0;

  .chart {
    flex: 0 0 100%;

    @media (min-width: 768px) {
      flex: 0 0 33.33%;
    }
  }
`;
