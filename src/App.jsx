import { useState } from 'react'
import './App.css'
import Counter from './features/counter/Counter'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'
import UsersList from './features/users/UsersList'
import AddUserForm from './features/users/AddUserForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddUserForm />
      <UsersList />
      <AddPostForm />
      <PostsList />
      <Counter />
      <Counter />
    </>
  )
}

export default App
