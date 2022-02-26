import { NextPage } from "next";
import Image from "next/image";
import styles from './../../styles/floatingbtn.module.css';


const FloatingButton: NextPage<{path:string, bottom: number}> = ({ path, bottom }) => {
    
    return (
        <div className={styles.container} style={{bottom}}>
            <Image src={path} height={32} width={32}></Image>
        </div>
    );
}

export default FloatingButton;