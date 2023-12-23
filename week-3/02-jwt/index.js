const jwt = require('jsonwebtoken');
const zod = require('zod');
const jwtPassword = 'secret';

const validateInput = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6),
});

function signJwt(username, password) {
  const user = { username: username, password: password };
  const validation = validateInput.safeParse(user);
  if (!validation.success) {
    return null;
  }
  const token = jwt.sign(user, jwtPassword);
  return token;
}

function verifyJwt(token) {
  try {
    const verifiedTokenResult = jwt.verify(token, jwtPassword);
    console.log(verifiedTokenResult);
    return true;
  } catch (err) {
    return false;
  }
}

function decodeJwt(token) {
  const parts = token.split('.');
  if (!(parts.length === 3)) return false;
  try {
    const results = jwt.decode(token);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
