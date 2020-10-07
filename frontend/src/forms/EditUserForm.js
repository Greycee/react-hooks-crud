import React, { useState, useEffect } from 'react'

export default function EditUserForm({ user, onUpdate, setEditing }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const handleUpdateUser = () => {
    const editedUser = { id: user.id, username, email }
    onUpdate(editedUser)
  }

  useEffect(() => {
    const { username, email } = user
    setUsername(username)
    setEmail(email)
  }, [user])

  return (
    <form>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button style={{ marginRight: '10px' }} onClick={handleUpdateUser}>
        Update user
      </button>
      <button
        style={{ marginTop: '15px' }}
        onClick={() => setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}
