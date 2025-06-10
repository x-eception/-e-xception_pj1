const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
const token = req.headers.authorization;
if (!token) return res.status(401).json({ msg: 'No token provided' });

try {
const decoded = jwt.verify(token, config.jwtSecret);
req.user = decoded;
next();
} catch (err) {
res.status(401).json({ msg: 'Invalid token' });
}
};