import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBlogsContext } from '../hooks/useBlogsContext'

const BlogForm = () => {
  const { dispatch } = useBlogsContext()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const blog = { title, body, author }

    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setBody('')
      setAuthor('')
      setError(null)
      setEmptyFields([])
      console.log('new workout added', json)
      dispatch({ type: 'CREATE_BLOG', payload: json })
      navigate('/')
    }
  } 

  return (
    <form className='blogForm' onSubmit={handleSubmit}>
      <h2>Add a New Blog</h2>

      <label>Blog Title:</label>
      <input 
        name='title' 
        type='text' 
        onChange={(e) => setTitle(e.target.value)} 
        value={title} 
        className={emptyFields.includes('title') ? 'inputError' : ''} 
        />
      <label>Blog Body:</label>
      <input 
        name='body' 
        type='text' 
        onChange={(e) => setBody(e.target.value)} 
        value={body} 
        className={emptyFields.includes('body') ? 'inputError' : ''} 
        />
      <label>Blog Author:</label>
      <input 
        name='author' 
        type='text' 
        onChange={(e) => setAuthor(e.target.value)} 
        value={author} 
        className={emptyFields.includes('author') ? 'inputError' : ''} 
        />

      <button>Add Blog</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default BlogForm