export function convertData(inputData: { [key: string]: string[] }): { SYMPTOMS: string, MEDICAL_HISTORY: string, PHYSICAL_EXAM: string, MEDICATION: string, TREATMENT: string}[] {
  const outputData: { SYMPTOMS: string, MEDICAL_HISTORY: string, PHYSICAL_EXAM: string, MEDICATION: string, TREATMENT: string}[] = [];

  const keys = Object.keys(inputData);
  console.log(keys)
  const maxLength = Math.max(...keys.map((key) => inputData[key].length));

  for (let i = 0; i < maxLength; i++) {
    const record: { SYMPTOMS: string, MEDICAL_HISTORY: string, PHYSICAL_EXAM: string, MEDICATION: string, TREATMENT: string } = { SYMPTOMS: '', MEDICAL_HISTORY: '', PHYSICAL_EXAM: '', MEDICATION: '', TREATMENT: ''};

    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      const value = inputData[key][i] ?? '';

      switch (key) {
        case 'SYMPTOMS':
          record.SYMPTOMS = value;
          break;
        case 'MEDICAL_HISTORY':
          record.MEDICAL_HISTORY = value;
          break;
        case 'PHYSICAL_EXAM':
          record.PHYSICAL_EXAM = value;
          break;
        case 'MEDICATION':
          record.MEDICATION = value;
          break;
        case 'TREATMENT':
          record.TREATMENT = value;
          break;
      
      
      }
    }

    outputData.push(record);
  }

  return outputData;
}


//   export function convertData(inputData: { [key: string]: string[] }): { SYMPTOMS: string, MEDICAL_HISTORY: string, PHYSICAL_EXAM: string, MEDICATION: string, TREATMENT: string}[] {
//     const outputData: { SYMPTOMS: string, MEDICAL_HISTORY: string, PHYSICAL_EXAM: string, MEDICATION: string, TREATMENT: string}[] = [];

//     const keys = Object.keys(inputData);
//     console.log(keys)
//     const maxLength = Math.max(...keys.map((key) => inputData[key].length));

//     for (let i = 0; i < maxLength; i++) {
//       const record: { SYMPTOMS: string, MEDICAL_HISTORY: string, PHYSICAL_EXAM: string, MEDICATION: string, TREATMENT: string } = { SYMPTOMS: '', MEDICAL_HISTORY: '', PHYSICAL_EXAM: '', MEDICATION: '', TREATMENT: ''};

//       for (let j = 0; j < keys.length; j++) {
//         const key = keys[j];
//         const value = inputData[key][i] ?? '';

//         switch (key) {
//           case 'SYMPTOMS':
//             record.SYMPTOMS = value;
//             break;
//           case 'MEDICAL_HISTORY':
//             record.MEDICAL_HISTORY = value;
//             break;
//           case 'PHYSICAL_EXAM':
//             record.PHYSICAL_EXAM = value;
//             break;
//           case 'MEDICATION':
//             record.MEDICATION = value;
//             break;
//           case 'TREATMENT':
//             record.TREATMENT = value;
//             break;
      
      
//         }
//       }

//       outputData.push(record);
//     }

//     return outputData;
//   }
