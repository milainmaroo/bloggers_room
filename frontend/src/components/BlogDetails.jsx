import React from 'react'

const BlogDetails = ({ blog }) => {
  return (
    <div className='blogDetails'>
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
      <p><span>Written by:</span> {blog.author}</p>
      <p>{blog.createdAt}</p>
    </div>
  )
}

export default BlogDetails