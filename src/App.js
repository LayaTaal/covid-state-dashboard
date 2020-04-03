import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header'
import DataLayer from './components/DataLayer';

export default function App() {
  const [stateCode, setStateCode] = React.useState('');

  function fetchStateCode(e) {
    const selectedState = e.target.value;

    setStateCode(selectedState);
  }

  return (
    <div className="App">
      <Wrapper>
        <Header handler={fetchStateCode} />
        {stateCode && <DataLayer stateCode={stateCode} />}
      </Wrapper>   
    </div>
  );
}

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 4rem auto;
  padding: 20px;
  background: '#fafafa';
  min-height: 100vh;
  
  p {
    line-height: 1.5;
  }
`;