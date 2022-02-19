import type { NextPage,InferGetStaticPropsType, GetStaticProps } from 'next'
import styles from '../styles/home.module.css'
import Card from '../components/card'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://nestjs-blog-app.herokuapp.com/blogs');
  const blogs:any = await response.json();
  return {
    props: { blogs }
  }
}

const Home: NextPage = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div className={styles.container}>
      {
        blogs?.map((blog: any, index: number) => {
          return <Card key={index} title={blog?.title} description={blog?.description} author={blog?.author} id={blog?._id}></Card>
        })
      }
    </div>
  )
}

export default Home;
