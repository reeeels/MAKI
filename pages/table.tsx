import React from 'react';
import styles from '@/styles/index.module.css';

const Table = (props) => {
    const tmp = props.data ? props.data : null;
    const parsed = props.data ? [JSON.parse(props.data)] : [];

    return (
        <div>
            {tmp &&
                <>
                    <div>
                        <div className='d-flex flex-row'>
                            <div className={styles.startbox}>
                                <h4 className={styles.label}>SYMPTOMS</h4>
                            </div>
                            <div className={styles.textbox}>
                                {parsed[0].SYMPTOMS.map((symptom) => (
                                    <h4 className={styles.text}>{symptom},</h4>
                                ))}
                            </div>
                        </div>
                        <div className='d-flex flex-row'>
                            <div className={styles.box}>
                                <h4 className={styles.label}>MEDICAL HISTORY</h4>
                            </div>
                            {parsed[0].MEDICAL_HISTORY.map((history) => (
                                <h4 className={styles.text}>{history},</h4>
                            ))}
                        </div>
                        <div className='d-flex flex-row'>
                            <div className={styles.box}>
                                <h4 className={styles.label}>PHYSICAL EXAM</h4>
                            </div>
                            <div className={styles.textbox}>
                                {parsed[0].PHYSICAL_EXAM.map((physical) => (
                                    <h4 className={styles.text}>{physical},</h4>
                                ))}
                            </div>
                        </div>
                        <div className='d-flex flex-row'>
                            <div className={styles.box}>
                                <h4 className={styles.label}>MEDICATION</h4>
                            </div>
                            {parsed[0].MEDICATION.map((medication) => (
                                <h4 className={styles.text}>{medication},</h4>
                            ))}
                        </div>
                        <div className='d-flex flex-row'>
                            <div className={styles.endbox}>
                                <h4 className={styles.label}>TREATMENT</h4>
                            </div>
                            <div className={styles.textbox}>
                                {parsed[0].TREATMENT.map((treatment) => (
                                    <h4 className={styles.text}>{treatment},</h4>
                                ))}
                            </div>
                        </div>
                        <div className='d-flex flex-row'>
                            <div className={styles.endbox}>
                                <h4 className={styles.label}>SOCIAL FACTOR</h4>
                            </div>
                            {parsed[0].SOCIAL_FACTOR.map((factor) => (
                                <h4 className={styles.text}>{factor},</h4>
                            ))}
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Table;