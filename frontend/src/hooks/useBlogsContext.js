import React, { useContext } from 'react'
import { BlogsContext } from '../context/BlogContext'

export const useBlogsContext = () => {
  const contextValue = useContext(BlogsContext)

  if (!contextValue) {
    throw Error('useBlogsContext must be used inside a BlogsContextProvider')
  }

  return contextValue
}
