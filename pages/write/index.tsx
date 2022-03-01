import type { NextPage } from 'next';
import styles from './../../styles/write.module.css';
import { useState } from 'react';
import Route from '../../components/route';
import { useAppSelector } from '../../redux/app/hooks';
import { useRouter } from "next/router";


const Write: NextPage = () => {

    const [state, setState] = useState({ showLoader: false });
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });
    const userData = useAppSelector(state => state?.userData);
    const router = useRouter();

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e?.target?.value;
        setFormData({
            ...formData,
            title: value
        })

    }

    function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e?.target?.value;
        setFormData({
            ...formData,
            description: value
        })

    }

    async function sendBlog() {
        if (formData?.title?.trim() !== '' && formData?.description?.trim() !== '') {
            setState({ showLoader: true })
            const blog = {
                title: formData?.title,
                description: formData?.description,
                author: userData?.user?.name,
                authorId: userData?.user?._id
            }
            const apiData: any = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: userData?.token,
                },
                body: JSON.stringify({ ...blog })
            };

            try {
                const response: any = await fetch('https://nestjs-blog-app.herokuapp.com/blogs', apiData);
                const jsonResponse: any = await response.json();
                if (jsonResponse?.success) {
                    router.push('/')
                } else {
                    setState({ showLoader: false })
                }
            } catch (e) {
                console.log(e);
                setState({ showLoader: false })
            }
        }
    }

    return (
        <Route>
            <div className={styles.container}>
                <input
                    placeholder='Title'
                    value={formData?.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                    className={styles.input}>
                </input>
                <textarea
                    placeholder='Write here...'
                    value={formData?.description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleTextAreaChange(e)}
                    className={styles.textarea}>
                </textarea>
                <button className={styles.button} onClick={sendBlog}>
                    {!state.showLoader ? 'Save' : <div className={styles.inkLoader}></div>}
                </button>
            </div>
        </Route>
    )
}

export default Write;