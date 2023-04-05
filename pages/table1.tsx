import React from 'react';

const Table = (data) => {
  const tableHeaders = Object.keys(data);

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {tableHeaders.map((header, index) => <td key={index}>{row[header]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;