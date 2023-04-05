import { useState } from 'react';
import styles from '@/styles/index.module.css';
import Table from './table';
import { motion } from 'framer-motion';

const Results = () => {
  const [fileData, setFileData] = useState(null)
  const [text, setText] = useState(null)
  const [narrativeInput, setNarrativeInput] = useState('');
  const [result, setResult] = useState();
  const [show, setShow] = useState(true);

  const handleFileRead = (e: any) => {
    const content = e.target.result
    setFileData(content)

  }

  const handleFileChosen = (e: any) => {
    const reader = new FileReader()
    reader.onloadend = handleFileRead
    reader.readAsText(e.target.files[0])
  }

  const handleText = (e: any) => {
    e.preventDefault()
    setText(e.target.value)
  }

  async function handleGenerate(e: any) {
    e.preventDefault();
    try {
      const response = await fetch('/api/data_extractor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ narrative: narrativeInput }),
      });

      const data = await response.json();
      console.log(data)
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      const tmp = data.result
      setResult(data.result);
      setNarrativeInput('');
    } catch (error) {
      alert(error.message);
    }
  }


  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/data_extractor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ narrative: narrativeInput }),
      });

      const data = await response.json();
      console.log(data)
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setNarrativeInput('');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='container'>
      <a style={{ textDecoration: 'none' }} href='/' ><h1 className={styles.results_page_header}>MAKI</h1></a>
      <div className='row'>
        <div className='col d-flex flex-column py-5 mt-4'>
          <form>
            <div className='input-group mt-5'>
              <input type='file' className='form-control' id='inputGroupFile01' onChange={handleFileChosen} />
            </div>
            <div className='input-group mt-5'>
              <textarea className='form-control shadow-none' placeholder='Type in a case note narrative...' rows={10} onChange={(e) => setNarrativeInput(e.target.value)}>{narrativeInput}</textarea>
            </div>
            <div className='align-items-right'>
              <button className='btn btn-danger text-light float-right mt-3' disabled={!narrativeInput} onClick={handleGenerate}>Generate</button>
            </div>
          </form>
        </div>

        {result
          &&
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className='col-8 border-left border-dark py-5'
          >
            <h1 className={styles.title}>Results</h1>
            <Table data={result} />
          </motion.div>
        }
      </div>
    </div>
  )
}

export default Results;