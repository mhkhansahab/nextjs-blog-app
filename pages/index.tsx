import type { NextPage, InferGetStaticPropsType, GetStaticProps, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import styles from '../styles/home.module.css'
import Card from '../components/card'
import { useState } from 'react';
import Loader from '../components/loader';

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await fetch('https://nestjs-blog-app.herokuapp.com/blogs');
//   const blogs: any = await response.json();
//   return {
//     props: { blogs }
//   }
// }
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://nestjs-blog-app.herokuapp.com/blogs');
  const blogs: any = await response.json();
  return {
    props: { blogs }
  }
}

const Home: NextPage = ({ blogs }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [state, setState] = useState({ showLoader: false });

  function handleClick() {
    setState({ showLoader: true });
  }

  return (
    <div className={styles.container}>
      {state?.showLoader ?
        <Loader /> :
        <>
          {
            blogs?.length ?
              blogs?.map((blog: any, index: number) => {
                return <Card
                  key={index}
                  title={blog?.title}
                  description={blog?.description}
                  author={blog?.author}
                  id={blog?._id}
                  isMyBlog={false}
                  handleClick={handleClick}
                ></Card>
              }) : <div className={styles.emptyBlogText}>No Blog Available</div>
          }
        </>
      }
    </div>
  )
}

export default Home;
