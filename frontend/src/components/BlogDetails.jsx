import React from 'react'
import { useBlogsContext } from '../hooks/useBlogsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BlogDetails = ({ blog }) => {
  const { dispatch } = useBlogsContext()

  const handleClick = async () => {
    const response = await fetch('/api/blogs/' + blog._id, {
      method: 'DELETE'
    })

    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_BLOG', payload: json })
    }
  }

  return (
    <div className="blogDetails">
      <div className='blogContainer'>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
        <p><span>Written by:</span> {blog.author}</p>
        <p>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true})}</p>
      </div>
      <div className="delete">
        <p className='material-symbols-outlined' onClick={handleClick}>delete</p>
      </div>
    </div>
  )
}

export default BlogDetails