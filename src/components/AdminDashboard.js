import React, { useState } from 'react';
import '../styles/admin-dashboard.css'; // Importing the CSS file

// Sample data for users (you can replace this with an API call)
const initialUsers = [
  { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin', avatar: 'https://via.placeholder.com/50?text=A' },
  { id: 2, username: 'farmer1', email: 'farmer1@example.com', role: 'farmer', avatar: 'https://via.placeholder.com/50?text=F' },
  { id: 3, username: 'buyer1', email: 'buyer1@example.com', role: 'buyer', avatar: 'https://via.placeholder.com/50?text=B' }
];

const AdminDashboard = () => {
  const [users, setUsers] = useState(initialUsers);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('farmer');
  const [editingUserId, setEditingUserId] = useState(null);

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      username,
      email,
      role,
      avatar: 'https://via.placeholder.com/50?text=New' // Placeholder for new users
    };
    setUsers([...users, newUser]);
    resetForm();
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setUsername(user.username);
    setEmail(user.email);
    setRole(user.role);
  };

  const handleUpdateUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUserId ? { ...user, username, email, role } : user
    );
    setUsers(updatedUsers);
    resetForm();
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setRole('farmer');
    setEditingUserId(null);
  };

  return (
    <div className="admin-dashboard">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <p className="dashboard-description">Manage user accounts, oversee transactions, and maintain the platform.</p>

      <h3 className="form-title">{editingUserId ? 'Edit User' : 'Add User'}</h3>
      <form className="user-form" onSubmit={(e) => {
          e.preventDefault();
          editingUserId ? handleUpdateUser() : handleAddUser();
        }}>
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Role:</label>
          <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="farmer">Farmer</option>
            <option value="buyer">Buyer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          {editingUserId ? 'Update User' : 'Add User'}
        </button>
      </form>

      <h3 className="users-list-title">Users List</h3>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <img src={user.avatar} alt={`${user.username}'s avatar`} className="user-avatar" />
            <span className="user-info">
              {user.username} ({user.email}) - Role: {user.role}
            </span>
            <div className="user-actions">
              <button onClick={() => handleEditUser(user)} className="edit-button">Edit</button>
              <button onClick={() => handleDeleteUser(user.id)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
