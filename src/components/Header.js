import React from 'react';
import styled from 'styled-components';
import SelectState from './SelectState';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { handler } = props;
  return (
  <PageHeader>
    <div className="site-info">
      <h1>Covid US State Dashboard</h1>
      <p>This dashboard is meant to help provide visualizations of U.S. State information related to the COVID-19 pandemic. 
        Select a state to view current and historical information as reported by various state and federal agencies. 
        All data is collected via API from <a href="https://covidtracking.com">The COVID Tracking Project</a>.</p>
    </div>
    <SelectState handler={handler} className="select-state" />
  </PageHeader>
  )
}

Header.propTypes = {
  handler: PropTypes.func.isRequired,
}

const PageHeader = styled.header`

  .site-info {
    font-size: 18px;
  }

  .select-state {
    margin-top: 40px;
  }
`;
