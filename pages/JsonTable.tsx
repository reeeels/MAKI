import React from 'react';

interface JsonTableProps {
  data: Record<string, any>;
}

const JsonTable: React.FC<JsonTableProps> = ({ data }) => {
  const keys = Object.keys(data);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {keys.map((key) => (
            <td key={key}>{data[key]}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default JsonTable;
