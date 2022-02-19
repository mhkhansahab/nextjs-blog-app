import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import { useState } from 'react'
import { Blog } from '../interfaces'
import Card from '../components/card'

const Home: NextPage = () => {

  const arr: Blog[] = [
    {
      title: "delectus aut autem",
      description: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus',
      author: 'Joe'
    },
    {
      title: "quis ut nam facilis et officia qui",
      description: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
      author: 'Peter'
    },
    {
      title: "et porro tempora",
      description: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
      author: 'Max'
    },
    {
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      description: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
      author: 'Leo'
    },
    {
      title: "illo expedita consequatur quia in",
      description: 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
      author: 'Anna'
    }
  ]

  const [blogs, setBlogs] = useState<Blog[]>(arr);

  return (
    <div className={styles.container}>
      {
        blogs?.map((blog, index) => {
          return <Card key={index} title={blog?.title} description={blog?.description} author={blog?.author}></Card>
        })
      }
    </div>
  )
}

export default Home;
