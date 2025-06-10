import React, { useState } from 'react';
import axios from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleLogin = async () => {
try {
const res = await axios.post('/auth/login', { email, password });
localStorage.setItem('token', res.data.token);
navigate('/dashboard');
} catch (err) {
alert('Login failed');
}
};

return (
<div className="container">
<h2>Login</h2>
<input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
<input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
<button onClick={handleLogin}>Login</button>
</div>
);
}

export default Login;