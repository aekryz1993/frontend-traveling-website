import {useState, useEffect} from "react"
import { firestore } from '../lib/db'
import Layout from '../components/Layout'

const Publications = () => {
  const [blogs, setBlogs] = useState([])

  const getBlogs = async () => {
    const query = await firestore.collection("blogs").get()
    const blogs = query.docs.map(blog => {
      return {
        id: blog.id,
        ...blog.data(),
      }
    })

    setBlogs(blogs)
  }

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <Layout>
      <div>
        {blogs.map((blog, index) => <div key={index}>
          <p>{blog.title}</p>
          <p>{blog.content}</p>
        </div>)}
      </div>
    </Layout>
  )
}

export default Publications