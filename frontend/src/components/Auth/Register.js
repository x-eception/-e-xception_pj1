import React, { useState } from 'react';
import axios from '../../utils/axiosInstance';

function Register() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleRegister = async () => {
try {
await axios.post('/auth/register', { name, email, password });
alert('Registered successfully. Please log in.');
} catch (err) {
alert('Registration failed');
}
};

return (
<div className="container">
<h2>Register</h2>
<input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br />
<input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
<input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
<button onClick={handleRegister}>Register</button>
</div>
);
}

export default Register;