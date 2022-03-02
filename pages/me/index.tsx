import { NextPage } from "next";
import styles from "./../../styles/home.module.css";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import Route from "../../components/route";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import { deleteBlog, getBlogs } from "../../redux/services/blogs.services";

const MyBlogs: NextPage = () => {
    const [state, setState] = useState({ showLoader: false });
    const [isMyBlog, setIsMyBlog] = useState(false);
    const router = useRouter();
    const blogsData = useAppSelector(state => state?.blogsData)
    const dispatch = useAppDispatch();

    function handleClick() {
        setState({ showLoader: true });
    }

    function handleEdit(id: string) {
        router.push(`/write?id=${id}`)
    }

    function handleDelete(id: string) {
        const token = window?.localStorage?.getItem('token');
        if (id && token) {
            const userToken = JSON.parse(token);
            dispatch(deleteBlog({ id: id, token: userToken }))
            .then((data: any) => {
                console.log(data)
                
            })
            .catch(() => {
                
            })
        }
    }

    useEffect(() => {
        const isMe = router?.route?.includes('/me');
        if (isMe) {
            setIsMyBlog(true);
        }
        const user = window?.localStorage?.getItem('user');
        const token = window?.localStorage?.getItem('token');
        if (user && token) {
            const userData = JSON.parse(user);
            const userToken = JSON.parse(token);
            const id = userData?.id;

            dispatch(getBlogs({ id: id, token: userToken }))
                .then((data: any) => {
                    setState({ showLoader: false })
                })
                .catch(() => {
                    setState({ showLoader: false })
                })
        }

    }, [])   // eslint-disable-line

    return (
        <Route>
            {
                state?.showLoader ?
                    <Loader /> :
                    <>  <div className={styles.heading}>My Blogs</div>
                        <div className={styles.container}>
                            {
                                blogsData?.blogs ?
                                blogsData?.blogs?.length ?
                                    blogsData?.blogs?.map((blog: any, index: number) => {
                                        return <Card
                                            key={index}
                                            title={blog?.title}
                                            description={blog?.description}
                                            author={blog?.author}
                                            id={blog?._id}
                                            isMyBlog={isMyBlog}
                                            handleClick={handleClick}
                                            handleEdit={handleEdit}
                                            handleDelete={handleDelete}
                                        ></Card>
                                    }): <div className={styles.emptyBlogText}>No Blog Available</div>
                                    : <Loader />
                            }
                        </div>
                    </>}
        </Route>
    )
}

export default MyBlogs;