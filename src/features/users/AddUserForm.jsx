import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { userAdded } from './usersSlice'

function AddUserForm() {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const handleChange = (e) => setUserName(e.target.value)

    const onSaveUserClicked = () => {
        if (userName) {
            dispatch(userAdded(userName))
            setUserName('')
        }
    }
    
  return (
    <div>
        <h2>Add a new user</h2>
        <form>
            <label htmlFor="userName">User Name:</label>
            <input type="text" id="userName" name="userName" onChange={handleChange} />
            <button type="button" onClick={onSaveUserClicked}>Save</button>
        </form>

    </div>
  )
}

export default AddUserForm