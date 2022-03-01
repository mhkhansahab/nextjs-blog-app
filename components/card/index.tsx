import type { NextPage } from 'next'
import styles from '../../styles/card.module.css'
import { Blog } from '../../interfaces'
import Link from 'next/link'
import Image from 'next/image'

const Card: NextPage<Blog> = ({ title, description, author, id, isMyBlog, handleClick, handleDelete, handleEdit }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.author}>{`Author- ${author}`}</div>
            {/* <div className={styles.description}>{description}</div> */}
            <div className={styles.img}>
                <Image src={'/writing.png'}
                    width="190px"
                    height="180px"
                ></Image>
            </div>
            <Link href={'/' + id} passHref><div className={styles.button} onClick={handleClick}>Read More</div></Link>
            {
                isMyBlog ?
                    <div className={styles.imgContainer}>
                        <span onClick={handleEdit ? () => handleEdit(id) : undefined}>
                            <Image src={'/edit.png'} height={24} width={24}></Image>
                        </span>
                        <span onClick={handleDelete ? () => handleDelete(id) : undefined}>
                            <Image src={'/delete.png'} height={24} width={24}></Image>
                        </span>

                    </div> : null
            }
        </div>
    )
}

export default Card;