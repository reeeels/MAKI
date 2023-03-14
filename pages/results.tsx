import Head from 'next/head'
import { useState } from 'react'
import pdfjs from 'pdfjs-dist'
import styles from '@/styles/Home.module.css'
// import annyang from 'annyang';

const Results = () => {
    const data: Number = 1
    const [fileData, setFileData] = useState(null)
    const [text, setText] = useState(null)

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

    const handleGenerate = (e: any) => {
        e.preventDefault()
        console.log(text)
    }

     
    console.log(text)



    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='container'>
                <div className='row mt-5'>
                    <form className='col-5 d-flex flex-column mt-5 py-5'>
                        <div className="input-group mt-5">
                            <input type="file" className="form-control" id="inputGroupFile01" onChange={handleFileChosen} />
                            {/* <button className='btn btn-light btn-outline-secondary text-dark'>Upload</button> */}
                        </div>
                        <div className="input-group mt-5">
                            <textarea className="form-control shadow-none" placeholder='Type in the case narrative...' rows={10} onChange={handleText}>{text}</textarea>
                        </div>
                        <div className='align-items-right'>
                            <button className='btn btn-light btn-outline-secondary text-dark float-right mt-3' disabled={!text} onClick={handleGenerate}>Generate</button>
                        </div>

                    </form>

                    {data
                        &&
                        <div className='col border-left border-dark py-5'>
                            <h1 className={styles.title}>Results</h1>
                        </div>
                    }
                </div>
            </main>
        </>
    )
}

export default Results