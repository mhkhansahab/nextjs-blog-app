import { NextPage } from "next";
import styles from "./../../styles/home.module.css";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import Route from "../../components/route";

const MyBlogs: NextPage = () => {
    const [blogs, setBlogs]: any = useState(null);

    useEffect(() => {
        (async () => {
            const user = window?.localStorage?.getItem('user');
            const token = window?.localStorage?.getItem('token');
            if (user && token) {
                const userData = JSON.parse(user);
                const userToken = JSON.parse(token);
                const id = userData?.id;
                const apiData: any = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: userToken,
                    }
                };

                const response = await fetch('https://nestjs-blog-app.herokuapp.com/blogs/me/' + id, apiData);
                const blogs: any = await response.json();
                setBlogs(blogs?.data);
            }
        })()
    }, [])   // eslint-disable-line

    return (
        <Route>
            <div className={styles.container}>
                {
                    blogs ?
                        blogs?.map((blog: any, index: number) => {
                            return <Card key={index} title={blog?.title} description={blog?.description} author={blog?.author} id={blog?._id}></Card>
                        })
                        : <Loader />
                }
            </div>
        </Route>
    )
}

export default MyBlogs;