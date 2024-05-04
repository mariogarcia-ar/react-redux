import { useState } from 'react'
import './App.css'
import Counter from './features/counter/Counter'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddPostForm />
      <PostsList />
      <Counter />
      <Counter />
    </>
  )
}

export default App
