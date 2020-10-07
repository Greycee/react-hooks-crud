import React from 'react'

export default function UserTable({ users, deleteUser, editUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td style={{ display: 'flex' }}>
                <button
                  onClick={() => editUser(user)}
                  style={{ background: 'transparent' }}
                >
                  <span role="img" aria-label="edit">
                    ✏️
                  </span>
                </button>

                <button
                  onClick={() => deleteUser(user.id)}
                  style={{ background: 'transparent' }}
                >
                  <span role="img" aria-label="delete">
                    🗑️
                  </span>
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
