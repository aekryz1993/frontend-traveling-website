import { useState, useEffect } from "react"
import { firestore, signUp } from '../lib/db'
import Layout from '../components/Layout'

const Publications = () => {
  const myStyle = () => ({
    position: 'absolute',
    top: '30vh',
  })
  // const [blogs, setBlogs] = useState([])
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [passwordOne, setPasswordOne] = useState('')
  // const [passwordTwo, setPasswordTwo] = useState('')
  // const [error, setError] = useState(null)
  const [values, setValues] = useState({
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  })

  // const getBlogs = async () => {
  //   const query = await firestore.collection("blogs").get()
  //   const blogs = query.docs.map(blog => {
  //     return {
  //       id: blog.id,
  //       ...blog.data(),
  //     }
  //   })

  //   setBlogs(blogs)
  // }

  // useEffect(() => {
  //   getBlogs()
  // }, [])
  const onSubmit = (event) => {
    event.preventDefault()
    const { username, email, passwordOne } = values

    signUp(email, passwordOne)
      .then(authUser => setValues({ ...values }))
      .catch(error => setValues({ ...values, error: error.message }))

  }

  const onChange = event => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const isInvalid =
    values.passwordOne !== values.passwordTwo ||
    values.passwordOne === '' ||
    values.email === '' ||
    values.username === '';

  return (
    <Layout>
      <div style={myStyle()}>
        {/* {blogs.map((blog, index) => <div key={index}>
          <p>{blog.title}</p>
          <p>{blog.content}</p>
        </div>)} */}
        <form onSubmit={onSubmit}>
          <input
            name="username"
            value={values.username}
            onChange={onChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            value={values.email}
            onChange={onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            value={values.passwordOne}
            onChange={onChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            value={values.passwordTwo}
            onChange={onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <button disabled={isInvalid} type="submit">Sign Up</button>
          {values.error && <p>{values.error.message}</p>}
        </form>
      </div>
    </Layout>
  )
}

export default Publications