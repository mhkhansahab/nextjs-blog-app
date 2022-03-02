import type { NextPage } from 'next';
import styles from './../../styles/write.module.css';
import { useEffect, useState } from 'react';
import Route from '../../components/route';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { useRouter } from "next/router";
import { addBlog, getSingleBlog, updateBlog } from '../../redux/services/blogs.services';
import Loader from '../../components/loader';


const Write: NextPage = () => {

    const [state, setState] = useState({ showLoader: false });
    const [localState, setLocalState] = useState({ showLoader: true });
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });
    const [blogData, setBlogData] = useState({
        id: '',
        author: ''
    });
    const userData = useAppSelector(state => state?.userData);
    const dispatch = useAppDispatch();
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
            };
            const data = {
                token: userData?.token,
                blog: blog,
            };
            addBlog(data)
                .then((res: any) => {
                    if (res.success) {
                        router.push('/me');
                    } else {
                        setLocalState({ showLoader: false });
                    }
                })
                .catch((e: any) => {
                    console.log(e)
                    setLocalState({ showLoader: false });
                })
        }
    }

    function updateTheBlog() {
        setLocalState({ showLoader: true });
        const blog = {
            title: formData?.title,
            description: formData?.description,
            author: blogData?.author
        }
        const data = {
            id: blogData?.id,
            token: userData?.token,
            blog: blog,
        }
        dispatch(updateBlog(data))
            .then((res: any) => {
                if (res.success) {
                    router.push('/me')
                }else{
                    setLocalState({ showLoader: false });
                }
            })
            .catch((e: any) => {
                console.log(e)
                setLocalState({ showLoader: false });
            })
    }

    useEffect(() => {
        const { id } = router?.query;
        if (id) {
            getSingleBlog(id)
                .then((blog: any) => {
                    setFormData({
                        title: blog?.title,
                        description: blog?.description
                    })
                    setBlogData({
                        id: blog?._id,
                        author: blog?.author
                    })
                    setLocalState({ showLoader: false });
                })
                .catch((e: any) => {
                    console.log(e);
                    router.push('/me')
                })
        } else {
            setLocalState({ showLoader: false });
        }
    }, []) // eslint-disable-line

    return (
        <Route>
            {
                localState?.showLoader ?
                    <Loader /> :
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
                        <button className={styles.button} onClick={blogData?.id ? updateTheBlog : sendBlog}>
                            {!state.showLoader ? 'Save' : <div className={styles.inkLoader}></div>}
                        </button>
                    </div>
            }
        </Route>
    )
}

export default Write;