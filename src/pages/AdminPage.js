import React, { useState } from 'react';

// Sample data for users and transactions
const initialUsers = [
  { id: 1, username: 'farmer1', role: 'Farmer' },
  { id: 2, username: 'buyer1', role: 'Buyer' },
  { id: 3, username: 'admin1', role: 'Admin' }
];

const initialTransactions = [
  { id: 1, user: 'farmer1', product: 'Organic Apples', amount: 2.5, date: '2024-10-01' },
  { id: 2, user: 'buyer1', product: 'Handmade Soap', amount: 5.0, date: '2024-10-02' }
];

const AdminDashboard = () => {
  const [users, setUsers] = useState(initialUsers);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      username,
      role
    };
    setUsers([...users, newUser]);
    resetUserForm();
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setUsername(user.username);
    setRole(user.role);
  };

  const handleUpdateUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUserId
        ? { ...user, username, role }
        : user
    );
    setUsers(updatedUsers);
    resetUserForm();
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const resetUserForm = () => {
    setUsername('');
    setRole('');
    setEditingUserId(null);
  };

  return (
    <div className='admin-div'>
      <h2>Admin Dashboard</h2>
      <p>Manage user accounts, oversee transactions, and maintain the platform.</p>

      <h3>{editingUserId ? 'Edit User' : 'Add User'}</h3>
      <form onSubmit={(e) => {
          e.preventDefault();
          editingUserId ? handleUpdateUser() : handleAddUser();
        }}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="Farmer">Farmer</option>
            <option value="Buyer">Buyer</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit">{editingUserId ? 'Update User' : 'Add User'}</button>
      </form>

      <h3>Current Users</h3>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.role}
              <button onClick={() => handleEditUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No users registered</li>
        )}
      </ul>

      <h3>Transaction History</h3>
      <ul>
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.user} bought {transaction.product} for ${transaction.amount.toFixed(2)} on {transaction.date}
            </li>
          ))
        ) : (
          <li>No transactions available</li>
        )}
      </ul>
    </div>
  );
};

export default AdminDashboard;
