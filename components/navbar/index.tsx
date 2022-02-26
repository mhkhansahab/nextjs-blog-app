import { NextPage } from "next";
import Link from "next/link";
import styles from '../../styles/navbar.module.css';
import { useAppSelector } from "../../redux/app/hooks";
import { useRouter } from "next/router";

const Navbar: NextPage = () => {
    const state = useAppSelector(state => state);
    const router = useRouter();

    const clickHandler = () => {
        if (state?.userData?.user) {
            router.push('/write')
        } else {
            router.push('/login')
        }
    }

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
                    <span className={styles.startbtn} onClick={clickHandler}>Start Writing</span>
                </span>
            </div>
        </div>
    );
}

export default Navbar;