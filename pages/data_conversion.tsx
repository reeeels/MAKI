export function convertData(inputData: { [key: string]: string[] }): { name: string, age: string, gender: string }[] {
  const outputData: { name: string, age: string, gender: string }[] = [];

  const keys = Object.keys(inputData);
  const maxLength = Math.max(...keys.map((key) => inputData[key].length));

  for (let i = 0; i < maxLength; i++) {
    const record: { name: string, age: string, gender: string } = { name: '', age: '', gender: '' };

    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      const value = inputData[key][i] ?? '';

      switch (key) {
        case 'name':
          record.name = value;
          break;
        case 'age':
          record.age = value;
          break;
        case 'gender':
          record.gender = value;
          break;
      }
    }

    outputData.push(record);
  }

  return outputData;
}
