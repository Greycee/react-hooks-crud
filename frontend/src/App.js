import React, { useState, useEffect } from 'react'
import api from './services/api'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

function App() {
  const [users, setUsers] = useState([])
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  async function handleSelectedUser(user) {
    setEditing(true)
    setCurrentUser(user)
  }

  async function handleAddUser(e) {
    e.preventDefault()
    const newUser = {
      username,
      email,
    }

    if (!username || !email) {
      return alert('No empty field is allowed')
    }

    const response = await api.post('/users', newUser)

    setUsers([...users, response.data])
  }

  async function handleEditUser(editedUser) {
    await api.put(`/users/${editedUser.id}`, editedUser)
  }

  async function handleDeleteUser(id) {
    await api.delete(`/users/${id}`)
    setUsers(users.filter((user) => user.id !== id))
  }

  useEffect(() => {
    api.get('/users').then((response) => {
      setUsers(response.data)
    })
  }, [])

  return (
    <div className="container">
      <h1>
        <span
          role="img"
          aria-label="Users List"
          style={{ marginRight: '10px' }}
        >
          📝
        </span>
        Users List
      </h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                setEditing={setEditing}
                onUpdate={handleEditUser}
                user={currentUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm
                onFormSubmit={handleAddUser}
                users={users}
                setUsername={setUsername}
                setEmail={setEmail}
              />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            editUser={handleSelectedUser}
            deleteUser={handleDeleteUser}
          />
        </div>
      </div>
    </div>
  )
}

export default App
