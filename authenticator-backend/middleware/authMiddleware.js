const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  // Get token from Authorization header
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Access Denied: No token provided' });

  try {
    // Split the token from the "Bearer" prefix and get the token part
    const tokenValue = token.split(' ')[1];

    // Verify the token
    const verified = jwt.verify(tokenValue, process.env.JWT_SECRET);
    
    // Attach the verified user info to the request object
    req.user = verified;

    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
}

module.exports = verifyToken;
