import React from 'react'
import { useSelector } from 'react-redux'

import { selectAllUsers } from './usersSlice'

function UsersList() {
    const users = useSelector(selectAllUsers)

    const renderUsers = users.map(user => (
        <article key={user.id}>
            <h3>{user.name}</h3>
        </article>
    ))

  return (
    <div>
        <h1>Users List</h1>  
        {renderUsers}
    </div>
  )
}

export default UsersList