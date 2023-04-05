export function arrayToTable(data: { [key: string]: any }[]): string {
  const headers = Object.keys(data[0]);
  const rows = data.map(person => Object.values(person));

  const tableHeader = `<thead><tr>${headers
    .map(header => `<th>${header}</th>`)
    .join('')}</tr></thead>`;
  const tableBody = `<tbody>${rows
    .map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`)
    .join('')}</tbody>`;
  const table = `<table>${tableHeader}${tableBody}</table>`;

  return table;
}