import { NextPage } from "next";
import Link from "next/link";
import styles from '../../styles/navbar.module.css';

const Navbar: NextPage = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.links}>
                <Link href='/login'><span className={styles.signin}>Sign In</span></Link>
                <Link href='/login'><span className={styles.startbtn}>Start Writing</span></Link>
            </div>
        </div>
    );
}

export default Navbar;