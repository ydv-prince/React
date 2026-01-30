import React, { useState } from 'react';

export default function UserRecords() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ f: '', l: '', m: '' });
  const [openId, setOpenId] = useState(null);

  const submit = e => {
    e.preventDefault();
    if (form.f && form.l && form.m) {
      setUsers([...users, { id: Date.now(), ...form }]);
      setForm({ f: '', l: '', m: '' });
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <input value={form.f} onChange={e => setForm({...form, f: e.target.value})} placeholder="First" />
        <input value={form.l} onChange={e => setForm({...form, l: e.target.value})} placeholder="Last" />
        <input value={form.m} onChange={e => setForm({...form, m: e.target.value})} placeholder="Mobile" />
        <button>Add</button>
      </form>

      {users.map(u => (
        <div key={u.id}>
          {u.f}
          <button onClick={() => setOpenId(openId === u.id ? null : u.id)}>
            {openId === u.id ? 'Hide' : 'View'}
          </button>
          <button onClick={() => setUsers(users.filter(user => user.id !== u.id))}>
            Delete
          </button>
          {openId === u.id && <div>Last: {u.l}<br/>Mobile: {u.m}</div>}
        </div>
      ))}
    </>
  );
}