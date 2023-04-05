import React from 'react';
import styles from '@/styles/index.module.css';

const Table = (props) => {
    const tmp = props.data ? props.data : null;
    const parsed = props.data ? [JSON.parse(props.data)] : [];

    return (
        <div>
            {tmp && parsed.map((index) => {
                return (
                    <>
                        <div>
                            <div className='d-flex flex-row'>
                                <div className={styles.startbox}>
                                    <h4 className={styles.label}>SYMPTOMS</h4>
                                </div>

                                <h4 className={styles.text}>{index.SYMPTOMS}</h4>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className={styles.box}>
                                    <h4 className={styles.label}>MEDICAL HISTORY</h4>
                                </div>
                                <h4 className={styles.text}>{index.MEDICAL_HISTORY}</h4>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className={styles.box}>
                                    <h4 className={styles.label}>PHYSICAL EXAM</h4>
                                </div>
                                <h4 className={styles.text}>{index.PHYSICAL_EXAM}</h4>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className={styles.box}>
                                    <h4 className={styles.label}>MEDICATION</h4>
                                </div>
                                <h4 className={styles.text}>{index.MEDICATION !== '' ? index.MEDICATION : 'None'}</h4>
                            </div>
                            <div className='d-flex flex-row'>
                                <div className={styles.endbox}>
                                    <h4 className={styles.label}>TREATMENT</h4>
                                </div>
                                <h4 className={styles.text}>{index.TREATMENT}</h4>
                            </div>
                        </div>
                    </>
                )
            })}

        </div>
    )
}

export default Table;