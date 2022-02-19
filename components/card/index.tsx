import type { NextPage } from 'next'
import styles from './../../styles/card.module.css'
import { Blog } from '../../interfaces'

const Card: NextPage<Blog> = ({title, description, author}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.author}>{`Author- ${author}`}</div>
            <div className={styles.button}>Read More</div>
        </div>
    )
}

export default Card;