import { NextPage } from "next";
import styles from './../../styles/loader.module.css';

const Loader: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <div className={styles.loaderDot}></div>
                <div className={styles.loaderDot}></div>
                <div className={styles.loaderDot}></div>
                <div className={styles.loaderDot}></div>
                <div className={styles.loaderDot}></div>
                <div className={styles.loaderDot}></div>
                <div className={styles.loaderText}></div>
            </div>
        </div>


    );
}

export default Loader;