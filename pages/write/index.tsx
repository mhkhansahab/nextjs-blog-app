import type { NextPage } from 'next';
import styles from './../../styles/write.module.css';
import { useState } from 'react';
import Route from '../../components/route';
const Write: NextPage = () => {

    const [state, setState] = useState({ showLoader: false });

    return (
        <Route>
            <div className={styles.container}>
                <input placeholder='Enter Title' className={styles.input}></input>
                <textarea placeholder='Enter Description' className={styles.textarea}></textarea>
                <button className={styles.button}>
                    {!state.showLoader ? 'Save' : <div className={styles.inkLoader}></div>}
                </button>
            </div>
        </Route>
    )
}

export default Write;