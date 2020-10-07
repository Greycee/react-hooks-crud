import React from "react";

export default function AddUserForm({
  users,
  onFormSubmit,
  setUsername,
  setEmail
}) {
  return (
    <form onSubmit={onFormSubmit}>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={users.username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={users.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Add new user</button>
    </form>
  );
}
