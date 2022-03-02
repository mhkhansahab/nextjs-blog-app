import { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType, GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import styles from "../styles/blog.module.css";

// export const getStaticPaths: GetStaticPaths = async () => {
//     const blogs = await fetch('https://nestjs-blog-app.herokuapp.com/blogs');
//     const jsonResponse = await blogs.json();
//     const paths = jsonResponse.map((blog: any) => {
//         return {
//             params: { id: blog?._id }
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     };
// }

// export const getStaticProps: GetStaticProps = async (context: any) => {
//     const id = context.params.id;
//     const response = await fetch('https://nestjs-blog-app.herokuapp.com/blogs/' + id);
//     const blog: any = await response.json();
//     return {
//         props: { blog }
//     }
// }

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const { id } = context?.query;
    const response = await fetch('https://nestjs-blog-app.herokuapp.com/blogs/' + id);
    const blog: any = await response.json();

    return {
        props: { blog }
    }
}

const Blog: NextPage = ({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{blog?.title}</div>
            <div className={styles.author}>{blog?.author}</div>
            <div className={styles.description}>{blog?.description}</div>
        </div>
    );
}

export default Blog;