import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postsSlice'

import './posts.css'

function AddPostForm() {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const onTitleChange = (e) => setTitle(e.target.value)
    const onContentChange = (e) => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded({ id: nanoid(), title, content }))
            setTitle('')
            // setContent('')
        }
    }

  return (
    <div>
        <h2>Add a new Post</h2>
        <form action="">
            <label htmlFor="postTitle">post title:</label>
            <input type="text" name="postTitle" id="postTitle" 
                    value={title}
                    onChange={onTitleChange} />
            
            <label htmlFor="postContent">post content:</label>
            <textarea name="postContent" id="postContent" cols="30" rows="10"
                    onChange={onContentChange}
              >{content}</textarea>

            <button type="button"
              onClick={onSavePostClicked}
              >Save Post</button>
        </form>

    </div>
  )
}

export default AddPostForm