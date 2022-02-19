import type { NextPage } from 'next'
import styles from './../../styles/card.module.css'
import { Blog } from '../../interfaces'
import Link from 'next/link'

const Card: NextPage<Blog> = ({title, description, author, id}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.author}>{`Author- ${author}`}</div>
            <Link href={'/' + id}><div className={styles.button}>Read More</div></Link>
        </div>
    )
}

export default Card;