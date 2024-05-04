import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectAllPosts} from './postsSlice'

function PostsList() {
    const posts = useSelector(selectAllPosts)
    // const posts = useSelector(state => state.posts)

    const renderPosts = posts.map(post => (
       <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0,100)}</p>
       </article>
    ))

  return (
    <div>
      <h1>PostsList</h1>
      {renderPosts}

    </div>
  )
}

export default PostsList