import { NextPage } from "next";
import Link from "next/link";
import styles from '../../styles/navbar.module.css';
import { useAppSelector } from "../../redux/app/hooks";

const Navbar: NextPage = () => {
    const state = useAppSelector(state => state);
    
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {
                    state?.userData?.user ?
                        <span className={styles.authText}>Hey {state?.userData?.user?.name}!</span>
                        :
                        <Link href='/login' passHref><span className={styles.signin}>Sign In</span></Link>
                }
                <span className={styles.btnContainer}>
                    <span className={styles.authText}>Let's </span>
                    <Link href='/login' passHref><span className={styles.startbtn}>Start Writing</span></Link>
                </span>
            </div>
        </div>
    );
}

export default Navbar;