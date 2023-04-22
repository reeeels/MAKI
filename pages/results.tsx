import { useState, useEffect } from 'react';
import styles from '@/styles/index.module.css';
import Table from './table';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import { motion } from 'framer-motion';
import pdfjsLib from 'pdfjs-dist';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { useSpeechRecognition } from 'react-speech-kit';


const Results = () => {
  const [fileData, setFileData] = useState('');
  const [narrativeInput, setNarrativeInput] = useState(null);
  const [result, setResult] = useState();
  const [show, setShow] = useState(false);
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setNarrativeInput(result)
    }
  })

  const startListen = () => {
    setTimeout(() => {
      listen({ continuous: true });
      setShow(true);
    }, 1500);
  }

  const stopListen = () => {
    setTimeout(() => {
      stop();
      setShow(false);
    }, 1000);
  }

  const handleFileRead = (e: any) => {
    const content = e.target.result
    setNarrativeInput(content)
  }

  const handleFileChosen = async (e: any) => {

    const file = e.target.files[0];
    const fileType = file.type;

    if (!file) {
      alert('Please select a file');
      return;
    } else if (fileType === 'application/pdf') {

      const text = convertPdfToText(file)
      setNarrativeInput(text)

    } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        var doc = new Docxtemplater(new PizZip(content), { delimiters: { start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j' } });
        var text = doc.getFullText();
        setNarrativeInput(text);

      };
      reader.readAsBinaryString(file);

    } else {
      const reader = new FileReader();

      reader.onload = (event) => {
        const text = event.target.result;
        setNarrativeInput(text);
      };

      reader.readAsText(file);
    }

  }

  const convertPdfToText = (file) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = event.target.result;
      const arrayBuffer = data;
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let text = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map((item) => item['str']).join('');
      }
    };
    reader.readAsArrayBuffer(file);
  };



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
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      const tmp = data.result
      setResult(data.result);
    } catch (error) {
      alert(error.message);
    }
  }

  const printPage = () => {
    window.print();
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
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
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
            {show && <div className={styles.listening}>Listening...</div>}
            <div className='input-group mt-5'>
              <input type='file' accept='.txt,.docx' className='form-control' id='inputGroupFile01' onChange={handleFileChosen} />
              <div className='btn btn-outline-secondary' onMouseEnter={startListen} onMouseLeave={stopListen}>
                🎤
              </div>
            </div>
            <div className='input-group mt-5'>
              <textarea className='form-control shadow-none' placeholder='Type in a case note narrative...' rows={10} onChange={(e) => setNarrativeInput(e.target.value)} value={narrativeInput}></textarea>
            </div>
            <div className='align-items-right'>
              <button className='btn btn-danger text-light float-right mt-3' disabled={!narrativeInput && !fileData} onClick={handleGenerate}>Generate</button>
            </div>
          </form>
        </div>

        {result
          &&
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className='col-lg-8 border-left border-dark py-5'
          ><div className='d-flex flex-row justify-content-between'>
              <h1 className={styles.title}>Results</h1>
              <span><button className='btn btn-outline-secondary' onClick={printPage}><LocalPrintshopOutlinedIcon fontSize='medium' /></button></span>
            </div>
            <Table data={result} />
          </motion.div>
        }
      </div>
    </div>
  )
};

export default Results;