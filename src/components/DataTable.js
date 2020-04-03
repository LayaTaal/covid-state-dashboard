import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function DataTable(props) {
  const { data, tableCols, title } = props;
  
  console.log(data);
  console.log(tableCols);

  return (
    <React.Fragment>
      {title && <h2>{title}</h2>}
      <Table>
        {tableCols.length > 0 &&
        <thead>
          <tr>
            {tableCols.map(col => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        }
        <tbody>
          {data.length > 0 &&
          data.map((row, index) => (
            <tr key={index}>
              {tableCols.map(col => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))
          }
        </tbody>
      </Table>
    </React.Fragment>
  )
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  tableCols: PropTypes.array,
  title: PropTypes.string,
}

const Table = styled.table`
width: 100%;
border-collapse: collapse;

  tr {

    :nth-child(2n) {
      background: #F5F5F5;
    }
  }

  thead {
    tr {
      background: #E0E0E0;
    }

    th {
      text-transform: capitalize;
      font-size: 18px;
    }
  }

  th, td {
    text-align: right;
    padding: 8px 4px;

    :first-child {
      text-align: left;
    }
  }
  
`;
